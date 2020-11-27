import { connect } from 'react-redux';
import ProgramDetails from '../components/ProgramDetails';

import { getProgramChallenges } from '../selectors/challenges';
import { getById as getProgramById } from '../selectors/programs';

import { listChallenges } from '../actions/challenges';

const mapStateToProps = (state, props) => {  //eslint-disable-line no-unused-vars
  const programId = props.route.params.programId;
  return {
    program: getProgramById(state, programId),
    challenges: getProgramChallenges(state, programId),
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
    fetchChallenges: () => {
      dispatch(listChallenges());
    },
  };
};

const ProgramDetailsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgramDetails);

export default ProgramDetailsScreen;
