import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurveyList from "./survey/SurveyList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <SurveyList />
        <div className="fixed-action-btn">
          <Link
            to="/surveys/new"
            className="btn-floating btn-large orange darken-1 "
          >
            <i className="material-icons">post_add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect()(Dashboard);
