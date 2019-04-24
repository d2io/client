import axios from 'axios';

/**
 * Author: DuongHan
 * Created: 4/18/19
 *
 */

const axiosConfig = ({ ...config }) => {
  axios.defaults = {
    ...axios.defaults,
    ...config,
  };
};

export default axiosConfig;
