import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SignUp Screen</Text>
      </View>
    );
  }
}

SignUp.propTypes = {
};

SignUp.defaultProps = {
};

export default SignUp;
