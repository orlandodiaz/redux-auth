import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import HelloComponent from "./components/HelloComponent";
import LoginPage from "./components/LoginPage";
import BasePage from "./components/Base/BasePage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import RegisterPage from "./components/RegisterPage";
import ProfilePage from "./components/ProfilePage";

import * as actions from "./actions";

// class HomePage extends Component {
//   render() {
//     return <div>This is the homepage</div>;
//   }
// }

class App extends Component {
  render() {
    return (
      <Router>
        {/*<Switch>*/}
        <BasePage>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/home"} component={HomePage} />
          <Route path={"/login"} component={LoginPage} />
          <Route path={"/about"} component={AboutPage} />
          <Route path={"/register"} component={RegisterPage} />
          <Route path={"/profile"} component={ProfilePage} />
        </BasePage>
        {/*</Switch>*/}
      </Router>
    );
  }
}

export default App;
