import { connect } from 'react-redux';
import Programs from '../components/Programs';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const ProgramsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Programs);

export default ProgramsScreen;
