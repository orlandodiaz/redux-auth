import React from "react";

import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ state }, { component: ChildComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        console.log("props inside private route");
        console.log(props);

        // console.log(this.props);
        if (!state.auth.is_authenticated) {
          return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
        } else {
          return <ChildComponent {...props} />;
        }
      }}
    />
  );
};

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(PrivateRoute);
