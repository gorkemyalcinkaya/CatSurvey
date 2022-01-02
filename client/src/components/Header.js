import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import M from "materialize-css";
import logo from "../public/logo.png";

class Header extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  componentDidUpdate() {
    M.AutoInit();
    this.renderContent();
  }

  renderContent() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li key="auth1" className="right">
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <li className="right">
            <Link
              className="dropdown-trigger right"
              to=""
              data-target="dropdown1"
              data-constrainWidth="false"
            >
              <i className="material-icons">more_vert</i>
            </Link>

            <ul id="dropdown1" className="dropdown-content " style={{}}>
              <li>
                <a href="#!" className="grey-text center-align">
                  <img
                    className="circle"
                    src={this.props.auth.picture}
                    alt="profile"
                    style={{ width: "70%" }}
                  ></img>
                  {this.props.auth.name}
                </a>
              </li>
              <li>
                <a href="/surveys">Dashboard </a>
              </li>
              <li>
                <a href="/surveys/new">New Survey</a>
              </li>
              <li>
                <a href="/api/logout">Logout</a>
              </li>
            </ul>
          </li>
        );
    }
  }

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper  light-blue lighten-1 ">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="brand-logo left "
              style={{ marginLeft: 40, fontSize: "2rem" }}
            >
              catsurvey
              <img src={logo} style={{ width: 15 }} alt="logo png"></img>
            </Link>
            <ul> {this.renderContent()}</ul>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
