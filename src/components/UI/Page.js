import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
// import Icon from "@material-ui/core/Icon";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),

    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: "100%",
    minWidth: "400px",
    maxWidth: "800px",
    width: "auto",
    marginTop: 50,
    // marginTop:0;
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto"
  }
});

function Page(props) {
  const { classes, title, children, icon, ...other } = props;

  return (
    <Paper className={classes.root} elevation={1} {...other}>
      <Typography variant="h4" component="h3">
        {icon}
        {title}
      </Typography>
      <p />

      <Typography component="p">{children}</Typography>
    </Paper>
  );
}

Page.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Page);
