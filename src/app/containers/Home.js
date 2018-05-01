import { connect } from 'react-redux';
import * as actions from '../actions';
import Home from '../components/Home';

function mapStateToProps(state) {
  return {
    politicians: state.app.politicians
  }
}

export default connect(mapStateToProps, actions)(Home)