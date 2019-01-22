import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 500,
    marginTop: 50,
    // marginTop:0;
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto"
  }
});

function About(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography gutterBottom variant="h5" component="h5">
          About.
        </Typography>
        <Typography component="p">
          Thi site is for educational purposes. It was built using React and Redux
        </Typography>
      </Paper>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
