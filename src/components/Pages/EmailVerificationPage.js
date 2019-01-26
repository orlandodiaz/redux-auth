import Page from "../UI/Page";

import React, { Component } from "react";
import MyForm from "../Forms/MaterialReduxForm";
import PasswordResetRequestForm from "../Forms/PasswordResetRequestForm";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class EmailVerificationPage extends Component {
  state = {
    valid_token: false
  };

  componentWillMount() {
    this.props
      .verifyEmailToken(this.props.match.params.token)
      .then(response => {
        this.props.flash("Valid Email token", "success");
        this.setState({ valid_token: true });
        this.props.logout();
      })
      .catch(err => {
        this.props.flash("Invalid Email token", "error");
        // this.props.history.push("/home");
      });
  }

  render() {
    return (
      <Page title="Email verification">
        {this.state.valid_token ? <p>Your email has been verified</p> : <p>Email not verified</p>}
        {/*<PasswordResetRequestForm onSubmit={this.handleSubmit} />*/}
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
    sendPasswordResetEmail: email => dispatch(actions.sendPasswordResetEmail(email)),
    verifyEmailToken: email_token => dispatch(actions.verifyEmailToken(email_token)),
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    // actionCreators
    mapDispatchToProps
  )(EmailVerificationPage)
);
