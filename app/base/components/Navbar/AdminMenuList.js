import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import PropTypes from 'prop-types';

const AdminMenuList = ({ classes, entries, handleClickMenuEntry }) => (
  <MenuList role="menu">
    {entries.map((entry, index) => (
      <MenuItem
        onClick={handleClickMenuEntry(index)}
        className={classes.dropdownItem}
      >
        {entry}
      </MenuItem>
    ))}
  </MenuList>
);

AdminMenuList.propTypes = {
  classes: PropTypes.object,
  entries: PropTypes.array,
  handleClickMenuEntry: PropTypes.func,
};

export default AdminMenuList;
