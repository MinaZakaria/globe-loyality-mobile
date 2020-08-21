import { connect } from 'react-redux';
import ProgramDetails from '../components/ProgramDetails';
import { getById as getProgramById } from '../selectors/programs';

const mapStateToProps = (state, props) => {  //eslint-disable-line no-unused-vars
  const programId = props.route.params.programId;
  return {
    program: getProgramById(state, programId)
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
