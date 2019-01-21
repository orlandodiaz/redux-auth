import React, { Component } from "react";

class AboutPage extends Component {
  componentDidMount() {
    document.title = "About";
  }

  render() {
    return <div>This is the About page</div>;
  }
}

export default AboutPage;
