import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import DeleteIcon from '@material-ui/icons/Delete';

const ActionBtn = ({ type }) => (
  <div>
    <Link
      to={{
        pathname: '/picture-type/detail',
        state: { type },
      }}
    >
      <VisibilityIcon color="primary" fontSize="small" />
    </Link>

    <Link
      to={{
        pathname: '/picture-type/update',
        state: { type },
      }}
    >
      <EditIcon color="action" fontSize="small" />
    </Link>

    <Link
      to={{
        pathname: '/picture-type/detail',
        search: '?action=hide',
        state: { type },
      }}
    >
      <VisibilityOffIcon color="primary" fontSize="small" />
    </Link>

    <Link
      to={{
        pathname: '/picture-type/detail',
        search: '?action=delete',
        state: { type },
      }}
    >
      <DeleteIcon color="error" fontSize="small" />
    </Link>
  </div>
);

ActionBtn.propTypes = {
  type: PropTypes.object,
};

export default ActionBtn;
