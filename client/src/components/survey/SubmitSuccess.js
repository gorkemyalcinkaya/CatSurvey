import React from "react";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";
class SubmitSuccess extends React.Component {
  render() {
    return (
      <div
        className="container center-align"
        style={{
          marginTop: "20%",
        }}
      >
        <h1>Your answers submitted successfully</h1>
        <div>
          <h4>Thanks for using</h4>
          <Link to={"/"} className="brand-logo " style={{ fontSize: 30 }}>
            catsurvey{" "}
            <img src={logo} style={{ width: 15 }} alt="logo png"></img>
          </Link>
        </div>
      </div>
    );
  }
}
export default SubmitSuccess;
