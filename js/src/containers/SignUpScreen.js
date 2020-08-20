import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import { signUp } from '../actions/signUp';
import { getAll as getAllUserRoles } from '../selectors/userRoles';

import { actionWithPromise } from '../middlewares/promises';

const mapStateToProps = state => {
  return {
    userRoles: getAllUserRoles(state),
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
    onRegisterPress: (userData) => {
      const registerAction = signUp(userData);
      return dispatch(actionWithPromise(registerAction));
    },
  };
};

const SignUpScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

export default SignUpScreen;
