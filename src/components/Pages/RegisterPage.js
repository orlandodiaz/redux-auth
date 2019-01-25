import React, { Component } from "react";
import * as actionCreators from "../../actions/index.js";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Redirect from "react-router-dom/es/Redirect";
import { withRouter } from "react-router-dom";
import RegisterForm from "../Forms/RegisterForm";
import Page from "../UI/Page";
import LoginForm from "../Forms/LoginForm";
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

  capitalizeLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // const isLoggedIn = this.props.currentstate.auth.is_authenticated;

  handleSubmit = values => {
    // alert(this.state.username);
    // this.props.users

    // alert("It works");
    // e.preventDefault();

    this.props
      .register(values.username, values.email, values.password)
      .then(() => {
        this.props.flash("Registration success", "success");
        this.props.history.push("/");
      })
      .catch(err => {
        if (err.data.email) {
          this.props.flash(this.capitalizeLetter(err.data.email.toString()), "error");
        } else {
          this.props.flash("Registration failed", "error");
        }
      });
  };
  render() {
    const isLoggedIn = this.props.state.auth.is_authenticated;

    if (isLoggedIn) {
      // return <Redirect to="/profile" />;
      // this.props.history.push("/profile");
    } else {
      return (
        <Page title="Sign up">
          <RegisterForm onSubmit={this.handleSubmit} />
          {/*<form onSubmit={this.handleSubmit}>*/}
          {/*<label> Username </label>*/}
          {/*<input*/}
          {/*type="text"*/}
          {/*id="username"*/}
          {/*onChange={e => this.setState({ username: e.target.value })}*/}
          {/*/>*/}

          {/*<label> Email </label>*/}
          {/*<input*/}
          {/*type="text"*/}
          {/*id="email"*/}
          {/*onChange={e => this.setState({ email: e.target.value })}*/}
          {/*/>*/}

          {/*<label> Password </label>*/}
          {/*<input*/}
          {/*type="text"*/}
          {/*id="password"*/}
          {/*onChange={e => this.setState({ password: e.target.value })}*/}
          {/*/>*/}

          {/*<button onSubmit={this.handleSubmit} type="submit">*/}
          {/*Register*/}
          {/*</button>*/}
          {/*</form>*/}
        </Page>
      );
    }
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    register: (username, email, password) => dispatch(actions.register(username, email, password)),
    flash: (message, type) => dispatch(actions.flashMessage(message, type))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    // actionCreators
    mapDispatchToProps
  )(RegisterPage)
);
