import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { TextField } from "redux-form-material-ui";
import SimpleField from "../UI/SimpleField";
import Typography from "@material-ui/core/Typography";

import MyButton from "../UI/Button";
import Button from "@material-ui/core/Button";
import connect from "react-redux/es/connect/connect";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";
/////////////////////////////////////////// VALIDATIONS///////////////////////////////////
const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
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
let PasswordResetRequestForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit} autoCorrect="off" spellCheck="false" autoComplete="off">
      <p>
        <Field name="email" label="email" component={TextField} fullWidth="true" />
      </p>

      <MyButton type="submit" variant="contained" color="primary" fullWidth="true">
        Submit
      </MyButton>
      {/*<Typography variant="body1">Don't have an account? Register here</Typography>*/}
    </form>
  );
};

PasswordResetRequestForm = reduxForm({
  // a unique name for the form
  form: "password_reset_request",
  validate
})(PasswordResetRequestForm);

export default PasswordResetRequestForm;
