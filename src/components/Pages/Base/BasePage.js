import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/index.js";

import FlashComponent from "../../FlashComponent";
import NavBar from "../../UI/NavBar";
import { flashMessage } from "../../../actions";
import * as actions from "../../../actions";
import Page from "../../UI/Page";
import LoginForm from "../../Forms/LoginForm";
import clearStorage from "../../../store";
class BasePage extends Component {
  state = {
    current_location: ""
  };

  render() {
    console.log(this.props.state);

    const isLoggedIn = this.props.state.auth.is_authenticated;

    return (
      <html>
        <header>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </header>
        <div>
          <NavBar
            handleProfile={() => {
              this.props.history.push("/profile");
            }}
            handleLogin={() => {
              this.props.history.push("/login");
            }}
            handleLogout={() => {
              this.props
                .logout()
                .then(() => {
                  this.props.flash("Logged out successfully", "success");
                  this.props.history.push("/login");
                })
                .catch(err => {
                  this.props.flash("Logout error", "error");

                  // alert("ss");
                  // If we get an error then the token was invalidated by another browser session
                  localStorage.clear();
                  window.location.reload();
                });
            }}
            handleRegister={() => {
              this.props.history.push("/register");
            }}
          />
          <FlashComponent />
          <div id="content">{this.props.children}</div>
        </div>
      </html>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    flash: (message, timeout) => dispatch(actions.flashMessage(message, timeout)),
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BasePage)
);

// export default BasePage;
