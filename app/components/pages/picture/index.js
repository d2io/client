/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { FormattedMessage } from 'react-intl';
import messages from 'components/messages';

const PicturePage = () => (
  <div>
    <Helmet defaultTitle="Picture Page" />
    Picture Page
    <FormattedMessage {...messages.header} />
  </div>
);

PicturePage.propTypes = {};

export default memo(PicturePage);
