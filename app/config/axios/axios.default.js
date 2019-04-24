import axios from 'axios';
import Cookies from 'js-cookie';

/**
 * Author: DuongHan
 * Created: 4/18/19
 *
 */

// axios default config
axios.defaults.baseURL = 'http://localhost:7991';
axios.defaults.headers.common.Authorization = Cookies.get('token')
  ? Cookies.get('token').replace('%20', ' ')
  : '';
axios.defaults.headers.post['Content-Type'] = 'application/json';
