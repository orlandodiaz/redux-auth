import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";
import { withStyles } from "@material-ui/core/styles";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import compose from "recompose/compose";
// import * as actionCreators from "../actions/index.js";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
  main: {
    width: "100%"
  }
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <div>
      <SnackbarContent
        className={classNames(classes[variant], className)}
        aria-describedby="client-snackbar"
        elevation="0"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={classNames(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
        {...other}
      />
    </div>
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    // margin: theme.spacing.unit,
    // width: "100%",
    maxWidth: "none",
    borderRadius: 0
  }
});

class CustomizedSnackbars extends React.Component {
  // state = {
  //   open: this.props.flash.open
  // };

  // componentDidMount() {
  //   this.setState({ open: true });
  // }
  //
  // handleClick = () => {
  //   this.setState({ open: true });
  // };

  handleClose = (event, reason) => {
    this.props.closeMessage();
  };

  render() {
    const { classes, type, message } = this.props;

    return (
      <div>
        {this.props.state.flash.open ? (
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant={type}
            className={classes.margin}
            message={message}
          />
        ) : null}
      </div>
    );
  }
}

CustomizedSnackbars.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    closeMessage: () => dispatch(actions.closeMessage())
  };
};
export default compose(
  withStyles(styles2),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(withRouter(CustomizedSnackbars));
