import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Survey from "./Survey";
import axios from "axios";
import { connect } from "react-redux";
import { submit } from "redux-form";

const SurveyHold = ({ dispatch }) => {
  const [survey, setSurvey] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const paths = location.pathname.split("/");
    const path = paths[2];
    axios.post("/api/current_survey", { params: { id: path } }).then((res) => {
      setSurvey(res.data);
    });
  }, []);

  return (
    survey && (
      <div className="container section">
        <Survey survey={survey} />
        <div className="container">
          <button
            className="btn waves-effect waves-light right orange darken-1"
            type="submit"
            name="action"
            onClick={async () => {
              await dispatch(submit("surveySubmitForm"));
            }}
          >
            Submit
            <i className="material-icons right  ">send</i>
          </button>
        </div>
      </div>
    )
  );
};

export default connect()(SurveyHold);
