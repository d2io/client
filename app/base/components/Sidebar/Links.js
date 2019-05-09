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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { BLUE } from 'config/constants';

const Links = props => {
  // props.initRouteName();
  const [routes, setRoutes] = useState(props.routes);
  const [open, setOpenState] = useState([]);
  const [itemActive, setItemActive] = useState(null);

  useEffect(() => {
    if (props.routes !== routes) {
      setRoutes(props.routes);
    } else if (open.length === 0) {
      const openState = routes.filter(route => !route.parent).map(_ => false);
      setOpenState(openState);
    }
  });

  return (
    <List className={props.classes.list} component="nav">
      {routes
        .filter(route => !route.parent)
        .map((route, index) =>
          !route.parent && !route.hasChild ? (
            <NavLink
              to={route.link || '/#'}
              className={props.classes.item}
              activeClassName="active"
              key={route.id}
            >
              <ListItem
                button
                className={classNames({
                  [` ${props.classes[BLUE]}`]: route.id === itemActive,
                })}
                onClick={() => setItemActive(route.id)}
              >
                <ListItemIcon>
                  <Icon className={classNames(props.classes.itemIcon)}>
                    {route.classAttribute}
                  </Icon>
                </ListItemIcon>
                <ListItemText
                  primary={route.name}
                  className={classNames(props.classes.itemText)}
                  disableTypography
                />
              </ListItem>
            </NavLink>
          ) : (
            <div key={route.id}>
              <ListItem
                button
                onClick={() =>
                  setOpenState(open.map((_, i) => (i === index ? !_ : false)))
                }
              >
                <Icon className={classNames(props.classes.itemIcon)}>
                  {route.classAttribute}
                </Icon>
                <ListItemText
                  primary={route.name}
                  className={classNames(props.classes.itemText)}
                  disableTypography
                />
                {open[index] ? (
                  <ExpandLess style={{ color: 'white' }} />
                ) : (
                  <ExpandMore style={{ color: 'white' }} />
                )}
              </ListItem>

              <Collapse in={open[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {routes
                    .filter(child => child.parent === route.id)
                    .map(child => (
                      <NavLink
                        to={child.link || '/#'}
                        className={props.classes.item}
                        style={{ marginLeft: 20 }}
                        activeClassName="active"
                        key={child.id}
                      >
                        <ListItem
                          button
                          className={classNames({
                            [` ${props.classes[BLUE]}`]:
                              child.id === itemActive,
                          })}
                          onClick={() => setItemActive(child.id)}
                        >
                          <ListItemText
                            primary={child.name}
                            className={classNames(props.classes.itemText)}
                            disableTypography
                          />
                        </ListItem>
                      </NavLink>
                    ))}
                </List>
              </Collapse>
            </div>
          ),
        )}
    </List>
  );
};

Links.propTypes = {
  classes: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
};

export default withRouter(Links);
