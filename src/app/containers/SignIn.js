import { connect } from 'react-redux';
import * as actions from '../actions';
import SignIn from '../components/SignIn';

function mapStateToProps(state) {
  return {
    errorMessage: state.app.errorMessage    
  }
}

export default connect(mapStateToProps, actions)(SignIn)