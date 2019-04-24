/**
 * Author: DuongHan
 * Created: 4/16/19
 *
 */

import { connect } from 'react-redux';
import Links from './Links';

function mapStateToProps(state) {
  debugger;
  return {
    routes: state.sidebarRoute,
  };
}

export default connect(mapStateToProps)(Links);
