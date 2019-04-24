/**
 * Author: DuongHan
 * Created: 4/16/19
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { BLUE } from 'config/constants';
import { Dashboard, Person } from '@material-ui/icons';

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
  },
  {
    path: '/picture',
    name: 'Picture',
    icon: Person,
  },
];

class Links extends Component {
  activeRoute = routeName =>
    this.props.location && this.props.location.pathname.indexOf(routeName) > -1;

  render() {
    return (
      <List className={this.props.classes.list}>
        {this.props.routes.map((prop, key) => {
          const listItemClasses = classNames({
            [` ${this.props.classes[BLUE]}`]: this.activeRoute(prop.path),
          });

          const whiteFontClasses = classNames({
            [` ${this.props.classes.whiteFont}`]: this.activeRoute(prop.path),
          });

          return (
            <NavLink
              to={prop.path}
              className={this.props.classes.item}
              activeClassName="active"
              key={key}
            >
              <ListItem
                button
                className={this.props.classes.itemLink + listItemClasses}
              >
                {typeof prop.icon === 'string' ? (
                  <Icon
                    className={classNames(
                      this.props.classes.itemIcon,
                      whiteFontClasses,
                    )}
                  >
                    {prop.icon}
                  </Icon>
                ) : (
                  <prop.icon
                    className={classNames(
                      this.props.classes.itemIcon,
                      whiteFontClasses,
                    )}
                  />
                )}
                <ListItemText
                  primary={prop.name}
                  className={classNames(
                    this.props.classes.itemText,
                    whiteFontClasses,
                  )}
                  disableTypography
                />
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    );
  }
}

Links.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
};

export default withRouter(Links);
