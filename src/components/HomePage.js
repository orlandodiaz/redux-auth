import React, { Component } from "react";

class HomePage extends Component {
  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return <div>This is the Homepage </div>;
  }
}

export default HomePage;
