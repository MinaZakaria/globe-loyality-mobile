import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import { signUp } from '../actions/signUp';

import { actionWithPromise } from '../middlewares/promises';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
    userRoles: [
      { id: 1, name: 'Banana' },
      { id: 2, name: 'Mango' },
      { id: 3, name: 'Pear' },
      { id: 4, name: 'koko' },
      { id: 5, name: 'nono' },
      { id: 6, name: 'Pear' },
      { id: 7, name: 'zatoon' }
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
