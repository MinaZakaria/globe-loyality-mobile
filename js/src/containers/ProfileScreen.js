import { connect } from 'react-redux';
import Profile from '../components/Profile';
import { getCurrentUser } from '../selectors/login';

import { getMeApi } from '../actions/users';

const mapStateToProps = state => {
  return {
    currentUser: getCurrentUser(state)
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
    fetchMe: () => {
      dispatch(getMeApi());
    }
  };
};

const ProfileScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ProfileScreen;
