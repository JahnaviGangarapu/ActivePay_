const Card = require('../model/card.js')
var crypto = require('crypto');
const Profile = require('../model/profile.js')
const Reward = require('../model/reward.js')
const Transaction = require('../model/transaction.js');
const { json } = require('body-parser');
const cypherKey = "mySecretKey";

function randomValueHex (len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex')
        .slice(0,len).toUpperCase();
}

module.exports = {
    getCoinsCount: async(req, res) => {
        // getProfileAssociated
        const profileAssociated = await Profile.findOne({
            where: {
                UserId: req.user.id
            },
            //if profile is found ,get the coins associated to it
            attributes: ['coins']
        })
        .catch((err) => {
            res.statusCode = 500;
            throw new Error(err);
        })
        res.status(200).json({ coinsCount: profileAssociated.coins.toString() });
    },

    addRewards: async(req, res) => {
        try {
            // getProfileAssociated
            const profileAssociated = await Profile.findOne({
                where: {
                    UserId: req.user.id
                },
                attributes: ['id', 'email', 'authCode', 'UserId', 'name', 'phoneNumber', 'reminders', 'coins']
            })

            const duplicate = {...profileAssociated._doc};
            duplicate.coins = parseInt(profileAssociated.coins) - parseInt(req.body.coinsNeeded);
            // when user purchases a reward just generate a coupon code and share it to the user.
            const couponPromoCode = randomValueHex(4) + "-" + randomValueHex(4) + "-" + randomValueHex(4);

            await Reward.create({
                couponId: req.body.couponId,
                companyName: req.body.companyName,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                promocode: couponPromoCode,
                coinsNeeded: req.body.coinsNeeded,
                ProfileId: profileAssociated.id
            })

            await profileAssociated.update(duplicate);

            res.status(200).json({ msg: "Reward Added Successfully !"});
        } catch(error) {
            res.statusCode = 500;
            throw new Error(error);
        }
    },
    getAllRewards: async(req, res) => {
        try {
            // getProfileAssociated
            const profileAssociated = await Profile.findOne({
                where: {
                    UserId: req.user.id
                },
                attributes: ['id']
            });
            // when user is eligible for rewards just show all the rewards user can purchase with the coins earned
            const allRewards = await Reward.find({
                where: {
                    ProfileId: profileAssociated.id
                },
                attributes: ['id', 'couponId', 'companyName', 'description', 'imageUrl', 'promocode', 'coinsNeeded']
            })
            res.status(200).send(allRewards);
        }
        catch(error) {
            res.statusCode = 500;
            throw new Error(error);
        }
    }
}
