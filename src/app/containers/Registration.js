import { connect } from 'react-redux';
import * as actions from '../actions';
import Registration from '../components/Registration';

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, actions)(Registration)