import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";
import surveyReducer from "./surveyReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
  survey: surveyReducer,
});
