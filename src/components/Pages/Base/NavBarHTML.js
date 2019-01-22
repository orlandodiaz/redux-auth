import { Link, withRouter } from "react-router-dom";

import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import * as actionCreators from "../../../actions";

class NavBar extends Component {
  handleClick = () => {
    // this.props.logout();
    this.props.logout().then(() => {
      this.props.history.push("/login");
    });
  };

  render() {
    const isLoggedIn = this.props.state.auth.is_authenticated;

    return (
      <ul>
        <Link style={{ marginRight: 20 }} to={"/home"}>
          Home
        </Link>
        {isLoggedIn ? (
          ""
        ) : (
          <Link style={{ marginRight: 20 }} to={"/login"}>
            Login
          </Link>
        )}
        <Link style={{ marginRight: 20 }} to={"/about"}>
          About
        </Link>
        {isLoggedIn ? (
          ""
        ) : (
          <Link style={{ marginRight: 20 }} to={"/register"}>
            Register
          </Link>
        )}

        {isLoggedIn ? (
          <Link style={{ marginRight: 20 }} to={"/profile"}>
            Profile
          </Link>
        ) : (
          ""
        )}

        {isLoggedIn ? (
          <button onClick={this.handleClick} type="submit">
            Logout
          </button>
        ) : (
          ""
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

export default withRouter(
  connect(
    mapStateToProps,
    actionCreators
  )(NavBar)
);
