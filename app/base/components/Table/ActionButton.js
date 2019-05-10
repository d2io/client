/**
 * Author: DuongHan
 * Created: 5/10/19
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import VisibilityIcon from '@material-ui/icons/Visibility';

const color = {
  default: 'primary',
  detail: 'action',
  update: 'action',
  delete: 'error',
  hide: 'primary',
};

const ActionBtn = ({ type, paths }) => (
  <div>
    {paths.map(path => (
      <Link
        to={{
          pathname: path.name,
          state: { type },
          search: path.action && `?action=${path.action}`,
        }}
      >
        <VisibilityIcon color={color[path.action]} fontSize="small" />
      </Link>
    ))}
  </div>
);

ActionBtn.propTypes = {
  paths: PropTypes.array.isRequired,
  type: PropTypes.object,
};

export default ActionBtn;
