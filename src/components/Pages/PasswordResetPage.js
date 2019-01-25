import Page from "../UI/Page";

import React, { Component } from "react";
import MyForm from "../Forms/MaterialReduxForm";
import RecoverPasswordForm from "../Forms/PasswordResetRequestForm";
import PasswordResetForm from "../Forms/PasswordResetForm";
import PasswordResetRequestForm from "../Forms/PasswordResetRequestForm";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { flashMessage } from "../../actions";

class PasswordResetPage extends Component {
  state = {
    valid_token: false
  };

  componentWillMount() {
    this.props
      .verifyResetPasswordToken(this.props.match.params.token)
      .then(response => {
        this.props.flash("Valid token", "success");
        this.setState({ valid_token: true });
      })
      .catch(err => {
        this.props.flash("Invalid token", "error");
        // this.props.history.push("/home");
      });
  }

  handleSubmit = values => {
    console.log("values");
    console.log(values);
    let token = this.props.match.params.token;

    this.props
      .resetPassword(token, values)
      .then(response => {
        this.props.flash("Password was changed successfully", "success");
        this.props.history.push("/home");
      })
      .catch(err => {
        // console.log(err.data.non_field_errors[0]);
        if (err.data) {
          this.props.flash("There was an error in the password change process", "error");
        }
      });
  };

  render() {
    return (
      <div>
        {this.state.valid_token ? (
          <Page title="Password Reset">
            Type in your new password
            <PasswordResetForm onSubmit={this.handleSubmit} />
          </Page>
        ) : (
          <Page title="Reset your password">
            Your token has expired or is invalid. Please in type your email to resend a password
            request email.
            <PasswordResetRequestForm />
          </Page>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    flash: (message, type) => dispatch(actions.flashMessage(message, type)),
    verifyResetPasswordToken: token => dispatch(actions.verifyResetPasswordToken(token)),
    resetPassword: (token, data) => dispatch(actions.resetPassword(token, data))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    // actionCreators
    mapDispatchToProps
  )(PasswordResetPage)
);
