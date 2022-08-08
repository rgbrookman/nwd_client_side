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
import axios from "axios";

export const listDays = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DAYS_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`https://nwd22-webapp.herokuapp.com/api/days/`, config);

    dispatch({
      type: DAYS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DAYS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createDayAction = (
  logDate,
  startScore,
  thankYou,
  selfLess,
  mindBody,
  momentOne,
  momentOneScore,
  momentTwo,
  momentTwoScore,
  momentThree,
  momentThreeScore,
  momentFour,
  momentFourScore,
  momentFive,
  momentFiveScore,
  rememberToday,
  leaveBehind,
  endScore
) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: DAYS_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `https://nwd22-webapp.herokuapp.com/api/days/today`,
      {  logDate,
        startScore,
        thankYou,
        selfLess,
        mindBody,
        momentOne,
        momentOneScore,
        momentTwo,
        momentTwoScore,
        momentThree,
        momentThreeScore,
        momentFour,
        momentFourScore,
        momentFive,
        momentFiveScore,
        rememberToday,
        leaveBehind,
        endScore, },
      config
    );

    dispatch({
      type: DAYS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DAYS_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateDayAction = (
  id,
  logDate,
    startScore,
    thankYou,
    selfLess,
    mindBody,
    momentOne,
    momentOneScore,
    momentTwo,
    momentTwoScore,
    momentThree,
    momentThreeScore,
    momentFour,
    momentFourScore,
    momentFive,
    momentFiveScore,
    rememberToday,
    leaveBehind,
    endScore,
) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: DAYS_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `https://nwd22-webapp.herokuapp.com/api/days/today/${id}`,
      { logDate,
        startScore,
        thankYou,
        selfLess,
        mindBody,
        momentOne,
        momentOneScore,
        momentTwo,
        momentTwoScore,
        momentThree,
        momentThreeScore,
        momentFour,
        momentFourScore,
        momentFive,
        momentFiveScore,
        rememberToday,
        leaveBehind,
        endScore, },
      config
    );

    dispatch({
      type: DAYS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DAYS_UPDATE_FAIL,
      payload: message,
    });
  }
};
