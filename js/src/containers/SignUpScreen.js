import { connect } from 'react-redux';
import SignUp from '../components/SignUp';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const SignUpScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

export default SignUpScreen;
