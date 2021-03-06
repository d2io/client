/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import axios from 'axios';
import Cookies from 'js-cookie';

const config = {
  headers: {
    Authorization:
      Cookies.get('token') && Cookies.get('token').replace('%20', ' '),
  },
};

const setAuthToken = token => {
  if (token) {
    // apply to every token
    axios.defaults.headers.common.Authorization = token;
    config.headers.Authorization = token;
  } else {
    // delete login header
    delete axios.defaults.headers.common.Authorization;
  }
};

export { setAuthToken, config };
