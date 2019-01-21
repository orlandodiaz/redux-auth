import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/index.js";

import FlashComponent from "../FlashComponent";
import NavBar from "./NavBar";

class BasePage extends Component {
  render() {
    console.log(this.props.state);

    // if (this.props.currentstate.auth.isAuthenticated) {
    //   const loggedin = "You  are logged in";
    // } else {
    //   const loggedin = "Not logged in";
    // }
    const isLoggedIn = this.props.state.auth.is_authenticated;

    return (
      <div>
        <h1> React Authentication with Django Backend </h1>
        The user {this.props.state.user.username} is{" "}
        <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
        <NavBar />
        <FlashComponent />
        <div id="content">{this.props.children}</div>
      </div>
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
  )(BasePage)
);

// export default BasePage;
