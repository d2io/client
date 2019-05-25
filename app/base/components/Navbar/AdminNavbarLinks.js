import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { withRouter } from "react-router-dom";

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Hidden from '@material-ui/core/Hidden';
import Poppers from '@material-ui/core/Popper';

// @material-ui/icons
import Person from '@material-ui/icons/Person';
import Notifications from '@material-ui/icons/Notifications';
import Search from '@material-ui/icons/Search';

// core components
import CustomInput from 'base/components/Input';
import Button from 'base/components/Button';

import headerLinksStyle from 'base/styles/components/headerLinks';
import AdminMenuList from './AdminMenuList';

class HeaderLinks extends React.Component {
  state = {
    open: false,
    anchorEl: null,
    entries: [],
    type: '',
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClick = type => event => {
    const { currentTarget } = event;
    const entries =
      type === 'logout'
        ? ['Thông tin', 'Đăng xuất']
        : ['this is example notification row'];

    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
      entries,
      type,
    }));
  };

  handleClickMenuEntry = entry => event => {
    // TODO: handle invidual cases
    if (this.state.type === 'logout' && entry === 1) {
      Cookies.remove('token');
      this.props.history.push("/login");
    }
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <div className={classes.searchWrapper}>
          <CustomInput
            formControlProps={{
              className: `${classes.margin} ${classes.search}`,
            }}
            inputProps={{
              placeholder: 'Search',
              inputProps: {
                'aria-label': 'Search',
              },
            }}
          />
          <Button color="white" aria-label="edit" justIcon round>
            <Search />
          </Button>
        </div>
        <div className={classes.manager}>
          <Button
            color={window.innerWidth > 959 ? 'transparent' : 'white'}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-owns={open ? 'menu-list-grow' : null}
            aria-haspopup
            onClick={this.handleClick('notification')}
            className={classes.buttonLink}
          >
            <Notifications className={classes.icons} />
            <span className={classes.notifications}>5</span>
          </Button>
          <Poppers
            open={open}
            anchorEl={this.state.anchorEl}
            transition
            disablePortal
            className={`${classNames({ [classes.popperClose]: !open })} ${
              classes.pooperNav
            }`}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin: placement,
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <AdminMenuList
                      classes={classes}
                      handleClickMenuEntry={this.handleClickMenuEntry}
                      entries={this.state.entries}
                    />
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Poppers>
        </div>
        <Button
          color={window.innerWidth > 959 ? 'transparent' : 'white'}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          onClick={this.handleClick('logout')}
          aria-label="Person"
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </Button>
      </div>
    );
  }
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerLinksStyle)(withRouter(HeaderLinks));
