import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../assets/images';
import {
  GLOBE_CHAMPION, GLOBE_IDOL, ABKARINO, SELEM_ELMAGD,
  EL_DA7EE7, TALENT_CATCHING, GLOBE_OLYMPICS
} from '../../constants/Programs';

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
          onPress={() => navigation.navigate('Profile')}
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
            <TouchableOpacity onPress={() => this.onProgramPress(GLOBE_CHAMPION)}>
              <Image source={images.programs.globeChampionLogo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onProgramPress(EL_DA7EE7)}>
              <Image source={images.programs.elda7i7Logo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onProgramPress(ABKARINO)}>
              <Image source={images.programs.abkarinoLogo} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.onProgramPress(GLOBE_IDOL)}>
              <Image source={images.programs.globeIdolLogo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onProgramPress(SELEM_ELMAGD)}>
              <Image source={images.programs.selemElMagdLogo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onProgramPress(TALENT_CATCHING)}>
              <Image source={images.programs.talentCatchingLogo} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.programsContainer}>
          <TouchableOpacity onPress={() => this.onProgramPress(GLOBE_OLYMPICS)}>
            <Image source={images.programs.globeOlympicsLogo} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onProgramPress = (programId) => {
    const { navigation } = this.props;

    navigation.navigate('ProgramDetails', { programId });
  }
}

Programs.propTypes = {
  navigation: PropTypes.object,
};

Programs.defaultProps = {
};

export default Programs;
