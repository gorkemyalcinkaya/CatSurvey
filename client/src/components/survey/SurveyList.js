/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurvey } from "../../actions";
import { Link } from "react-router-dom";
import M from "materialize-css";
import surveyLogo from "../../public/survey.png";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  componentDidUpdate() {
    M.AutoInit();
  }
  handleRefresh = () => {
    this.props.fetchSurveys();
  };

  renderSurveys() {
    return this.props.surveys.map((survey) => {
      const fullDate = new Date(survey.dateCreated);
      const shortDate =
        fullDate.getDate() +
        "/" +
        (fullDate.getMonth() + 1) +
        "/" +
        fullDate.getFullYear();
      return (
        <div>
          <div
            className=" col s12 m4 xl3 card darken-2 small "
            style={{ margin: 10, padding: 0 }}
            key={survey._id}
          >
            <div className="card-content">
              <span
                className="right grey-text "
                style={{
                  fontSize: 13,
                }}
              >
                {shortDate}
              </span>
              <span className="card-title">
                <h5>{survey.surveyTitle}</h5>
              </span>
              <div className="center-align">
                <img
                  className="center-align"
                  src={surveyLogo}
                  width="100"
                  alt="surveyLogo"
                />
              </div>
            </div>
            <div
              className="card-action"
              style={{
                paddingBottom: 0,
              }}
            >
              <div
                className="row "
                style={{
                  marginBottom: 0,
                }}
              >
                <div className="col s12">
                  <div className="row">
                    <Link to={`/results/${survey._id}`} state={survey}>
                      <span>Results</span>
                    </Link>
                    <Link
                      className="dropdown-trigger right"
                      to=""
                      data-target={survey._id}
                    >
                      <i className="material-icons">more_vert</i>
                    </Link>
                    <ul id={survey._id} className="dropdown-content">
                      <li
                        key="linkId1"
                        onClick={() =>
                          navigator.clipboard.writeText(
                            `https://catsurvey.herokuapp.com/surveys/${survey._id}`
                          )
                        }
                      >
                        <Link to={""}>
                          <i className="material-icons ">content_copy</i>
                        </Link>
                      </li>
                      <li
                        key="linkId2"
                        onClick={() => {
                          window.open(
                            `https://catsurvey.herokuapp.com/surveys/${survey._id}`,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                      >
                        <Link to={""}>
                          <i className="material-icons ">open_in_new</i>
                        </Link>
                      </li>
                      <li
                        key="linkId3"
                        onClick={() => {
                          this.props.deleteSurvey(
                            survey._id,
                            this.handleRefresh
                          );
                        }}
                      >
                        <Link to="">
                          <i className="material-icons ">delete_forever</i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row section">
        <div className="col s12 section">{this.renderSurveys()}</div>
      </div>
    );
  }
}
function mapStateToProps({ surveys }) {
  return { surveys };
}
export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveyList
);
