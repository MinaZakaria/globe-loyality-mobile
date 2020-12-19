import { connect } from 'react-redux';
import Profile from '../components/Profile';
import { getCurrentUser } from '../selectors/login';
import { getForCurrentUser as getCurrentUserSubmittions } from '../selectors/challengeSubmittions';

import { getMeApi } from '../actions/users';
import { listChallengeSubmittionsApi } from '../actions/challengeSubmittions';

const mapStateToProps = state => {
  return {
    currentUser: getCurrentUser(state),
    challengeSubmittions: getCurrentUserSubmittions(state)
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
    fetchMe: () => {
      dispatch(getMeApi());
    },
    fetchSubmittions: () => {
      const listAction = listChallengeSubmittionsApi();
      return dispatch(listAction);
    },
  };
};

const ProfileScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ProfileScreen;
