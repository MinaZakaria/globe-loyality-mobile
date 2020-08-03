import { connect } from 'react-redux';
import Settings from '../components/Settings';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const SettingsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default SettingsScreen;
