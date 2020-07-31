import { connect } from 'react-redux';
import Home from '../components/Home';
import { logout } from '../actions/logout';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
    onLogoutPress: () => {
      return dispatch(logout());
    }
  };
};

const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeScreen;
