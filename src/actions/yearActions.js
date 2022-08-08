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
import axios from "axios";

export const listYears = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: YEARS_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`https://nwd22-webapp.herokuapp.com/api/years/`, config);

    dispatch({
      type: YEARS_LIST_SUCCESS,
      payload: data,
    });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: YEARS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createYearAction = (
  yourName,
  birthDate,
  myValues_1,
  myValues_1_Text,
  myValues_2,
  myValues_2_Text,
  myValues_3,
  myValues_3_Text,
  myValues_4,
  myValues_4_Text,
  myValues_5,
  myValues_5_Text,
  myVision_1,
  myVision_2,
  myVision_3,
  myVision_4,
  myVision_5,
  whyNWD,
  myIkigai,
  navigationalQuote
) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: YEARS_CREATE_REQUEST,
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
      `https://nwd22-webapp.herokuapp.com/api/years/year/create`,
      { yourName,
        birthDate,
        myValues_1,
        myValues_1_Text,
        myValues_2,
        myValues_2_Text,
        myValues_3,
        myValues_3_Text,
        myValues_4,
        myValues_4_Text,
        myValues_5,
        myValues_5_Text,
        myVision_1,
        myVision_2,
        myVision_3,
        myVision_4,
        myVision_5,
        whyNWD,
        myIkigai,
        navigationalQuote },
      config
    );

    dispatch({
      type: YEARS_CREATE_SUCCESS,
      payload: data,
    });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: YEARS_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateYearAction = (
  id,
  yourName,
  birthDate,
  myValues_1,
  myValues_1_Text,
  myValues_2,
  myValues_2_Text,
  myValues_3,
  myValues_3_Text,
  myValues_4,
  myValues_4_Text,
  myValues_5,
  myValues_5_Text,
  myVision_1,
  myVision_2,
  myVision_3,
  myVision_4,
  myVision_5,
  whyNWD,
  myIkigai,
  navigationalQuote
) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: YEARS_UPDATE_REQUEST,
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
      `https://nwd22-webapp.herokuapp.com/api/years/year/${id}`,
      {
        yourName,
        birthDate,
        myValues_1,
        myValues_1_Text,
        myValues_2,
        myValues_2_Text,
        myValues_3,
        myValues_3_Text,
        myValues_4,
        myValues_4_Text,
        myValues_5,
        myValues_5_Text,
        myVision_1,
        myVision_2,
        myVision_3,
        myVision_4,
        myVision_5,
        whyNWD,
        myIkigai,
        navigationalQuote },
      config
    );

    dispatch({
      type: YEARS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: YEARS_UPDATE_FAIL,
      payload: message,
    });
  }
};
