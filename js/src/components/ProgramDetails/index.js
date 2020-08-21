import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../assets/images';

class ProgramDetails extends Component {

  renderHeader = () => {
    const { navigation, programId } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image source={images.arrows.back} />
        </TouchableOpacity>
        <Text style={styles.containerTitle}>Program {programId}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <Text style={{ alignSelf: 'center', marginTop: 100 }}>Program Details Screen</Text>
      </View>
    );
  }
}

ProgramDetails.propTypes = {
  navigation: PropTypes.object,
  programId: PropTypes.number
};

ProgramDetails.defaultProps = {
};

export default ProgramDetails;
