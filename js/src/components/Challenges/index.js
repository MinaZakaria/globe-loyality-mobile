import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../assets/images';

import ChallengeCard from './ChallengeCard';

import ChallengeFormModal from './ChallengeFormModal';

function Challenges({ t, navigation, challenges, fetchChallenges, onChallengePress, onCreateChallengePress }) {
  useEffect(() => {
    const fetch = navigation.addListener('focus', () => {
      fetchChallenges();
    });
    return fetch;

  }, [navigation]);

  const programs = [
    { id: 1, name: '3abkarino' },
    { id: 2, name: 'Globe Champion' },
    { id: 3, name: 'Globe Idol' },
    { id: 4, name: 'Selm El-Magd' },
    { id: 5, name: 'El-Da7ee7' },
    { id: 6, name: 'Talent Catching' },
    { id: 7, name: 'Globe Olympics' },
    { id: 8, name: 'General' },
  ];

  const renderChallenge = ({ item }) => {
    return <ChallengeCard challenge={item} onChallengePress={onPress} />;
  };

  const onPress = id => onChallengePress(id);
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
  onChallengePress: PropTypes.func,
  onCreateChallengePress: PropTypes.func,
};

Challenges.defaultProps = {
  challenges: []
};

export default withTranslation('challenges')(Challenges);
