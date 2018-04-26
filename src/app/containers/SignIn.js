import { connect } from 'react-redux';
import * as actions from '../actions';
import SignIn from '../components/SignIn';

function mapStateToProps(state) {
  return {
    
  }
}

export default connect(mapStateToProps, actions)(SignIn)