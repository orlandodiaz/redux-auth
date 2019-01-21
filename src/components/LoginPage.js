import React, { Component } from "react";
import * as actionCreators from "../actions/index.js";
import { connect } from "react-redux";
import * as actions from "../actions";
import Redirect from "react-router-dom/es/Redirect";
// import LoginForm from "./LoginForm";
import { withRouter } from "react-router-dom";

// Fake sample data goes here

class LoginComponent extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    document.title = "Login";
  }
  // const isLoggedIn = this.props.currentstate.auth.is_authenticated;

  handleSubmit = e => {
    // alert(this.state.username);
    // this.props.users

    // alert("It works");
    e.preventDefault();

    // console.log(values.username);
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    const isLoggedIn = this.props.state.auth.is_authenticated;

    if (isLoggedIn) {
      // return <Redirect to="/profile" />;
      // return this.props.history.push("/profile");
      return <Redirect to="/profile" />;
    } else {
      return (
        <div>
          <h1> Login </h1>
          {/*<LoginForm onSubmit={this.handleSubmit} />*/}
          <form onSubmit={this.handleSubmit}>
            <label> Login </label>
            <input
              type="text"
              id="username"
              onChange={e => this.setState({ username: e.target.value })}
            />

            <label> Password </label>
            <input
              type="text"
              id="password"
              onChange={e => this.setState({ password: e.target.value })}
            />

            <button onSubmit={this.handleSubmit} type="submit">
              Login
            </button>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(actions.login(username, password)),
    flash: message => dispatch(actions.flashMessage(message))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    // actionCreators
    mapDispatchToProps
  )(LoginComponent)
);