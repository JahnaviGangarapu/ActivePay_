import axios from '../axios';

//the logic for communicating with database in server is mentioned here
//Operations on credit card like add new card, delete existing card, get all the cards is defined here.


import {
  CARD_ADD_REQUEST,
  CARD_ADD_SUCCESS,
  CARD_ADD_FAIL,
  CARD_LIST_FAIL,
  CARD_LIST_REQUEST,
  CARD_LIST_SUCCESS,
  CARD_DETAILS_REQUEST,
  CARD_DETAILS_SUCCESS,
  CARD_DETAILS_FAIL,
  CARD_DELETE_REQUEST,
  CARD_DELETE_SUCCESS,
  CARD_DELETE_FAIL,
  // eslint-disable-next-line
  CARD_DELETE_RESET,
} from '../constants/cardConstants';

//Below is a function which will add new card in the database. It will take user input from the front end.
export const addCard = (card) => async (dispatch, getState) => {
  try {
    dispatch({ type: CARD_ADD_REQUEST });   // when user sends card add request, user details are extracted
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`, // once the authentidity of user is established, add new card is successful
      },
    };

    const { data } = await axios.post(`/api/cards`, card, config);
    dispatch({ type: CARD_ADD_SUCCESS, payload: data });    // this adds the new card to mongo db
  } catch (err) {
    dispatch({
      type: CARD_ADD_FAIL,      // if there is any error while authenticating the user, or adding new card, it will fail and a message will be sent
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

// this function gets the active cards of that user
export const listCards = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CARD_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();     // user authenticity is established

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/cards`, config); // this gets all the cards of the particular user from thte db.
    dispatch({ type: CARD_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: CARD_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

// Below function will get a particular card of the user after authenticating the user.
export const getCardById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CARD_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    console.log('URL is: ', `/api/cards/${id}`);
    const { data } = await axios.get(`/api/cards/${id}`, config); //this line will fetch card from the mongo db.
    console.log('Card Details', data);
    dispatch({ type: CARD_DETAILS_SUCCESS, payload: data });    // after successful fetch of the  card, this will return the JSON to front end
  } catch (err) {
    dispatch({
      type: CARD_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

//This function will delete a particular card of that user when user requests for deleing the card.
export const deleteCardById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CARD_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    console.log('URL is: ', `/api/cards/${id}`);
    const { data } = await axios.delete(`/api/cards/${id}`, config);    // here the card will be deleted from the db
    console.log('Card Details', data);
    dispatch({ type: CARD_DELETE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: CARD_DELETE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
