import { connect } from 'react-redux';

import Challenges from '../components/Challenges';
import { listChallenges } from '../actions/challenges';
import { getAllActive as getActiveChallenges } from '../selectors/challenges';

const mapStateToProps = state => {
  return {
    challenges: getActiveChallenges(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChallenges: () => {
      dispatch(listChallenges());
    },
    onChallengePress: id => console.log('Challenge Pressed', id),  //eslint-disable-line no-console
    onCreateChallengePress: id => console.log('Challenge Pressed', id)  //eslint-disable-line no-console
  };
};

const ChallengesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenges);

export default ChallengesScreen;
