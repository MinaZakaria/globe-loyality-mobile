import { connect } from 'react-redux';
import SubmitGlobeIdol from '../../components/SubmitChallenge/SubmitGlobeIdol';
import { getById as getChallengeById } from '../../selectors/challenges';
import { actionWithPromise } from '../../middlewares/promises';
import { submitChallenge } from '../../actions/challenges';

const mapStateToProps = (state, props) => {  //eslint-disable-line no-unused-vars
  const challengeId = props.challengeId;
  return {
    challenge: getChallengeById(state, challengeId),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {  //eslint-disable-line no-unused-vars
  return {
    onSubmit: (data) => {
      const challengeId = ownProps.challengeId;
      const action = submitChallenge(challengeId, data);
      return dispatch(actionWithPromise(action));
    },
  };
};

const SubmitGlobeIdolScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitGlobeIdol);

export default SubmitGlobeIdolScreen;
