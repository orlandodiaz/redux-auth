import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import MenuItem from "@material-ui/core/MenuItem";
import RadioButton from "@material-ui/core/Radio";
import { TextField } from "redux-form-material-ui";

class MyForm extends Component {
  render() {
    return (
      <form>
        <p>
          <Field name="username" label="Username" component={TextField} />
        </p>
        <p>
          <Field name="password" label="password" component={TextField} hintText="Street" />
        </p>
        <p>
          <Field name="email" label="email" component={TextField} hintText="Street" />
        </p>
      </form>
    );
  }
}

// Decorate with redux-form
MyForm = reduxForm({
  form: "login"
})(MyForm);

export default MyForm;
