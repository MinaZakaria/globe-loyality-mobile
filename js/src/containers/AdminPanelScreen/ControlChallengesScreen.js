import { connect } from 'react-redux';
import ControlChallenges from '../../components/AdminPanel/ControlChallenges';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const ControlChallengesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlChallenges);

export default ControlChallengesScreen;
