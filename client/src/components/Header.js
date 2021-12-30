import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../public/logo.png";

class Header extends Component {
  renderContent() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li key="auth1">
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <li key="auth2">
            <a href="/api/logout">Logout</a>
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
              className="brand-logo "
              style={{ marginLeft: 40 }}
            >
              catsurvey{" "}
              <img src={logo} style={{ width: 15 }} alt="logo png"></img>
            </Link>
            <ul className="right">{this.renderContent()}</ul>
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
