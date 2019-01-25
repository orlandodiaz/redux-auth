import Page from "../UI/Page";

import React, { Component } from "react";
import MyForm from "../Forms/MaterialReduxForm";
import LoginForm from "../Forms/LoginForm";

class AboutPage extends Component {
  render() {
    return (
      <Page title="About">
        This demo demonstrates a working RESTFUL API backend with django alongside a React frontend
        <LoginForm />
      </Page>
    );
  }
}

export default AboutPage;
