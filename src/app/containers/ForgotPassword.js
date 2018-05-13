import { connect } from 'react-redux';

import * as actions from '../actions';
import ForgotPassword from '../components/ForgotPassword';

function mapStateToProps(state) {
  return {
    resetPasswordSuccess: state.app.resetPasswordSuccess,
    resetPasswordFailure: state.app.resetPasswordFailure,
    errorMessage: state.app.errorMessage
  }
}

export default connect(mapStateToProps, actions)(ForgotPassword);