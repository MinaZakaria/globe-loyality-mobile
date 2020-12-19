import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../assets/images';

import ChallengeCard from './ChallengeCard';

import ChallengeFormModal from './ChallengeFormModal';

function Challenges({ t, navigation, challenges, fetchChallenges, onCreateChallengePress, programs }) {
  useEffect(() => {
    const fetch = navigation.addListener('focus', () => {
      fetchChallenges();
    });
    return fetch;

  }, [navigation]);

  const renderChallenge = ({ item }) => {
    return <ChallengeCard challenge={item} onChallengePress={onPress} />;
  };

  const onPress = (challengeId, programId) => {
    navigation.navigate('SubmitChallenge', { challengeId, programId });
  };

  const onCreatePress = (challenge) => onCreateChallengePress(challenge);

  const challengesKeyExtractor = item => item.id.toString();

  const modalTrigger = ({ show, hide }) => {
    this.modalControls = {
      show, hide
    };
  };

  const showModal = () => {
    this.modalControls.show();
  };

  // const hideModal = () => {
  //   this.modalControls.hide();
  // };

  const renderCreateButton = () => {
    return (
      <TouchableOpacity
        style={styles.createButton}
        onPress={showModal}
      >
        <Image source={images.challenges.icon} />
        <Text>   Create a new Challenge...</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyComponent = () => {
    return (
      <Text style={styles.emptyText}>
        No Active Challenges
      </Text>
    );
  };

  const renderChallengeModal = () => {
    return (
      <ChallengeFormModal
        trigger={modalTrigger}
        onDone={onCreatePress}
        programs={programs}
      />
    );
  };


  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image source={images.menu} />
        </TouchableOpacity>
        <Text style={styles.containerTitle}>{t('title')}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
        >
          <Image source={images.profile} />
        </TouchableOpacity>
      </View>
    );
  };

  renderChallenge.propTypes = {
    item: PropTypes.object
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        ListHeaderComponent={renderCreateButton}
        ListEmptyComponent={renderEmptyComponent}
        data={challenges}
        renderItem={renderChallenge}
        keyExtractor={challengesKeyExtractor}
      />
      {renderChallengeModal()}
    </View>
  );
}

Challenges.propTypes = {
  t: PropTypes.func,
  navigation: PropTypes.object,
  fetchChallenges: PropTypes.func.isRequired,
  challenges: PropTypes.array,
  onCreateChallengePress: PropTypes.func,
  programs: PropTypes.array
};

Challenges.defaultProps = {
  challenges: [],
  programs: []
};

export default withTranslation('challenges')(Challenges);
