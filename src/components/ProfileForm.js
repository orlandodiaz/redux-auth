import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { currentUserDetail } from "../actions";
import { withRouter } from "react-router-dom";

// class ContactForm extends Component {
//   handleSubmit = e => {};
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           {/* form body*/}
//
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

let ProfileForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label> Usernamess </label>
      <Field value="ssssssssss" name="username" component="input" type="text" />

      <label> First name </label>
      <Field name="first_name" value="aaaaaaa" component="input" type="text" />

      <label> Last name </label>
      <Field name="last_name" component="input" type="text" />

      <label> Email </label>
      <Field value="email" name="email" component="input" type="text" />

      <button type="submit">Submit</button>
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
//   form: "profile"
// })(ProfileForm);
//
// ProfileForm = connect(
//   state => ({
//     initialValues: state.user
//   }),
//   { load: currentUserDetail }
// )(ProfileForm);
//
// export default ProfileForm;

// ProfileForm = reduxForm({
//   // a unique name for the form
//   form: "profile"
// })(ProfileForm);
//
// export default ProfileForm;

// export default withRouter(reduxForm({ form: "profile" })(ProfileForm));
