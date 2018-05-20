import { connect } from 'react-redux';

import Landing from '../components/Landing';
import * as actions from '../actions';

function mapStateToProps(state) {
  console.log('map state to props of landing')
  console.log(state)
  return {
    signedIn: state.app.signedIn,
  }
}

export default connect(mapStateToProps, actions)(Landing);