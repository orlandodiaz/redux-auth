import React, { Component } from "react";
import Button from "@material-ui/core/Button";

const MyButton = props => <Button {...props}> {props.children}</Button>;

export default MyButton;
