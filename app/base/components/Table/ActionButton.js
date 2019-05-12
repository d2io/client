/**
 * Author: DuongHan
 * Created: 5/10/19
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

const icons = {
  default: {
    name: 'visibility',
    color: 'primary',
  },
  detail: {
    name: 'visibility',
    color: 'primary',
  },
  update: {
    name: 'edit',
    color: 'action',
  },
  delete: {
    name: 'delete',
    color: 'error',
  },
  hide: {
    name: 'visibility_off',
    color: 'primary',
  },
};

const actions = ['detail', 'update', 'hide', 'delete'];

const ActionBtn = ({ type, path }) => (
  <div>
    {actions.map(action => (
      <Link
        to={{
          pathname: `${path}/detail`,
          state: { type },
          search: action && `?action=${action}`,
        }}
      >
        <Icon color={icons[action].color} fontSize="small">
          {icons[action].name}
        </Icon>
      </Link>
    ))}
  </div>
);

ActionBtn.propTypes = {
  type: PropTypes.object,
  path: PropTypes.string,
};

export default ActionBtn;
