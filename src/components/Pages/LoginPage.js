import React, { Component } from "react";
import * as actionCreators from "../../actions/index.js";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Redirect } from "react-router-dom";
import LoginForm from "../Forms/LoginForm";
import { withRouter, Link } from "react-router-dom";
import { flashMessage } from "../../actions";
import Page from "../UI/Page";
// import LockOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import LockIcon from "../UI/Lockicon";

/**
 * This is the Login Page component
 *
 */

const style = {
  height: "20%",
  minWidth: "400px",
  maxWidth: "800px",
  width: "300px",
  marginTop: 50,
  // marginTop:0;
  marginBottom: 0,
  marginLeft: "auto",
  marginRight: "auto",
  color: "white"
};

class LoginComponent extends Component {
  componentWillMount() {
    document.title = "Login";
  }

  handleSubmit = values => {
    this.props
      .login(values.username, values.password)
      .then(() => {
        this.props.flash("Logged in succesfully", "success");
      })
      .then(() => {
        this.props.currentUserDetail();
      })
      .catch(() => {
        this.props.flash("Incorrect username or password ", "error");
      });
  };

  render() {
    const isLoggedIn = this.props.state.auth.is_authenticated;

    if (isLoggedIn) {
      const { from } = this.props.location.state || { from: { pathname: "/" } };

      return <Redirect to={from} />;
    } else {
      return <LoginForm onSubmit={this.handleSubmit} />;
    }
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(actions.login(username, password)),
    flash: (message, type) => dispatch(actions.flashMessage(message, type)),
    currentUserDetail: () => dispatch(actions.currentUserDetail())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    // actionCreators
    mapDispatchToProps
  )(LoginComponent)
);
