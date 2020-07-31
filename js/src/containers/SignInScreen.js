import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import { login } from '../actions/login';

import { actionWithPromise } from '../middlewares/promises';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginPress: (email, password) => {
      const loginAction = login(email, password);
      return dispatch(actionWithPromise(loginAction));
    },
  };
};

const SignInScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

export default SignInScreen;
