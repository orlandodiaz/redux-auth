import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";
import ProfileForm from "./ProfileForm";

class ProfilePage extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: ""
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
    this.props.currentUserDetail().then(() => {
      this.setState({
        username: this.props.state.user.username,
        first_name: this.props.state.user.first_name,
        last_name: this.props.state.user.last_name
      });
    });

    // Get user info from the server
  }
  // handleSubmit = values => {
  //   // e.preventDefault();
  //   alert(values.username);
  //   // this.props.updateUser(this.state);
  // };

  handleSubmit = e => {
    e.preventDefault();
    // alert(values.username);
    this.props.updateUser(this.state);
  };

  render() {
    return (
      <div>
        This is the Profile page. It displays information about the user
        {/*<ProfileForm onSubmit={this.handleSubmit} />*/}
        <form onSubmit={this.handleSubmit}>
          <label> Username </label>
          <input
            type="text"
            id="username"
            defaultValue={this.props.state.user.username}
            onChange={e => this.setState({ username: e.target.value })}
          />
          <label> First name </label>
          <input
            type="text"
            id="first_name"
            defaultValue={this.props.state.user.first_name}
            onChange={e => this.setState({ first_name: e.target.value })}
          />
          <label> Last name </label>
          <input
            type="text"
            id="password"
            defaultValue={this.props.state.user.last_name}
            onChange={e => this.setState({ last_name: e.target.value })}
          />
          <button onSubmit={this.handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    flash: message => dispatch(actions.flashMessage(message)),
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
