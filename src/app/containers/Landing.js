import { connect } from 'react-redux';

import Landing from '../components/Landing';
import * as actions from '../actions';

function mapStateToProps(state) {
  return {
    signedIn: state.app.signIn
  }
}

export default connect(mapStateToProps, actions)(Landing);