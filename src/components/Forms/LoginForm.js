import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { TextField } from "redux-form-material-ui";
import SimpleField from "../UI/SimpleField";
import Typography from "@material-ui/core/Typography";

import MyButton from "../UI/Button";
import Button from "@material-ui/core/Button";
import Page from "../UI/Page";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LockIcon from "../UI/Lockicon";
import { Link } from "react-router-dom";

/////////////////////////////////////////////// CSS ///////////////////////////////////////
const style = {
  height: "20%",
  minWidth: "400px",
  maxWidth: "800px",
  width: "300px",
  marginTop: 50,
  // marginTop:0;
  marginBottom: 0,
  marginLeft: "auto",
  marginRight: "auto",
  color: "white"
};

/////////////////////////////////////////// VALIDATIONS ///////////////////////////////////
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = "Hmm, you seem a bit young...";
  }
  return warnings;
};

/////////////////////////////// FIELD RENDERING TEMPLATE////////////////////////////////////
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

////////////////////////// FORM HTML ////////////////////////////////
let LoginForm = props => {
  const { handleSubmit } = props;

  return (
    <Page icon={LockIcon} title="Sign in" style={style}>
      <form onSubmit={handleSubmit} autoCorrect="off" spellCheck="false" autoComplete="off">
        <p>
          <Field name="username" label="username" component={TextField} fullWidth="true" />
        </p>
        <p>
          <Field
            name="password"
            type="password"
            label="password"
            component={TextField}
            fullWidth="true"
          />
        </p>
        <MyButton type="submit" variant="contained" color="primary" fullWidth="true">
          Sign in
        </MyButton>

        <p>
          Don't have an account? Register <Link to="/register">Here</Link>
        </p>
        <p>
          {" "}
          <Link to="/password_reset_request">Forgot username/password?</Link>
        </p>
      </form>
    </Page>
  );
};

LoginForm = reduxForm({
  // a unique name for the form
  form: "login",
  validate
})(LoginForm);

export default LoginForm;
