import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { TextField } from "redux-form-material-ui";
import SimpleField from "../UI/SimpleField";
import Typography from "@material-ui/core/Typography";

import MyButton from "../UI/Button";
import Button from "@material-ui/core/Button";
/////////////////////////////////////////// VALIDATIONS///////////////////////////////////
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

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
let RegisterForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} autoCorrect="off" spellCheck="false" autoComplete="off">
      <p>
        <Field name="username" label="username" component={TextField} fullWidth="true" />
      </p>
      {/*<SimpleField name="username" label="Username" component={TextField} fullWidth="true" />*/}
      <p>
        <Field
          name="password"
          type="password"
          label="password"
          component={TextField}
          fullWidth="true"
        />
      </p>

      <p>
        <Field
          name="fist_name"
          type="first_name"
          label="first name"
          component={TextField}
          fullWidth="true"
        />
      </p>

      <p>
        <Field name="email" type="email" label="email" component={TextField} fullWidth="true" />
      </p>

      <MyButton type="submit" variant="contained" color="primary" fullWidth="true">
        Register
      </MyButton>
      {/*<Typography variant="body1">Don't have an account? Register here</Typography>*/}
    </form>
  );
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label> Login </label>
  //     <Field name="username" component={renderField} type="text" />
  //
  //     <label> password </label>
  //     <Field name="password" component={renderField} type="text" />
  //
  //     <button type="submit">Submit</button>
  //   </form>
  // );
};

RegisterForm = reduxForm({
  // a unique name for the form
  form: "register",
  validate
})(RegisterForm);

export default RegisterForm;
