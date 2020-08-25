import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../../assets/images';

class ControlUsers extends Component {

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image source={images.menu} />
        </TouchableOpacity>
        <Text style={styles.containerTitle}>ControlUsers</Text>
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
        <Text style={{ alignSelf: 'center', marginTop: 100 }}>ControlUsers Screen</Text>
      </View>
    );
  }
}

ControlUsers.propTypes = {
  navigation: PropTypes.object,
};

ControlUsers.defaultProps = {
};

export default ControlUsers;
