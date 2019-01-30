import React from "react";

import HomePage from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import AboutPage from "./components/Pages/AboutPage";
import RegisterPage from "./components/Pages/RegisterPage";
import ProfilePage from "./components/Pages/ProfilePage";
import PaswordResetRequestPage from "./components/Pages/PasswordResetRequestPage";
import PaswordResetPage from "./components/Pages/PasswordResetPage";
import EmailVerificationPage from "./components/Pages/EmailVerificationPage";
import BasePage from "./components/Pages/Base/BasePage";
import PrivateRoute from "./PrivateRoute";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
  Redirect
} from "react-router-dom";

const Routes = () => (
  <Switch>
    <PrivateRoute exact path={"/"} component={HomePage} />
    <PrivateRoute path={"/home"} component={HomePage} />
    <Route path={"/login"} component={LoginPage} />
    <Route path={"/about"} component={AboutPage} />
    <Route path={"/register"} component={RegisterPage} />
    <PrivateRoute path={"/profile"} component={ProfilePage} />
    <Route path={"/password_reset_request"} component={PaswordResetRequestPage} />
    <Route path={"/password_reset/:token"} component={PaswordResetPage} />
    <Route path={"/verify_email/:token"} component={EmailVerificationPage} />
  </Switch>
);

export default Routes;

// export default Routes;
