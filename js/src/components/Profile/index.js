import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

Profile.propTypes = {
};

Profile.defaultProps = {
};

export default Profile;
