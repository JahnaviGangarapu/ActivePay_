const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    cardOwnerName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    outstandingAmount: {
        type: Schema.Types.Decimal128,
        default:0
    },
    expiryMonth: {
        type: Number,
        required: true
    },
    expiryYear: {
        type: Number,
        required: true
    },
    profile:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Profile',
        required:true
    }],
    
},{timestamps:true}
)
module.exports = mongoose.model('Card', cardSchema);