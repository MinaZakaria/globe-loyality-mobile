import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import { getAccessToken } from '../selectors/login';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import PropTypes from 'prop-types';
import RibbonWrapper from '../components/RibbonWrapper';
import RibbonService from '../utils/RibbonService';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
    isSignedIn: !!getAccessToken(state)
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
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
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
      <RibbonWrapper
        key='ribbonWrapper'
        ref={ribbonRef => {
          RibbonService.setRibbonWrapperRef(ribbonRef);
        }
        }
      />
    </>
  );
}

AppNavigator.propTypes = {
  isSignedIn: PropTypes.bool,
};

export default App;
