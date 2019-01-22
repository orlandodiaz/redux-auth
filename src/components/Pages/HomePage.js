import React, { Component } from "react";
import NavBar from "../UI/NavBar";

class HomePage extends Component {
  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return <div>This is the Homepage</div>;
  }
}

export default HomePage;
