import { connect } from 'react-redux';
import SubmitElDa7ee7 from '../../components/SubmitChallenge/SubmitElDa7ee7';
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

const SubmitElDa7ee7Screen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitElDa7ee7);

export default SubmitElDa7ee7Screen;
