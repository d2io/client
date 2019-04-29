import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

// @material-ui/icons
import Menu from '@material-ui/icons/Menu';

// core components
import Button from 'base/components/Button';
import headerStyle from 'base/styles/components/header';
import AdminNavbarLinks from './AdminNavbarLinks';

function Header({ ...props }) {
  const makeBrand = () => {
    let name;
    props.routes.map((prop, key) => {
      if (prop.path === props.location.pathname) {
        name = { prop };
      } else name = 'Admin';
      return null;
    });
    return name;
  };

  const { classes, color } = props;
  const appBarClasses = classNames({
    [` ${classes[color]}`]: color,
  });

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button color="transparent" href="#" className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <AdminNavbarLinks />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  handleDrawerToggle: PropTypes.any,
  location: PropTypes.any,
  routes: PropTypes.array,
  rtlActive: PropTypes.any,
};

export default withStyles(headerStyle)(Header);
