import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header.js";
import Landing from "./Landing.js";
import Dashboard from "./Dashboard.js";
import SurveyNew from "./survey/forms/SurveyNew.js";
import Footer from "./Footer";
import SurveyClient from "./survey/SurveyClient";
import Results from "./Results";
import NavigateSetter from "./navigate/NavigateSetter";
import SubmitSuccess from "./survey/SubmitSuccess";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavigateSetter />
          <Header />
          <main
            style={{
              display: "flex",
              minHeight: "100vh",
              flexDirection: "column",
              flex: "1 0 auto",
            }}
          >
            <Routes>
              <Route exact={true} path="/" element={<Landing />} />
              <Route exact={true} path="/surveys" element={<Dashboard />} />
              <Route path="/surveys/new" element={<SurveyNew />}></Route>
              <Route path="/surveys/:_Id" element={<SurveyClient />}></Route>
              <Route path="/results/:_Id" element={<Results />}></Route>
              <Route
                path="/surveys/submit_success"
                element={<SubmitSuccess />}
              ></Route>
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(null, actions)(App);
