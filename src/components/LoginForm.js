import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  // if (!values.email) {
  //   errors.email = "Required";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = "Invalid email address";
  // }
  // if (!values.age) {
  //   errors.age = "Required";
  // } else if (isNaN(Number(values.age))) {
  //   errors.age = "Must be a number";
  // } else if (Number(values.age) < 18) {
  //   errors.age = "Sorry, you must be at least 18 years old";
  // }
  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = "Hmm, you seem a bit young...";
  }
  return warnings;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label> Login </label>
      <Field name="username" component={renderField} type="text" />

      <label> password </label>
      <Field name="password" component={renderField} type="text" />

      <button type="submit">Submit</button>
    </form>
  );
};

LoginForm = reduxForm({
  // a unique name for the form
  form: "login",
  validate
})(LoginForm);

export default LoginForm;
