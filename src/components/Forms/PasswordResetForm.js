import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { TextField } from "redux-form-material-ui";

import MyButton from "../UI/Button";

/////////////////////////////////////////// VALIDATIONS///////////////////////////////////
const validate = values => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 15) {
    errors.current_password = "Must be 15 characters or less";
  }

  if (!values.new_password) {
    errors.new_password = "Required";
  } else if (values.new_password.length > 15) {
    errors.new_password = "Must be 15 characters or less";
  }

  if (!values.new_password1) {
    errors.new_password1 = "Required";
  } else if (values.new_password1.length > 15) {
    errors.new_password1 = "Must be 15 characters or less";
  }

  return errors;
};

const passwordsMatch = (value, allValues) =>
  value !== allValues.new_password ? "Passwords don't match" : undefined;

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
let PasswordResetForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit} autoCorrect="off" spellCheck="false" autoComplete="off">
      <p>
        <Field
          name="new_password"
          label="password"
          component={TextField}
          fullWidth="true"
          type="password"
        />
      </p>

      <p>
        <Field
          name="new_password1"
          label="confirm password"
          component={TextField}
          fullWidth="true"
          validate={passwordsMatch}
          type="password"
        />
      </p>

      <MyButton type="submit" variant="contained" color="primary" fullWidth="true">
        Submit
      </MyButton>
    </form>
  );
};

PasswordResetForm = reduxForm({
  // a unique name for the form
  form: "password_reset",
  validate
})(PasswordResetForm);

export default PasswordResetForm;
