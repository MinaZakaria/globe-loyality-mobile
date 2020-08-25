import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import images from '../../assets/images';

import { getAccessToken } from '../selectors/login';
import { getCurrentUser } from '../selectors/login';

import { logout } from '../actions/logout';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import ProgramsScreen from './ProgramsScreen';
import ChallengesScreen from './ChallengesScreen';
import ProgramDetailsScreen from './ProgramDetailsScreen';
import AdminPanelScreen from './AdminPanelScreen/AdminPanelScreen';

import RibbonWrapper from '../components/RibbonWrapper';
import RibbonService from '../utils/RibbonService';

const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
    isSignedIn: !!getAccessToken(state),
    currentUser: getCurrentUser(state)
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
            <Stack.Screen name="HomeDrawer" component={HomeDrawerScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="ProgramDetails" component={ProgramDetailsScreen} />
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

const HomeDrawerScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeDrawer);

function HomeDrawer(props) {
  const { currentUser } = props;
  return (
    <Drawer.Navigator initialRouteName="Challenges" drawerContent={props => <CustomDrawerContentScreen {...props} />}>
      <Drawer.Screen
        name="Challenges"
        component={ChallengesScreen}
        options={{
          drawerLabel: 'Challenges',
          drawerIcon: () => (<Image source={images.challenges.icon} />)  //eslint-disable-line
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: 'Profile',
          drawerIcon: () => (<Image source={images.profile} />)  //eslint-disable-line
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerLabel: 'Settings',
          drawerIcon: () => (<Image source={images.settings} />)  //eslint-disable-line
        }}
      />
      <Drawer.Screen
        name="Programs"
        component={ProgramsScreen}
        options={{
          drawerLabel: 'Programs',
          drawerIcon: () => (<Image source={images.programs.logo} />)  //eslint-disable-line
        }}
      />
      {currentUser && currentUser.isAdmin ? <Drawer.Screen
        name="AdminPanel"
        component={AdminPanelScreen}
        options={{
          drawerLabel: 'Admin Panel',
          drawerIcon: () => (<Image source={images.adminPanel} />)  //eslint-disable-line
        }}
      /> : null}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent({ ...props }) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        icon={() => <Image source={images.logout} />}
        onPress={props.onLogoutPress} //eslint-disable-line
      />
    </DrawerContentScrollView>
  );
}

AppNavigator.propTypes = {
  isSignedIn: PropTypes.bool,
};

export default App;
