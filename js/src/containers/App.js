import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { getAccessToken } from '../selectors/login';

import { logout } from '../actions/logout';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
// import SettingsScreen from './SettingsScreen';
import ChallengesScreen from './ChallengesScreen';
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
    onLogoutPress: () => {
      return dispatch(logout());
    }
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavigator);

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const CustomDrawerContentScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomDrawerContent);

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
            <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
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

function HomeDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Challenges" drawerContent={props => <CustomDrawerContentScreen {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Challenges" component={ChallengesScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      {/* <Drawer.Screen name="Setings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent({ ...props }) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={props.onLogoutPress}
      />
    </DrawerContentScrollView>
  );
}

AppNavigator.propTypes = {
  isSignedIn: PropTypes.bool,
};

export default App;
