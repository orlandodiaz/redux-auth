import React, { Component } from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
  Redirect
} from "react-router-dom";

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

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         this.props.user.is_authenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       this.props.state.is_authenticated === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
// );

class App extends Component {
  PrivateRoute = ({ component: ChildComponent, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (!this.props.state.auth.is_authenticated) {
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
          } else {
            return <ChildComponent {...props} />;
          }
        }}
      />
    );
  };

  render() {
    let { PrivateRoute } = this;

    return (
      <Router>
        {/*<Switch>*/}
        <BasePage>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/home"} component={HomePage} />
          <Route path={"/login"} component={LoginPage} />
          <PrivateRoute path={"/about"} component={AboutPage} />
          <Route path={"/register"} component={RegisterPage} />
          <PrivateRoute path={"/profile"} component={ProfilePage} />
        </BasePage>
        {/*</Switch>*/}
      </Router>
    );
  }
}

// export default App;

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(App);
