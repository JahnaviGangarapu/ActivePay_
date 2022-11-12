const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken.js');
const luhnValidation = require('../middleware/luhnValidation.js');
const cardSchema = require('../schema/cardSchema.js');
// const billSchema = require('../schema/billSchema.js');
const cardController = require('../controller/card.js');
// const statementSchema = require('../schemas/statementSchema');

router.post('/',verifyToken, cardController.addCard);
router.get('/', verifyToken, cardController.getAllCards); 
module.exports = router;