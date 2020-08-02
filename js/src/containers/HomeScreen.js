import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeScreen;
