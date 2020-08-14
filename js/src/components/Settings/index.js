import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../assets/images';

class Settings extends Component {

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image source={images.menu} />
        </TouchableOpacity>
        <Text style={styles.containerTitle}>Settings</Text>
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
        <Text style={{ alignSelf: 'center', marginTop: 100 }}>Settings Screen</Text>
      </View>
    );
  }
}

Settings.propTypes = {
  navigation: PropTypes.object,
};

Settings.defaultProps = {
};

export default Settings;
