import { connect } from 'react-redux';
import * as actions from '../actions';
import Profile from '../components/Profile';

function mapStateToProps(state) {
  return {
    user: state.app.user
  }
}

export default connect(mapStateToProps, actions)(Profile);