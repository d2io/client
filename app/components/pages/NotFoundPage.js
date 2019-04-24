/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import { FormattedMessage } from 'react-intl';
import React, { memo } from 'react';
import messages from 'components/messages';

function LoginPage() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

LoginPage.propTypes = {};

export default memo(LoginPage);
