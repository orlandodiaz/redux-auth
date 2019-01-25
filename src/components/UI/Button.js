import React, { Component } from "react";
import Button from "@material-ui/core/Button";

// class MyButton extends Button {
//   render() {
//     return <Button>aa</Button>;
//   }
// }

const MyButton = props => <Button {...props}> {props.children}</Button>;

export default MyButton;
