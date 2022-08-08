import {
  DAYS_CREATE_FAIL,
  DAYS_CREATE_REQUEST,
  DAYS_CREATE_SUCCESS,
  DAYS_LIST_FAIL,
  DAYS_LIST_REQUEST,
  DAYS_LIST_SUCCESS,
  DAYS_UPDATE_FAIL,
  DAYS_UPDATE_REQUEST,
  DAYS_UPDATE_SUCCESS,

} from "../constants/daysConstants";

export const dayCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case DAYS_CREATE_REQUEST:
      return { loading: true };
    case DAYS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case DAYS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const dayListReducer = (state = { days: [] }, action) => {
  switch (action.type) {
    case DAYS_LIST_REQUEST:
      return { loading: true };
    case DAYS_LIST_SUCCESS:
      return { loading: false, days: action.payload };
    case DAYS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const dayUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case DAYS_UPDATE_REQUEST:
      return { loading: true };
    case DAYS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case DAYS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
