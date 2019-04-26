/**
 * Author: DuongHan
 * Created: 4/16/19
 *
 */

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectRoutes } from 'containers/Auth/selectors';
import { initRouteName } from 'containers/Auth/actions';
import Links from './Links';

const mapStateToProps = createStructuredSelector({
  routes: makeSelectRoutes(),
});

const mapDispatchToProps = dispatch => ({
  initRouteName: () => dispatch(initRouteName()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Links);
