import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOut } from '../actions/auth';
import Profile from '../components/Profile';

function mapStateToProps(state) {
  return {
    user: state.app.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signOut: signOut,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);