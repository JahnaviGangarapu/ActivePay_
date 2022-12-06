import {
  CARD_ADD_FAIL,
  CARD_ADD_REQUEST,
  CARD_ADD_RESET,
  CARD_ADD_SUCCESS,
  CARD_DETAILS_FAIL,
  CARD_DETAILS_REQUEST,
  CARD_DETAILS_RESET,
  CARD_DETAILS_SUCCESS,
  CARD_LIST_FAIL,
  CARD_LIST_REQUEST,
  CARD_LIST_SUCCESS,
  CARD_DELETE_REQUEST,
  CARD_DELETE_SUCCESS,
  CARD_DELETE_FAIL,
  CARD_DELETE_RESET,
} from '../constants/cardConstants';


//here is the reducer for adding new card, getting all cards, get a card by id, delete a card.

//add card reducer function
export const cardAddReducer = (state = {}, action) => {
  switch (action.type) {
    case CARD_ADD_REQUEST:
      return { loading: true };
    case CARD_ADD_SUCCESS:
      return { loading: false, card: action.payload, success: true };
    case CARD_ADD_FAIL:
      return { loading: false, error: action.payload, success: false };
    case CARD_ADD_RESET:
      return {};
    default:
      return state;
  }
};

//list down all cards reducer function
export const cardListReducer = (state = { cards: [] }, action) => {
  switch (action.type) {
    case CARD_LIST_REQUEST:
      return { ...state, loading: true };
    case CARD_LIST_SUCCESS:
      return { loading: false, cards: action.payload };
    case CARD_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//details of  card reducer function
export const cardDetailsReducer = (state = { card: {} }, action) => {
  switch (action.type) {
    case CARD_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CARD_DETAILS_SUCCESS:
      return { loading: false, card: action.payload };
    case CARD_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case CARD_DETAILS_RESET:
      return { card: {} };
    default:
      return state;
  }
};

//delete card reducer function
export const cardDeleteReducer = (state = { card: {} }, action) => {
  switch (action.type) {
    case CARD_DELETE_REQUEST:
      return { ...state, loading: true };
    case CARD_DELETE_SUCCESS:
      return { loading: false, card: action.payload };
    case CARD_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case CARD_DELETE_RESET:
      return { card: {} };
    default:
      return state;
  }
};
