import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => {
  return function (dispatch) {
    axios
      .get("/api/current_user")
      .then((res) => dispatch({ type: FETCH_USER, payload: res.data }));
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
