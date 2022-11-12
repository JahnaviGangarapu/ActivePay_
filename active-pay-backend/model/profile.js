const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({

    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true
    },
    // authCode: {
    //     type: String,
    //     default:''
    // },
    reminders: {
        type: Boolean,
        required: true,
        default:true
    },
    phoneNumber: {
        type: String,
        deafult:"999999999"
    },
    coins: {
        type: Schema.Types.Decimal128,
        required: true
    },
    card:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Card'
    }]
})
module.exports = mongoose.model('Profile', profileSchema);