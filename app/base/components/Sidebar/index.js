import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer/index';
import Hidden from '@material-ui/core/Hidden/index';
// core components
import AdminNavbarLinks from 'base/components/Navbar/AdminNavbarLinks';

import sidebarStyle from 'base/styles/components/sidebar';
import image from 'assets/img/sidebar.jpg';
import Links from './LinksContainer';
import Brand from './Brand';

const Sidebar = ({ ...props }) => {
  const { classes } = props;

  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Brand classes={classes} />
          <div className={classes.sidebarWrapper}>
            <Links classes={classes} />
          </div>
          {image !== undefined && (
            <div
              className={classes.background}
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper),
          }}
        >
          <Brand classes={classes} />
          <div className={classes.sidebarWrapper}>
            <Links classes={classes} />
          </div>
          {image !== undefined && (
            <div
              className={classes.background}
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func,
  location: PropTypes.object.isRequired,
  open: PropTypes.bool,
};

export default withStyles(sidebarStyle)(Sidebar);
