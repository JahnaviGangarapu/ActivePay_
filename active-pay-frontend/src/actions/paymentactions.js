
//the logic for communicating with database for payments or the transactions carried out are stored to db from here.


import axios from '../axios';

import {
  PAYMENT_FAIL,
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
} from '../constants/paymentConstants';

const api_url = "http://localhost:8082";

export const payAmount = (cardNo, amount) => async (dispatch, getState) => {
  try {
    dispatch({ type: PAYMENT_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,    // user authentication
      },
    };

    const { data } = await axios.post(
      `${api_url}/api/cards/${cardNo}/pay`,
      { amount },
      config
    );

    dispatch({ type: PAYMENT_SUCCESS, payload: data });     // if payment successful
  } catch (err) {
    dispatch({
      type: PAYMENT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
