import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import { signUp } from '../actions/signUp';

import { actionWithPromise } from '../middlewares/promises';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
    userRoles: [
      { id: 1, name: 'Medical representative' },
      { id: 2, name: 'First line manager' },
      { id: 3, name: 'Second line manager' },
      { id: 4, name: 'HR' },
      { id: 5, name: 'Top management' },
      { id: 6, name: 'Trainer' },
    ]
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
