const cardService = require('../services/card.js');

module.exports = {
    addCard: async(req, res, next) => {
        cardService.addCard(req, res, next)
            .catch(next);
    },
    getAllCards: async(req, res, next) => {
        cardService.getAllCards(req, res)
            .catch(next);
    },
    getCardById: async(req, res, next) => {
        cardService.getCardById(req, res)
            .catch(next);
    },
    getAllStatements: async(req, res, next) => {
        cardService.getAllstatements(req, res)
            .catch(next);
    }
};