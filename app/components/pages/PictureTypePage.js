/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from 'components/messages';

function LoginPage() {
  return (
    <div>
      Picture Type Page
      <FormattedMessage {...messages.header} />
    </div>
  );
}

LoginPage.propTypes = {};

export default memo(LoginPage);
