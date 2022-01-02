import axios from "axios";

import { FETCH_USER, FETCH_SURVEYS, DELETE_SURVEY } from "./types";

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

export const createSurvey = (values, navigate) => {
  return function (dispatch) {
    axios.post("/api/surveys", values).then((res) => {
      navigate("/surveys");
      window.location.reload();
      dispatch({ type: FETCH_USER, payload: res.data });
    });
  };
};

export const deleteSurvey = (id, handleRefresh) => {
  return function (dispatch) {
    axios.delete("/api/surveys", { data: { id: id } }).then((res) => {
      dispatch({ type: DELETE_SURVEY, payload: res.data });
      handleRefresh();
    });
  };
};
