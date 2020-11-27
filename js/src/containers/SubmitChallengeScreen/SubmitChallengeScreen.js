import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import Programs from '../../constants/Programs';

import SubmitElDa7ee7Screen from './SubmitElDa7ee7Screen';
// import SubmitGlobeIdolScreen from './SubmitGlobeIdolScreen';
import SubmitGlobeOlympicsScreen from './SubmitGlobeOlympicsScreen';


const mapStateToProps = (state, props) => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const SubmitChallengeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitChallengeNavigator);

const Stack = createStackNavigator();

function SubmitChallengeNavigator(props) {
  const programId = props.route.params.programId;
  const challengeId = props.route.params.challengeId;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {programId === Programs.EL_DA7EE7 &&
        <Stack.Screen name='SubmitElDa7ee7'>
          {(props) => <SubmitElDa7ee7Screen {...props} challengeId={challengeId} />}
        </Stack.Screen>
      }
      {/* {programId === Programs.EL_DA7EE7 && <Stack.Screen name="SubmitElDa7ee7" component={SubmitElDa7ee7Screen} />} */}
      {/* {challengeId === Programs.GLOBE_IDOL && <Stack.Screen name="SubmitGlobeIdol" component={SubmitGlobeIdolScreen} />} */}
      {programId === Programs.GLOBE_OLYMPICS && <Stack.Screen name="SubmitGlobeOlympics" component={SubmitGlobeOlympicsScreen} />}
    </Stack.Navigator>
  );
}

export default SubmitChallengeScreen;
