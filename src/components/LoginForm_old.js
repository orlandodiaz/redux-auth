import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";

// class LoginForm extends Component {
//   handleSubmit = e => {};
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label> Login </label>
//           <Field name="username" component="input" type="text" />
//
//           <label> password </label>
//           <Field name="password" component="input" type="text" />
//
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label> Login </label>
      <Field name="username" component="input" type="text" />

      <label> password </label>
      <Field name="password" component="input" type="text" />

      <button type="submit">Submit</button>
    </form>
  );
};

LoginForm = reduxForm({
  // a unique name for the form
  form: "login"
})(LoginForm);

export default LoginForm;
