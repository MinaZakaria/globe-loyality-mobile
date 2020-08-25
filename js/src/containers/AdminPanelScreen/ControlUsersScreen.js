import { connect } from 'react-redux';
import ControlUsers from '../../components/AdminPanel/ControlUsers';
import { actionWithPromise } from '../../middlewares/promises';
import { listUsersApi, editUserStatusApi } from '../../actions/users';
import { getByStatus as getUsersByStatus } from '../../selectors/users';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
    activeUsers: getUsersByStatus(state, 1),
    pendingUsers: getUsersByStatus(state, 2),
    inActiveUsers: getUsersByStatus(state, 3)
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
    fetchUsers: () => {
      const listUsersAction = listUsersApi();
      return dispatch(actionWithPromise(listUsersAction));
    },
    approveUser: (userId) => {
      let statusId = 1;
      const action = editUserStatusApi(userId, statusId);
      return dispatch(actionWithPromise(action));
    },
    blockUser: (userId) => {
      let statusId = 3;
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
