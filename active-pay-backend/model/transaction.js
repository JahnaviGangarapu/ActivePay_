const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({

    // transcation_id:{
    //     type: Schema.Types.ObjectId,
    //     default:new mongoose.Types.ObjectId().toHexString()
    // },
    amount: {
        type: Schema.Types.Decimal128,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    credDeb: {
        type: Boolean,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    transactionDateTime: {
        type: Date,
        required:true
    },
    userAssociated: {
        type: String,
        required:true
    }
},{timestamps:true})
module.exports = mongoose.model('Transcation', transactionSchema);





















// module.exports = (sequelize, DataTypes) => {
//     const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize, { warnings: false });
//     const Transaction = sequelize.define('Transaction', {
//         transactionId: {
//             allowNull: false,
//             primaryKey: true,
//             type: DataTypes.UUID,
//             defaultValue: DataTypes.UUIDV4,
//         },
//         amount: {
//             type: DataTypes.DECIMAL(10, 2),
//             allowNull: false,
//         },
//         vendor: {
//             allowNull: false,
//             type: DataTypes.STRING,
//         },
//         credDeb: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false,
//             defaultValue: true,
//         },
//         category: {
//             allowNull: false,
//             type: DataTypes.STRING,
//         },
//         cardNumber: {
//             allowNull: false,
//             type: DataTypes.STRING,
//         },
//         transactionDateTime: {
//             allowNull: false,
//             type: TIMESTAMP
//         },
//         userAssociated: {
//             type: DataTypes.STRING
//         }
//     })

//     Transaction.associate = (models) => {
//         Transaction.belongsTo(models.Card, {
//             foreignKey: {
//                 allowNull: false,
//             }
//         })
//     }

//     return Transaction;
// }