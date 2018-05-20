import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signIn } from '../actions/auth';
import SignIn from '../components/SignIn';

function mapStateToProps(state) {
  return {
    errorMessage: state.app.errorMessage    
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signIn: signIn,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)