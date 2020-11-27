import { connect } from 'react-redux';
import ControlUsers from '../../components/AdminPanel/ControlUsers';
import { actionWithPromise } from '../../middlewares/promises';
import { listUsersApi, editUserStatusApi } from '../../actions/users';
import { getByStatus as getUsersByStatus } from '../../selectors/users';
import { ACTIVE, PENDING, IN_ACTIVE } from '../../constants/UserStatueses';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
    activeUsers: getUsersByStatus(state, ACTIVE),
    pendingUsers: getUsersByStatus(state, PENDING),
    inActiveUsers: getUsersByStatus(state, IN_ACTIVE)
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
    fetchUsers: () => {
      const listUsersAction = listUsersApi();
      return dispatch(actionWithPromise(listUsersAction));
    },
    approveUser: (userId) => {
      let statusId = ACTIVE;
      const action = editUserStatusApi(userId, statusId);
      return dispatch(actionWithPromise(action));
    },
    blockUser: (userId) => {
      let statusId = IN_ACTIVE;
      const action = editUserStatusApi(userId, statusId);
      return dispatch(actionWithPromise(action));
    },
  };
};

const ControlUsersScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlUsers);

export default ControlUsersScreen;
