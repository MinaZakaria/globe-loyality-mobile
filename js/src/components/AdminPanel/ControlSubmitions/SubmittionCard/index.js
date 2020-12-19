import React, { useState } from 'react';
import { Text, View, Image, Modal, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../../../assets/images';
import TextInput from '../../../TextInput';
import { NEW, APPROVED, REJECTED, DECLINED } from '../../../../constants/ChallengeSubmittionStatueses';

function SubmittionCard({ submittion, actions, onChangeComment, profile }) {
  const [showModal, setShowModal] = useState(false);

  const renderUserInfo = () => {
    if (profile) {
      return;
    }
    return (
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.title}>User: {submittion.user.name}</Text>
          <Text style={styles.text}>{submittion.user.email}</Text>
        </View>
        {submittion.image ? <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
          <Image source={images.testSubmittion} style={styles.submittionImage} />
        </TouchableWithoutFeedback> : undefined}
      </View>
    );
  };

  const renderChallengeInfo = () => {
    return (
      <View style={styles.challengeInfoContainer}>
        <View style={styles.challengeInfo}>
          <Text style={styles.title}>Challenge: {submittion.challenge.name}</Text>
          <Text style={styles.text} numberOfLines={3}>{submittion.challenge.description}</Text>
        </View>
        <Image source={images.programs[submittion.challenge.programId]} style={styles.programImage} />
      </View>
    );
  };

  const renderPointsStatus = () => {
    let image = '';
    let imageStyle = {};
    let text = profile ? 'You' : submittion.user.name;

    switch (submittion.statusId) {
      case NEW:
        image = images.pending;
        imageStyle = styles.newImage;
        text = `${text} will collect ${submittion.points} points. pending approval`;
        break;

      case APPROVED:
        image = images.approve;
        imageStyle = styles.approveImage;
        text = `${text} collected ${submittion.points} points.`;
        break;

      case REJECTED:
        image = images.reject;
        imageStyle = styles.rejectImage;
        text = `${text} didn't collect ${submittion.points} points.`;
        text = profile ? `${text}${'\n'}You couldn't submit again.` : `${text}${'\n'}He couldn't submit again.`;
        break;

      case DECLINED:
        image = images.reject;
        imageStyle = styles.declineImage;
        text = `${text} didn't collect ${submittion.points} points.`;
        text = profile ? `${text}${'\n'}You could submit again.` : `${text}${'\n'}He could submit again.`;
        break;
    }
    return (
      <View style={styles.pointsStatusContainer}>
        <Image source={image} style={imageStyle} />
        <Text style={styles.pointsText}>{text}</Text>
      </View>
    );
  };

  const renderActions = () => {
    return (
      <View style={styles.actionsContainer}>
        {actions}
      </View>
    );
  };

  const renderComment = () => {
    if (!profile && submittion.statusId === NEW) {
      return (
        <TextInput
          containerStyle={styles.commentContainerStyle}
          autoCorrect={false}
          label='Write comment...'
          onChangeText={onChangeComment}
          autoCapitalize='none'
          multiline={true}
          maxLength={300}
        />
      );
    }
    return submittion.comment ? (
      <Text style={styles.title}>
        Comment: {submittion.comment}
      </Text>
    ) : undefined;
  };

  const modalImages = [{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
  }];

  return (
    <View style={styles.container}>
      {renderChallengeInfo()}
      {renderUserInfo()}
      {renderPointsStatus()}
      {renderComment()}
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
  actions: PropTypes.any,
  onChangeComment: PropTypes.func,
  profile: PropTypes.boolean,
};

export default SubmittionCard;
