import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { StatusBar } from 'react-native';
import style from './style';
import { MenuProvider } from 'react-native-popup-menu';

export default function CenterView({ children }) {
  return (
    <MenuProvider>
      <View style={style.main}>
        <StatusBar hidden />
        {children}
      </View>
    </MenuProvider>
  );
}

CenterView.propTypes = {
  children: PropTypes.any
};
