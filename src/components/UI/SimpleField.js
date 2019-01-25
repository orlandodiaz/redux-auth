import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

// class MyButton extends Button {
//   render() {
//     return <Button>aa</Button>;
//   }
// }

const SimpleField = props => <TextField {...props}>{props.children}</TextField>;

export default SimpleField;
