const jwt = require('jsonwebtoken');
const User = require('../model/user.js');


// const secret = process.env.SECRET;
const secret = 'supersecretsuper'


const verifyToken = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    // console.log(authHeader)
    const token = authHeader.split(' ')[1];
    // console.log(token)
    let decodedToken;
    let user
    try {
        
        decodedToken = jwt.verify(token, 'supersecretsuper');
        if (!decodedToken) {
            const error = new Error('Not authenticated.');
            error.statusCode = 401;
            throw error;
        }
        const user = await User.findById(decodedToken.sub);
        
        // console.log(user)
        req.user = user
        // console.log(user)
        next();
        // console.log(decodedToken)
    } catch (err) {
        // err.statusCode = 500;
        return res.status(401).json({ message: "Unauthorized" });
    }
    // req.userId = decodedToken.userId;
    
}
    // return [
    //     // authenticate JWT token and attach decoded token to request as req.user
    //     jwt({ secret, algorithms: ['HS256'] }),

    //     // attach full user record to request object 
    //     async (req, res, next) => {
    //         // get user with id from token 'sub' (subject) property
    //         const user = await User.findById(req.user.sub);

    //         // check if user exists
    //         if (!user) {
    //             return res.status(401).json({ message: "Unauthorized" });
    //         }

    //         // authentication successful
    //         req.user = user.get();
    //         next();
    //     }
    // ];


module.exports = verifyToken;