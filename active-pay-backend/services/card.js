const Card = require('../model/card.js')
var crypto = require('crypto');
const Profile = require('../model/profile.js')

const cypherKey = "mySecretKey";

function encrypt(text) {
    var cipher = crypto.createCipher('aes-256-cbc', cypherKey)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted; //94grt976c099df25794bf9ccb85bea72
}

function decrypt(text) {
    var decipher = crypto.createDecipher('aes-256-cbc', cypherKey)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec; //myPlainText
}
module.exports = {
    addCard: async (req, res) => {
        try {
            const hashedCardNumber = encrypt(req.body.cardNumber);
            // we have to check for all the cards
            const userCards = await Card.find({
                attributes: ['cardNumber', 'cardOwnerName', 'expiryMonth', 'expiryYear', 'id']
            })
                .catch((err) => {
                    res.statusCode = 500;
                    throw new Error(err);
                })
            // if there is not authCode in req
            // if (true) {
            for (const card of userCards) {
                // const currentCardNumber =await bcrypt.hash(card.cardNumber,10);
                // await bcrypt.compare(card.cardNumber, req.body.cardNumber)
                // if we found the same cardNumber
                // console.log(decrypt(card.cardNumber)+"   "+req.body.cardNumber)
                if (req.body.cardNumber===decrypt(card.cardNumber)) {
                    for (const profile of card.profile) {

                        // if the found card is added by the same user
                        if (req.user.id === profile._id) {
                            res.statusCode = 409;
                            throw new Error('Card is Already Added');
                        }
                    }

                    // if the found card is added by some other user
                    res.statusCode = 422;
                    throw new Error('You\'re are not authorised to add this card');
                }
            }

            // now we didn't encounter any card with user input card number, so here we assume the user is legit and we will add the card into db.
            const profileAssociated = await Profile.findOne({
                _id: req.user.id,
            }).catch((err) => {
                res.statusCode = 500;
                throw new Error(err);
            })
            const newCard = new Card({
                cardOwnerName: req.body.cardOwnerName.toUpperCase(),
                cardNumber: hashedCardNumber,
                expiryMonth: req.body.expiryMonth,
                expiryYear: req.body.expiryYear,
                cvv: req.body.cvv,
                profile: profileAssociated
            })
            await newCard.save().catch((err) => {
                res.statusCode = 500;
                throw new Error(err);
            })
            const updated_profile = []
            // console.log([...profileAssociated.card, newCard])
            await profileAssociated.update({
                _id: profileAssociated._id,
                card: [...profileAssociated.card, newCard]

            })
            res.status(200).send(newCard);
        }
        catch (err) {
            // err.statusCode=500
            throw new Error(err)
        }
        
    },
    getAllCards: async (req, res) => {

        // we have to get cards associated with the current user.
        const userCards = await Profile.find({
            _id: req.user.id // getting the profile associated with the currentLoggedIn user
            // getting the card associated with the currentProfile
        }).catch((err) => {
            res.statusCode = 500;
            throw new Error(err);
        })
        // let data = [{"id":"1adbeaaf-700a-4410-89ac-e72cf8dda280","cardOwnerName":"ABHISHEK RANJAN","cardNumber":"4242424242424242","expiryMonth":7,"expiryYear":2026,"outstandingAmount":38},{"id":"6e837d5d-130a-4971-9568-41035ee81ae9","cardOwnerName":"TEMP USER","cardNumber":"2720999448373736","expiryMonth":5,"expiryYear":2027,"outstandingAmount":11547},{"id":"c1ef0fa8-205a-4c3a-91b9-f2d860ce412d","cardOwnerName":"RAHUL","cardNumber":"378282246310005","expiryMonth":11,"expiryYear":2027,"outstandingAmount":0},{"id":"c4a1d5c2-d0d7-48c9-b516-954ca628b9f2","cardOwnerName":"ABHI","cardNumber":"6010601060106010","expiryMonth":1,"expiryYear":2021,"outstandingAmount":0}]
        let data = []
        for (const card of userCards[0].card) {
            // let outstandingAmount = await calculateOutstandingAmount(card.id);
            let outstandingAmount = 0
            let card_filtered = await Card.findById(card)
            // console.log(card_filtered)
            // let originalCardNumber = await bcrypt.hash(card.cardNumber,10)
            let cardInfo = {
                id: card_filtered._id.toString(),
                cardOwnerName: card_filtered.cardOwnerName,
                cardNumber: decrypt(card_filtered.cardNumber),
                expiryMonth: card_filtered.expiryMonth,
                expiryYear: card_filtered.expiryYear,
                outstandingAmount: card_filtered.outstandingAmount.toString(),
            }
            data.push(cardInfo);
        }
        // console.log(data)
        res.send(data);
    },
}
