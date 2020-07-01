import { connect } from 'react-redux';
import Profile from '../components/Profile';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const ProfileScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ProfileScreen;
