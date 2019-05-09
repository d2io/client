/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'base/components/Sidebar';
import dashboardStyle from 'base/styles/layouts/dashboard';

// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import Navbar from 'base/components/Navbar/Navbar';
import Footer from 'base/components/Footer';

import { switchRoutes } from './commons/switchRoutes';
import { dashboardRoutes } from './commons/routes';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileOpen: false,
    };
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  getRoute() {
    return this.props.location.pathname !== '/admin/maps';
  }

  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  };

  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener('resize', this.resizeFunction);
  }

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFunction);
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div className={classes.wrapper}>
        <Sidebar
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          {...this.props}
        />

        <div className={classes.mainPanel} ref="mainPanel">
          <Navbar
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />

          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() && <Footer />}
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  location: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Admin);
