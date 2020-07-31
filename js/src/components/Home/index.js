import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button onPress={this.props.onLogoutPress} title='LOG OUT' />
      </View>
    );
  }
}

Home.propTypes = {
  onLogoutPress: PropTypes.func
};

Home.defaultProps = {
};

export default Home;
