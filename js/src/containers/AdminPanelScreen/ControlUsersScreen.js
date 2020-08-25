import { connect } from 'react-redux';
import ControlUsers from '../../components/AdminPanel/ControlUsers';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const ControlUsersScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlUsers);

export default ControlUsersScreen;
