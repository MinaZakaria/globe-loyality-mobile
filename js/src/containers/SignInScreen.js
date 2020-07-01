import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import { loginApi } from '../actions/login';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitClicked: (email, password) => {
      const loginApiAction = loginApi(email, password);
      dispatch(loginApiAction);
      return loginApiAction.promise;
    },
    onCreateAccountClicked: () => {
      ownProps.navigation.navigate('SignUp');
    }
  };
};

const SignInScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

export default SignInScreen;
