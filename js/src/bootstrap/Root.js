import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import store from './store';
import App from '../containers/App';
import { MenuProvider } from 'react-native-popup-menu';
import { dimensions } from '../styles';
import NavigationService from '../utils/NavigationService';

let rootReadyResolve = () => { };
export const rootReadyPromise = new Promise((resolve) => { rootReadyResolve = resolve; });

/**
 * Root component
 */
export default class Root extends Component {
  render() {
    return (
      <View style={{ width: dimensions.fullWidth, height: dimensions.fullHeight }}>
        <StatusBar hidden />
        <Provider store={store} >
          <NavigationContainer
            key='appNavigator'
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          >
            <MenuProvider>
              <App />
            </MenuProvider>
          </NavigationContainer>
        </Provider>
      </View>
    );
  }
  componentDidMount() {
    rootReadyResolve();
  }
}
