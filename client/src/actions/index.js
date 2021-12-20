import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

export const fetchUser = () => {
  return function (dispatch) {
    axios
      .get("/api/current_user")
      .then((res) => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};
export const fetchSurveys = () => {
  return function (dispatch) {
    axios
      .get("/api/surveys")
      .then((res) => dispatch({ type: FETCH_SURVEYS, payload: res.data }));
  };
};

export const submitSurvey = (values, navigate) => {
  return function (dispatch) {
    axios.post("/api/surveys", values).then((res) => {
      navigate("/surveys");
      dispatch({ type: FETCH_USER, payload: res.data });
    });
  };
};
