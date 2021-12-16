import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header.js";
import Landing from "./Landing.js";
import Dashboard from "./Dashboard.js";
import SurveyNew from "./survey/SurveyNew.js";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route exact={true} path="/" element={<Landing />} />
              <Route exact={true} path="/surveys" element={<Dashboard />} />
              <Route path="/surveys/new" element={<SurveyNew />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(null, actions)(App);
