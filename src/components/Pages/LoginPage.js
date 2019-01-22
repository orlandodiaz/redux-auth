import React, { Component } from "react";
import * as actionCreators from "../../actions/index.js";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Redirect } from "react-router-dom";
import LoginForm from "../Forms/LoginForm";
import { withRouter } from "react-router-dom";
import { flashMessage } from "../../actions";

// Fake sample data goes here

class LoginComponent extends Component {
  state = {
    username: "",
    password: "",
    redirectToReferrer: false
  };

  componentDidMount() {
    document.title = "Login";
  }
  // const isLoggedIn = this.props.currentstate.auth.is_authenticated;

  // handleSubmit = e => {
  //   // alert(this.state.username);
  //   // this.props.users
  //
  //   // alert("It works");
  //   e.preventDefault();
  //
  //   // console.log(values.username);
  //   this.props.login(this.state.username, this.state.password);
  // };

  handleSubmit = values => {
    // alert(this.state.username);
    // this.props.users

    // alert("It works");
    // e.preventDefault();

    // console.log(values.username);
    this.props.login(values.username, values.password).then(() => {
      this.props.flash("Logged in succesfully", "success");
    });
  };

  render() {
    const isLoggedIn = this.props.state.auth.is_authenticated;

    // const { from } = this.props.location.state || { from: { pathname: "/" } };
    if (isLoggedIn) {
      // return <Redirect to="/profile" />;
      // return this.props.history.push("/profile");

      const { from } = this.props.location.state || { from: { pathname: "/" } };

      return <Redirect to={from} />;
    } else {
      return (
        <div>
          <h1> Login </h1>
          <LoginForm onSubmit={this.handleSubmit} />
          {/*<form onSubmit={this.handleSubmit}>*/}
          {/*<label> Login </label>*/}
          {/*<input*/}
          {/*type="text"*/}
          {/*id="username"*/}
          {/*onChange={e => this.setState({ username: e.target.value })}*/}
          {/*/>*/}

          {/*<label> Password </label>*/}
          {/*<input*/}
          {/*type="text"*/}
          {/*id="password"*/}
          {/*onChange={e => this.setState({ password: e.target.value })}*/}
          {/*/>*/}

          {/*<button onSubmit={this.handleSubmit} type="submit">*/}
          {/*Login*/}
          {/*</button>*/}
          {/*</form>*/}
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
    flash: (message, type) => dispatch(actions.flashMessage(message, type))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    // actionCreators
    mapDispatchToProps
  )(LoginComponent)
);
