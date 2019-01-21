import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../actions";
import { connect } from "react-redux";

// Fake sample data goes here

class FlashComponent extends Component {
  render() {
    if (
      this.props.state.flash.message &&
      this.props.state.flash.type === "error"
    ) {
      return <p style={{ color: "red" }}>{this.props.state.flash.message}</p>;
    }

    if (
      this.props.state.flash.message &&
      this.props.state.flash.type === "success"
    ) {
      return <p style={{ color: "green" }}>{this.props.state.flash.message}</p>;
    }

    return "";
  }
}

const mapStateToProps = state => ({
  state: state
});

export default connect(
  mapStateToProps,
  actionCreators
  // mapDispatchToProps
)(FlashComponent);
