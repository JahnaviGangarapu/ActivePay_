import {
<<<<<<< HEAD
  ALL_COUPONS_FAIL,
  ALL_COUPONS_REQUEST,
  ALL_COUPONS_RESET,
  ALL_COUPONS_SUCCESS,
  REWARD_POINTS_FAIL,
  REWARD_POINTS_REQUEST,
  REWARD_POINTS_SUCCESS,
} from '../constants/rewardConstant';

export const rewardPointsReducer = (state = {}, action) => {
  switch (action.type) {
    case REWARD_POINTS_REQUEST:
      return { loading: true };
    case REWARD_POINTS_SUCCESS:
      return { loading: false, coins: action.payload };
    case REWARD_POINTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const allCouponsReducer = (state = { coupons: [] }, action) => {
  switch (action.type) {
    case ALL_COUPONS_REQUEST:
      return { loading: true };
    case ALL_COUPONS_SUCCESS:
      return { loading: false, coupons: action.payload };
    case ALL_COUPONS_FAIL:
      return { loading: false, error: action.payload };
    case ALL_COUPONS_RESET:
      return {};
    default:
      return state;
  }
};
=======
    ALL_COUPONS_FAIL,
    ALL_COUPONS_REQUEST,
    ALL_COUPONS_RESET,
    ALL_COUPONS_SUCCESS,
    REWARD_POINTS_FAIL,
    REWARD_POINTS_REQUEST,
    REWARD_POINTS_SUCCESS,
  } from '../constants/rewardConstant.js';

  //here is the reducer for rewards points of that particular user.

export const rewardPointsReducer = (state = {}, action) => {
    switch (action.type) {
      case REWARD_POINTS_REQUEST:
        return { loading: true };
      case REWARD_POINTS_SUCCESS:
        return { loading: false, coins: action.payload };
      case REWARD_POINTS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
>>>>>>> 038e89ce69a855550d9d0751b071e989070ccb22
