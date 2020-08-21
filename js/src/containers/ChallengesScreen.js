import { connect } from 'react-redux';

import Challenges from '../components/Challenges';
import { listChallenges, createChallenge } from '../actions/challenges';
import { getAllActive as getActiveChallenges } from '../selectors/challenges';
import { getAll as getAllPrograms } from '../selectors/programs';

import { actionWithPromise } from '../middlewares/promises';

const mapStateToProps = state => {
  return {
    challenges: getActiveChallenges(state),
    programs: getAllPrograms(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChallenges: () => {
      dispatch(listChallenges());
    },
    onChallengePress: id => console.log('Challenge Pressed', id),  //eslint-disable-line no-console
    onCreateChallengePress: (challenge) => {
      const action = createChallenge(challenge);
      return dispatch(actionWithPromise(action));
    }
  };
};

const ChallengesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenges);

export default ChallengesScreen;
