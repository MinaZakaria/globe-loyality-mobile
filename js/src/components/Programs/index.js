import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../assets/images';

class Programs extends Component {

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image source={images.menu} />
        </TouchableOpacity>
        <Text style={styles.containerTitle}>Programs</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Programs')}
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
        <View style={styles.programsContainer}>
          <View>
            <Image source={images.programs.globeChampionLogo} />
            <Image source={images.programs.elda7i7Logo} />
            <Image source={images.programs.abkarinoLogo} />
          </View>
          <View>
            <Image source={images.programs.globeIdolLogo} />
            <Image source={images.programs.selemElMagdLogo} />
            <Image source={images.programs.talentCatchingLogo} />
          </View>
        </View>
        <View style={styles.programsContainer}>
          <Image source={images.programs.globeOlympicsLogo} />
        </View>
      </View>
    );
  }
}

Programs.propTypes = {
  navigation: PropTypes.object,
};

Programs.defaultProps = {
};

export default Programs;
