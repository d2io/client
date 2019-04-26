/**
 * Author: DuongHan
 * Created: 4/16/19
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { BLUE } from 'config/constants';

// const routes = [
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//   },
//   {
//     path: '/picture',
//     name: 'Picture',
//   },
// ];

const activeRoute = (routeName, location) =>
  location && location.pathname.indexOf(routeName) > -1;

const Links = props => {
  // props.initRouteName();
  const [routes, setRoutes] = useState(props.routes);
  const [open, setOpenState] = useState(false);

  useEffect(() => {
    if (props.routes !== routes) {
      setRoutes(props.routes);
    }
  });

  return (
    <List className={props.classes.list}>
      {routes
        .filter(route => !route.parent)
        .map(route => {
          const listItemClasses = classNames({
            [` ${props.classes[BLUE]}`]: activeRoute(
              route.link,
              props.location,
            ),
          });

          const whiteFontClasses = classNames({
            [` ${props.classes.whiteFont}`]: activeRoute(
              route.link,
              props.location,
            ),
          });

          return (
            <div>
              <NavLink
                to={route.link || '/#'}
                className={props.classes.item}
                activeClassName="active"
                key={route.id}
              >
                <ListItem
                  button
                  className={props.classes.itemLink + listItemClasses}
                >
                  {/* {typeof route.icon === 'string' ? ( */}
                  {/*  <Icon */}
                  {/*    className={classNames( */}
                  {/*      props.classes.itemIcon, */}
                  {/*      whiteFontClasses, */}
                  {/*    )} */}
                  {/*  > */}
                  {/*    {route.icon} */}
                  {/*  </Icon> */}
                  {/* ) : ( */}
                  {/*  <route.icon */}
                  {/*    className={classNames( */}
                  {/*      props.classes.itemIcon, */}
                  {/*      whiteFontClasses, */}
                  {/*    )} */}
                  {/*  /> */}
                  {/* )} */}
                  <ListItemText
                    primary={route.name}
                    className={classNames(
                      props.classes.itemText,
                      whiteFontClasses,
                    )}
                    disableTypography
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              </NavLink>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {routes
                    .filter(child => child.parent === route.id)
                    .map(child => (
                      <ListItem button>
                        <ListItemText inset primary={child.name} />
                      </ListItem>
                    ))}
                </List>
              </Collapse>
            </div>
          );
        })}
    </List>
  );
};

Links.propTypes = {
  classes: PropTypes.object.isRequired,
  initRouteName: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
};

export default withRouter(Links);
