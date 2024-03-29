import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../../assets/images';

function ChallengeCard({ challenge, onChallengePress }) {

  const onPress = () => {
    onChallengePress(challenge.id, challenge.programId);
  };

  return (
    <TouchableOpacity style={styles.challenge} onPress={onPress}>
      <Text style={styles.challengeeName}>{challenge.name}</Text>
      <Text style={styles.challengeDescription}>{challenge.description}</Text>
      <Image source={images.programs[challenge.programId]} style={{ width: 250, height: 250 }} />
    </TouchableOpacity >
  );
}

ChallengeCard.propTypes = {
  challenge: PropTypes.object,
  onChallengePress: PropTypes.func
};

export default ChallengeCard;
