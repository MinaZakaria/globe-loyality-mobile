import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import PropTypes from 'prop-types';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
    isSignedIn: false
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavigator);

const Stack = createStackNavigator();

function AppNavigator(props) {
  return (
    <Stack.Navigator>
      {!props.isSignedIn ?
        (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )
        :
        (<>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </>)}
    </Stack.Navigator>
  );
}

AppNavigator.propTypes = {
  isSignedIn: PropTypes.bool,
};

export default App;
