import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurveyList from "./survey/SurveyList";
import { connect } from "react-redux";
import { seo } from "../helpers/seo";
import M from "materialize-css";

class Dashboard extends Component {
  render() {
    return (
      this.props.auth && (
        <div className="container">
          <SurveyList />
          <div className="fixed-action-btn">
            <Link
              to="/surveys/new"
              className="btn-floating btn-large orange darken-1 "
            >
              <i id="post-add" className="material-icons">
                post_add
              </i>
            </Link>
          </div>
          <div class="tap-target" data-target="post-add">
            <div class="tap-target-content">
              <h5>Title</h5>
              <p>A bunch of text</p>
            </div>
          </div>
        </div>
      )
    );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Dashboard);
