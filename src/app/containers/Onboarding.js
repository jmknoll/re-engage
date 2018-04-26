import { connect } from 'react-redux';
import * as actions from '../actions';
import Onboarding from '../components/Onboarding';

function mapStateToProps(state) {
  return {
    
  }
}

export default connect(mapStateToProps, actions)(Onboarding)