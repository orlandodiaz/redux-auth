import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link, withRouter } from "react-router-dom";
import ProfileForm from "../Forms/ProfileForm";
import { flashMessage } from "../../actions";
import Page from "../UI/Page";
import CustomizedSnackbars from "../UI/CustomizedSnackbars";
import Notification from "../UI/Notification";

const element = (
  <div>
    Your email is not verified. Please click
    <Link to="/"> here to </Link> request a verification email.
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
    // alert("componentmounted");

    // this.props.currentUserDetail().then(
    //   this.setState({
    //     username: this.props.state.user.username,
    //     first_name: this.props.state.user.first_name,
    //     last_name: this.props.state.user.last_name
    //   })
    // );
    // this.props.currentUserDetail().then(() => {
    //   this.setState({
    //     username: this.props.state.user.username,
    //     first_name: this.props.state.user.first_name,
    //     last_name: this.props.state.user.last_name
    //   });
    // });

    // UpdateUser action
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

  // handleSubmit = e => {
  //   e.preventDefault();
  //   // alert(values.username);
  //   this.props.updateUser(this.state);
  // };

  render() {
    return (
      <Page title="Profile">
        Change your account settings here
        <p>
          <Notification
            type="warning"
            message={element}
            // message="Your email is not verified. Please click here to request a verification email"
            style={{ padding: 0, margin: 0, borderRadius: "0" }}
          />
        </p>
        <ProfileForm onSubmit={this.handleSubmit} />
        {/*<form onSubmit={this.handleSubmit}>*/}
        {/*<label> Username </label>*/}
        {/*<input*/}
        {/*type="text"*/}
        {/*id="username"*/}
        {/*defaultValue={this.props.state.user.username}*/}
        {/*onChange={e => this.setState({ username: e.target.value })}*/}
        {/*/>*/}
        {/*<label> First name </label>*/}
        {/*<input*/}
        {/*type="text"*/}
        {/*id="first_name"*/}
        {/*defaultValue={this.props.state.user.first_name}*/}
        {/*onChange={e => this.setState({ first_name: e.target.value })}*/}
        {/*/>*/}
        {/*<label> Last name </label>*/}
        {/*<input*/}
        {/*type="text"*/}
        {/*id="password"*/}
        {/*defaultValue={this.props.state.user.last_name}*/}
        {/*onChange={e => this.setState({ last_name: e.target.value })}*/}
        {/*/>*/}
        {/*<button onSubmit={this.handleSubmit} type="submit">*/}
        {/*Submit*/}
        {/*</button>*/}
        {/*</form>*/}
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
    updateUser: user_data => dispatch(actions.updateUser(user_data))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    // actionCreators
    mapDispatchToProps
  )(ProfilePage)
);
