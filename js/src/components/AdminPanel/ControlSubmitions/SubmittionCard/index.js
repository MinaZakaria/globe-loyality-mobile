import React, { useState } from 'react';
import { Text, View, Image, Modal, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../../../assets/images';

function SubmittionCard({ submittion, actions }) {
  const [showModal, setShowModal] = useState(false);

  const renderActions = () => {
    return (
      <View style={styles.actionsContainer}>
        {actions}
      </View>
    );
  };

  const modalImages = [{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
  }];

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
        <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
          <Image source={images.testSubmittion} style={styles.submittionImage} />
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.pointsText}>{submittion.user.name} collects {submittion.points} points.</Text>
      {renderActions()}
      <Modal visible={showModal} transparent={true}>
        <TouchableHighlight
          style={styles.closeModalButton}
          onPress={() => { setShowModal(!showModal); }}
        >
          <Image source={images.close} />
        </TouchableHighlight>
        <ImageViewer imageUrls={modalImages} />
      </Modal>
    </View >
  );
}

SubmittionCard.propTypes = {
  submittion: PropTypes.object,
  actions: PropTypes.any
};

export default SubmittionCard;
