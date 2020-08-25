import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../../assets/images';

class ControlChallenges extends Component {

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image source={images.menu} />
        </TouchableOpacity>
        <Text style={styles.containerTitle}>Control Challenges</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
        >
          <Image source={images.profile} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <Text style={{ alignSelf: 'center', marginTop: 100 }}>Control Challenges Screen</Text>
      </View>
    );
  }
}

ControlChallenges.propTypes = {
  navigation: PropTypes.object,
};

ControlChallenges.defaultProps = {
};

export default ControlChallenges;
