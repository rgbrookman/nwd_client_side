import {
  WEEKS_CREATE_FAIL,
  WEEKS_CREATE_REQUEST,
  WEEKS_CREATE_SUCCESS,
  WEEKS_LIST_FAIL,
  WEEKS_LIST_REQUEST,
  WEEKS_LIST_SUCCESS,
  WEEKS_UPDATE_FAIL,
  WEEKS_UPDATE_REQUEST,
  WEEKS_UPDATE_SUCCESS,
} from "../constants/weekConstants";

export const weeksCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case WEEKS_CREATE_REQUEST:
      return { loading: true };
    case WEEKS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case WEEKS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const weekListReducer = (state = { weeks: [] }, action) => {
  switch (action.type) {
    case WEEKS_LIST_REQUEST:
      return { loading: true };
    case WEEKS_LIST_SUCCESS:
      return { loading: false, weeks: action.payload };
    case WEEKS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const weekUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case WEEKS_UPDATE_REQUEST:
      return { loading: true };
    case WEEKS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case WEEKS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
