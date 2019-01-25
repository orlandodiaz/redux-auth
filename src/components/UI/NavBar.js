import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/es/styles/withStyles";
import MenuIcon from "@material-ui/icons/Menu";
// import IconButton from "@material-uai/core/IconButton/IconButton";
import Person from "@material-ui/icons/Person";

// import Menu from "@material-ui/icons/Menu";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Drawer from "@material-ui/core/Drawer";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import compose from "recompose/compose";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },

  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

// const { classes } = this.props;

class NavBar extends Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    const { handleLogin, handleLogout, handleProfile, handleRegister } = this.props;

    this.sideList = (
      <div className={classes.list}>
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Home" onClick={() => this.props.history.push("/")} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" onClick={() => this.props.history.push("/about")} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Privacy statement"
              onClick={() => this.props.history.push("/privacy")}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Terms of Use" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={this.toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            REST Auth Demo
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.grow} />

          {/*{this.props.state.auth.is_authenticated ? (*/}
          {/*<p style={{ marginRight: 15 }}>Welcome {this.props.state.user.username} !</p>*/}
          {/*) : (*/}
          {/*""*/}
          {/*)}*/}

          {this.props.state.auth.is_authenticated ? (
            <Button onClick={handleProfile} color="inherit">
              <Person style={{ paddingRight: 5 }} />
              {this.props.state.user.username}
            </Button>
          ) : (
            ""
          )}

          {this.props.state.auth.is_authenticated ? (
            ""
          ) : (
            <Button onClick={handleLogin} color="inherit">
              Login
            </Button>
          )}

          {this.props.state.auth.is_authenticated ? (
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          ) : (
            ""
          )}

          {this.props.state.auth.is_authenticated ? (
            ""
          ) : (
            <Button onClick={handleRegister} color="inherit">
              Register
            </Button>
          )}
        </Toolbar>

        <Drawer open={this.state.left} onClose={this.toggleDrawer("left", false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {this.sideList}
          </div>
        </Drawer>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  state: state
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(withRouter(NavBar));
