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

/////////////////////////////////////////// VALIDATIONS///////////////////////////////////
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
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <Page icon={LockIcon} title="Sign in" style={style}>
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
        {/*<button type="submit">Submit</button>*/}
        {/*<MyButton fullWidth="true" />*/}
        <MyButton type="submit" variant="contained" color="primary" fullWidth="true">
          Sign in
        </MyButton>

        <p>
          Don't have an account? Register <Link to="/register">Here</Link>
        </p>
        <p>
          {" "}
          {/*<a href="/password_reset_request"> Forgot password? </a>*/}
          <Link to="/password_reset_request">Forgot username/password?</Link>
        </p>
        {/*<Typography variant="body1">Don't have an account? Register here</Typography>*/}
      </form>
    </Page>
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

LoginForm = reduxForm({
  // a unique name for the form
  form: "login",
  validate
})(LoginForm);

export default LoginForm;
