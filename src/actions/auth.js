import * as api from "../api";
import { AUTH, SIGNUP } from "../constants/actionTypes";

//Action creators
export const signin = (formData, history) => async (dispatch) => {
  try {
    // login the user
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log("error ->>", error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log("error ->>", error);
  }
};
