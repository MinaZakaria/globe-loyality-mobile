import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

function ChallengeCard({ challenge, onChallengePress }) {

  const onPress = () => onChallengePress(challenge.id);

  return (
    <TouchableOpacity style={styles.store} onPress={onPress}>
      <Text style={styles.storeName}>{challenge.name}</Text>
      <Text style={styles.storeLocation}>{challenge.description}</Text>
    </TouchableOpacity >
  );
}

ChallengeCard.propTypes = {
  challenge: PropTypes.object,
  onChallengePress: PropTypes.func
};

export default ChallengeCard;
