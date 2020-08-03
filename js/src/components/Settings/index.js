import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

Settings.propTypes = {
  onLogoutPress: PropTypes.func
};

Settings.defaultProps = {
};

export default Settings;
