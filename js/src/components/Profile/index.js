import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../assets/images';

class Profile extends Component {

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image source={images.menu} />
        </TouchableOpacity>
        <Text style={styles.containerTitle}>Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
        >
          <Image source={images.profile} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { currentUser } = this.props;
    console.log(currentUser);
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <View style={styles.mainInfo}>
          <Image source={images.profile2} />
          <View style={styles.mainText}>
            <Text>{currentUser.name}</Text>
            <Text>{currentUser.role.name}</Text>
          </View>
        </View>
      </View>
    );
  }
}

Profile.propTypes = {
  navigation: PropTypes.object,
  currentUser: PropTypes.object,
};

Profile.defaultProps = {
};

export default Profile;
