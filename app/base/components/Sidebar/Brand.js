/**
 * Author: DuongHan
 * Created: 4/16/19
 *
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import logo from 'assets/img/icons/reactlogo.png';

const Brand = props => (
  <div className={props.classes.logo}>
    <a
      href="https://www.creative-tim.com"
      className={classNames(props.classes.logoLink)}
    >
      <div className={props.classes.logoImage}>
        <img src={logo} alt="logo" className={props.classes.img} />
      </div>
      Admin
    </a>
  </div>
);

Brand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Brand;
