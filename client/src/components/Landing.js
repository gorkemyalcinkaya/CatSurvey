import React, { Component } from "react";
import surveyTest from "../public/survey-testing.png";
import survey from "../public/survey.png";

class Landing extends Component {
  render() {
    return (
      <div>
        <div
          className="body center-align container section landingHeader "
          style={{
            marginTop: "3%",
            marginBottom: "3%",
            padding: "8%",
            background: `no-repeat url(${survey})`,
          }}
        >
          <div>
            <h1>Best way to create surveys and getting results </h1>
            <a href="/auth/google">
              <button className="btn right orange darken-1">Start Now</button>
            </a>
          </div>
        </div>
        <div className="blue lighten-1 section" style={{ padding: "2%" }}>
          <div className="row container">
            <div className="col s4 center-align white-text">
              <i className="material-icons large">adjust</i>
              <h4>Easy to Target</h4>
              <h6>Target your audience effectively</h6>
            </div>
            <div className="col s4 center-align white-text">
              <i className="material-icons large  ">check_circle</i>
              <h4>Create Survey</h4>
              <h6>Create any survey easily</h6>
            </div>
            <div className="col s4 center-align white-text">
              <i className="material-icons large">pie_chart</i>
              <h4>Get Results</h4>
              <h6>See your results on fancy charts</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="row" style={{ margin: "13%" }}>
            <div className="col m8">
              <img
                src={surveyTest}
                alt="survey-testing.png"
                style={{ width: "80%" }}
              ></img>
            </div>
            <div className="col m4">
              <h3 className=" center-align">
                Your clients will be remote access to your surveys and able to
                answer your questions
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
