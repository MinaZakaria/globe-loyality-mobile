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
            <TouchableOpacity onPress={() => this.onProgramPress(2)}>
              <Image source={images.programs.globeChampionLogo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onProgramPress(5)}>
              <Image source={images.programs.elda7i7Logo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onProgramPress(1)}>
              <Image source={images.programs.abkarinoLogo} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.onProgramPress(3)}>
              <Image source={images.programs.globeIdolLogo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onProgramPress(4)}>
              <Image source={images.programs.selemElMagdLogo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onProgramPress(6)}>
              <Image source={images.programs.talentCatchingLogo} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.programsContainer}>
          <TouchableOpacity onPress={() => this.onProgramPress(7)}>
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
