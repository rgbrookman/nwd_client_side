import {
  YEARS_CREATE_FAIL,
  YEARS_CREATE_REQUEST,
  YEARS_CREATE_SUCCESS,
  YEARS_UPDATE_FAIL,
  YEARS_UPDATE_REQUEST,
  YEARS_UPDATE_SUCCESS,
  YEARS_LIST_FAIL,
  YEARS_LIST_REQUEST,
  YEARS_LIST_SUCCESS,
} from "../constants/yearsConstants";

export const yearCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case YEARS_CREATE_REQUEST:
      return { loading: true };
    case YEARS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case YEARS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const yearUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case YEARS_UPDATE_REQUEST:
      return { loading: true };
    case YEARS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case YEARS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const yearListReducer = (state = { years: [] }, action) => {
  switch (action.type) {
    case YEARS_LIST_REQUEST:
      return { loading: true };
    case YEARS_LIST_SUCCESS:
      return { loading: false, years: action.payload };
    case YEARS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
