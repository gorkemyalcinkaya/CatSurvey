import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.map((survey) => {
      return (
        <div className=" col s4 card darken-2" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.surveyTitle}</span>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
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
export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
