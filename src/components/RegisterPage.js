import React, { Component } from "react";
import * as actionCreators from "../actions/index.js";
import { connect } from "react-redux";
import * as actions from "../actions";
import Redirect from "react-router-dom/es/Redirect";
import { withRouter } from "react-router-dom";

// Fake sample data goes here

class RegisterPage extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  componentDidMount() {
    document.title = "Register";
  }

  // const isLoggedIn = this.props.currentstate.auth.is_authenticated;

  handleSubmit = e => {
    alert(this.state.username);
    // this.props.users

    // alert("It works");
    e.preventDefault();

    this.props.register(
      this.state.username,
      this.state.email,
      this.state.password
    );
  };
  render() {
    const isLoggedIn = this.props.state.auth.is_authenticated;

    if (isLoggedIn) {
      // return <Redirect to="/profile" />;
      // this.props.history.push("/profile");
    } else {
      return (
        <div>
          <h1> Register </h1>
          <form onSubmit={this.handleSubmit}>
            <label> Username </label>
            <input
              type="text"
              id="username"
              onChange={e => this.setState({ username: e.target.value })}
            />

            <label> Email </label>
            <input
              type="text"
              id="email"
              onChange={e => this.setState({ email: e.target.value })}
            />

            <label> Password </label>
            <input
              type="text"
              id="password"
              onChange={e => this.setState({ password: e.target.value })}
            />

            <button onSubmit={this.handleSubmit} type="submit">
              Register
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
    register: (username, email, password) =>
      dispatch(actions.register(username, email, password))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    // actionCreators
    mapDispatchToProps
  )(RegisterPage)
);
