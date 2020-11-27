import { connect } from 'react-redux';
import ControlSubmitions from '../../components/AdminPanel/ControlSubmitions';
import { actionWithPromise } from '../../middlewares/promises';
import { listChallengeSubmittionsApi, editChallengeSubmittionStatusApi } from '../../actions/challengeSubmittions';
import { getByStatus as getSubmittionsByStatus } from '../../selectors/challengeSubmittions';
import { NEW, APPROVED, REJECTED, DECLINED } from '../../constants/ChallengeSubmittionStatueses';

const mapStateToProps = state => {
  return {
    newSubmittions: getSubmittionsByStatus(state, NEW),
    approvedSubmittions: getSubmittionsByStatus(state, APPROVED),
    rejectedSubmittions: getSubmittionsByStatus(state, REJECTED),
    declinedSubmittions: getSubmittionsByStatus(state, DECLINED)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSubmittions: () => {
      const listAction = listChallengeSubmittionsApi();
      return dispatch(actionWithPromise(listAction));
    },
    approveSubmittion: (id) => {
      let statusId = APPROVED;
      const action = editChallengeSubmittionStatusApi(id, statusId);
      return dispatch(actionWithPromise(action));
    },
    rejectSubmittion: (id) => {
      let statusId = REJECTED;
      const action = editChallengeSubmittionStatusApi(id, statusId);
      return dispatch(actionWithPromise(action));
    },
    declineSubmittion: (id) => {
      let statusId = DECLINED;
      const action = editChallengeSubmittionStatusApi(id, statusId);
      return dispatch(actionWithPromise(action));
    },
  };
};

const ControlSubmitionsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlSubmitions);

export default ControlSubmitionsScreen;
