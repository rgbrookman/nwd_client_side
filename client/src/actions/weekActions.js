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
import axios from "axios";

export const listWeeks = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: WEEKS_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`https://nwd22-webapp.herokuapp.com/api/weeks/`, config);

    dispatch({
      type: WEEKS_LIST_SUCCESS,
      payload: data,
    });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: WEEKS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createWeekAction = (
  objectiveOne_text,
  objectiveOne_score,
  objectiveTwo_text,
  objectiveTwo_score,
  objectiveThree_text,
  objectiveThree_score,
  objectiveFour_text,
  objectiveFour_score,
  objectiveFive_text,
  objectiveFive_score,
  objectiveSix_text,
  objectiveSix_score,
  objectiveSeven_text,
  objectiveSeven_score,
  objectiveEight_text,
  objectiveEight_score,
  objectiveNine_text,
  objectiveNine_score,
  objectiveTen_text,
  objectiveTen_score,
) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: WEEKS_CREATE_REQUEST,
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
      `https://nwd22-webapp.herokuapp.com/api/weeks/week/create`,
      {
        objectiveOne_text,
        objectiveOne_score,
        objectiveTwo_text,
        objectiveTwo_score,
        objectiveThree_text,
        objectiveThree_score,
        objectiveFour_text,
        objectiveFour_score,
        objectiveFive_text,
        objectiveFive_score,
        objectiveSix_text,
        objectiveSix_score,
        objectiveSeven_text,
        objectiveSeven_score,
        objectiveEight_text,
        objectiveEight_score,
        objectiveNine_text,
        objectiveNine_score,
        objectiveTen_text,
        objectiveTen_score },
      config
    );

    dispatch({
      type: WEEKS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: WEEKS_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateWeekAction = (
  id,
  objectiveOne_text,
  objectiveOne_score,
  objectiveTwo_text,
  objectiveTwo_score,
  objectiveThree_text,
  objectiveThree_score,
  objectiveFour_text,
  objectiveFour_score,
  objectiveFive_text,
  objectiveFive_score,
  objectiveSix_text,
  objectiveSix_score,
  objectiveSeven_text,
  objectiveSeven_score,
  objectiveEight_text,
  objectiveEight_score,
  objectiveNine_text,
  objectiveNine_score,
  objectiveTen_text,
  objectiveTen_score,
) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: WEEKS_UPDATE_REQUEST,
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
      `https://nwd22-webapp.herokuapp.com/api/weeks/week/${id}`,
      {
        objectiveOne_text,
        objectiveOne_score,
        objectiveTwo_text,
        objectiveTwo_score,
        objectiveThree_text,
        objectiveThree_score,
        objectiveFour_text,
        objectiveFour_score,
        objectiveFive_text,
        objectiveFive_score,
        objectiveSix_text,
        objectiveSix_score,
        objectiveSeven_text,
        objectiveSeven_score,
        objectiveEight_text,
        objectiveEight_score,
        objectiveNine_text,
        objectiveNine_score,
        objectiveTen_text,
        objectiveTen_score, },
      config
    );

    dispatch({
      type: WEEKS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: WEEKS_UPDATE_FAIL,
      payload: message,
    });
  }
};
