import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link, withRouter } from "react-router-dom";
import ProfileForm from "../Forms/ProfileForm";
import { flashMessage } from "../../actions";
import Page from "../UI/Page";
import CustomizedSnackbars from "../UI/CustomizedSnackbars";
import Notification from "../UI/Notification";

const NotVerifiedNotification = ({ onClick }) => (
  <div>
    Your email is not verified. Please click{" "}
    <a href="#" onClick={onClick}>
      here
    </a>{" "}
    to request a verification email.
  </div>
);

class ProfilePage extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    email: ""
  };

  componentDidMount() {
    document.title = "Profile";
  }
  handleSubmit = values => {
    this.props
      .updateUser(values)
      .then(response => {
        this.props.flash("Settings updated successfully", "success");
      })
      .catch(error => {
        this.props.flash("Settings update error", "error");
      });
  };

  handleClick = () => {
    this.props
      .requestEmailVerificationEmail()
      .then(response => {
        this.props.flash("Email request has been sent", "success");
      })
      .catch(error => {
        this.props.flash("Error sending request for email verification", "error");
      });
  };
  email_confirmed;

  render() {
    return (
      <Page title="Profile">
        Change your account settings here
        <p>
          {this.props.state.user.email_confirmed ? (
            ""
          ) : (
            <Notification
              type="warning"
              message={<NotVerifiedNotification onClick={this.handleClick} />}
              style={{ padding: 0, margin: 0, borderRadius: "0" }}
            />
          )}
        </p>
        <ProfileForm onSubmit={this.handleSubmit} />
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
    currentUserDetail: () => dispatch(actions.currentUserDetail()),
    updateUser: user_data => dispatch(actions.updateUser(user_data)),
    requestEmailVerificationEmail: () => dispatch(actions.requestEmailVerificationEmail())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfilePage)
);
