import { connect } from 'react-redux';

import Landing from './Landing';
import * as actions from './actions';

function mapStateToProps(state) {
  return {
    signedIn: state.app.signIn
  }
}

export default connect(mapStateToProps, actions)(Landing);