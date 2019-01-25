import Page from "../UI/Page";

import React, { Component } from "react";
import MyForm from "../Forms/MaterialReduxForm";
import PasswordResetRequestForm from "../Forms/PasswordResetRequestForm";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class PasswordResetRequestPage extends Component {
  handleSubmit = values => {
    this.props
      .sendPasswordResetEmail(values.email)
      .then(resp => {
        this.props.flash("Password Reset Email was sent successfully", "success");
      })
      .catch(err => {
        console.log("error");
        console.log(err);
        this.props.flash(err.data.email, "error");
      });
  };

  render() {
    return (
      <Page title="Recover password">
        Type your email in order to start the password recovery process
        <PasswordResetRequestForm onSubmit={this.handleSubmit} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    flash: (message, type) => dispatch(actions.flashMessage(message, type)),
    sendPasswordResetEmail: email => dispatch(actions.sendPasswordResetEmail(email))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    // actionCreators
    mapDispatchToProps
  )(PasswordResetRequestPage)
);
