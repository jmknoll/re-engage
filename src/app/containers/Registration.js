import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp } from '../actions/auth';
import { resetMessageState } from '../actions/index';
import Registration from '../components/Registration';

function mapStateToProps(state) {
  return {
    errorMessage: state.app.errorMessage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signUp: signUp,
    resetMessageState: resetMessageState
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)