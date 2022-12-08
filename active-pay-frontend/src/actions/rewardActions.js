import axios from '../axios';

import {
  ALL_COUPONS_FAIL,
  ALL_COUPONS_REQUEST,
  ALL_COUPONS_SUCCESS,
  REWARD_POINTS_FAIL,
  REWARD_POINTS_REQUEST,
  REWARD_POINTS_SUCCESS,
} from '../constants/rewardConstants';

const api_url = "http://localhost:8082";


export const getRewardPoints = () => async (dispatch, getState) => {
  try {
    dispatch({ type: REWARD_POINTS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('/api/rewards/coins', config);
    dispatch({ type: REWARD_POINTS_SUCCESS, payload: data.coins });
  } catch (err) {
    dispatch({
      type: REWARD_POINTS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getAllCoupons = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ALL_COUPONS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${api_url}/api/rewards/rewards`, config);
    dispatch({ type: ALL_COUPONS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ALL_COUPONS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
