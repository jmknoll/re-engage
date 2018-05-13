import { connect } from 'react-redux';
import * as actions from '../actions';
import Registration from '../components/Registration';

function mapStateToProps(state) {
  return {
    errorMessage: state.app.errorMessage
  }
}

export default connect(mapStateToProps, actions)(Registration)