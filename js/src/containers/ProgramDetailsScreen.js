import { connect } from 'react-redux';
import ProgramDetails from '../components/ProgramDetails';

const mapStateToProps = (state, props) => {  //eslint-disable-line no-unused-vars
  return {
    programId: props.route.params.programId
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const ProgramDetailsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgramDetails);

export default ProgramDetailsScreen;
