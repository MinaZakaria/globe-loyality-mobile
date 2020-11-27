import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../../../assets/images';

function SubmittionCard({ submittion, actions }) {
  const renderActions = () => {
    return (
      <View style={styles.actionsContainer}>
        {actions}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.challengeInfoContainer}>
        <View style={styles.challengeInfo}>
          <Text style={styles.title}>Challenge: {submittion.challenge.name}</Text>
          <Text style={styles.text} numberOfLines={3}>{submittion.challenge.description}</Text>
        </View>
        <Image source={images.programs[submittion.challenge.programId]} style={styles.programImage} />
      </View>

      <View style={styles.userInfoContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.title}>User: {submittion.user.name}</Text>
          <Text style={styles.text}>{submittion.user.email}</Text>
        </View>
        <Image source={images.profile} style={styles.submittionImage} />
      </View>
      <Text style={styles.pointsText}>{submittion.user.name} collects {submittion.points} points.</Text>
      {renderActions()}
    </View >
  );
}

SubmittionCard.propTypes = {
  submittion: PropTypes.object,
  actions: PropTypes.any
};

export default SubmittionCard;
