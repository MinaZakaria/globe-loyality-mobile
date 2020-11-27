import React from 'react';
import { Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import images from '../../../assets/images';
import { colors } from '../../styles';

import { getCurrentUser } from '../../selectors/login';

import ControlUsersScreen from './ControlUsersScreen';
import ControlChallengesScreen from './ControlChallengesScreen';
import ControlSubmitionsScreen from './ControlSubmitionsScreen';


const mapStateToProps = state => {  //eslint-disable-line no-unused-vars
  return {
    currentUser: getCurrentUser(state)
  };
};

const mapDispatchToProps = dispatch => {  //eslint-disable-line no-unused-vars
  return {
  };
};

const AdminPanelScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanelTab);

function AdminPanelTab(props) {
  const { currentUser } = props;  //eslint-disable-line
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={ControlChallengesScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {  //eslint-disable-line
          return (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={ScreenOptions[route.name].icon}
                style={{ tintColor: focused ? colors.selected : colors.deselected }}
              />
              <Text>{ScreenOptions[route.name].title}</Text>
            </View>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          shadowColor: colors.shadow,
          shadowRadius: 2,
          shadowOpacity: 1
        }
      }}
    >
      <Tab.Screen name="ControlUsersScreen" component={ControlUsersScreen} />
      <Tab.Screen name="ControlChallengesScreen" component={ControlChallengesScreen} />
      <Tab.Screen name="ControlSubmitionsScreen" component={ControlSubmitionsScreen} />
    </Tab.Navigator>
  );
}

const ScreenOptions = {
  ControlUsersScreen: {
    icon: images.profile,
    title: 'Users'
  },
  ControlChallengesScreen: {
    icon: images.challenges.icon,
    title: 'Challenges'
  },
  ControlSubmitionsScreen: {
    icon: images.challenges.icon,
    title: 'Review Challenges'
  },
};

export default AdminPanelScreen;
