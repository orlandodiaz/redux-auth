import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/index.js";

import FlashComponent from "../../FlashComponent";
import NavBar from "../../UI/NavBar";
import { flashMessage } from "../../../actions";
import * as actions from "../../../actions";

class BasePage extends Component {
  state = {
    current_location: ""
  };
  // componentWillReceiveProps(props) {
  //   // alert(props.location.pathname);
  //   // let newLang = props.location.pathname.split("/").shift();
  //   if (
  //     props.location.pathname !== this.state.current_location &&
  //     props.location.pathname
  //   ) {
  //     this.props.flash("ss");
  //     this.setState({ current_location: props.location.pathname });
  //   }
  // }

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
        <NavBar
          handleLogin={() => {
            this.props.history.push("/login");
          }}
          handleLogout={() => {
            this.props.logout();
          }}
        />
        {/*<h1> React Authentication with Django Backend </h1>*/}
        {/*The user {this.props.state.user.username} is <b>{isLoggedIn ? "currently" : "not"}</b>{" "}*/}
        {/*logged in.*/}
        <FlashComponent />
        <div id="content">{this.props.children}</div>
      </div>
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
