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
let ProfileForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} autoCorrect="off" spellCheck="false" autoComplete="off">
      <p>
        <Field name="username" label="username" component={TextField} fullWidth="true" />
      </p>
      {/*<SimpleField name="username" label="Username" component={TextField} fullWidth="true" />*/}
      <p>
        <Field
          name="first_name"
          type="first_name"
          label="first name"
          component={TextField}
          fullWidth="true"
        />
        <p />
        <Field name="last_name" label="last name" component={TextField} fullWidth="true" />
      </p>

      <p />

      <p>
        <Field name="email" type="email" label="email" component={TextField} fullWidth="true" />
      </p>

      <MyButton type="submit" variant="contained" color="primary" fullWidth="true">
        Update profile
      </MyButton>
    </form>
  );
};

ProfileForm = reduxForm({
  form: "profile", // a unique identifier for this form
  enableReinitialize: true
})(ProfileForm);

// You have to connect() to any reducers that you wish to connect to yourself
ProfileForm = connect(
  state => ({
    initialValues: state.user // pull initial values from account reducer
  }),
  { load: actions.currentUserDetail } // bind account loading action creator
)(ProfileForm);

export default withRouter(ProfileForm);

// ProfileForm = reduxForm({
//   // a unique name for the form
//   form: "profile",
//   validate
// })(ProfileForm);
//
// export default ProfileForm;
