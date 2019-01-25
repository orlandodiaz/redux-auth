import React, { Component } from "react";
import NavBar from "../UI/NavBar";
import Page from "../UI/Page";
import CustomizedSnackbars from "../UI/CustomizedSnackbars";
import Notification from "../UI/Notification";

class HomePage extends Component {
  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
      <Page title="Homepage">
        {/*sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss*/}
        {/*<div style={{ backgroundColor: "red", padding: 10 }}>*/}
        {/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/}
        {/*</div>*/}
        {/*<CustomizedSnackbars*/}
        {/*type="error"*/}
        {/*message="aaaaaa"*/}
        {/*style={{ padding: 0, margin: 0, borderRadius: "0" }}*/}
        {/*/>*/}
        {/*<Notification*/}
        {/*type="warning"*/}
        {/*message="Your email is not verified. Please click here to request a verification email*/}
        {/*"*/}
        {/*style={{ padding: 0, margin: 0, borderRadius: "0" }}*/}
        {/*/>*/}
        Welcome to the Django + Redux authentication demo!
      </Page>
    );
  }
}

export default HomePage;
