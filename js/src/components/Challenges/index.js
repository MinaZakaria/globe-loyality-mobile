import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

import ChallengeCard from './ChallengeCard';

function Challenges({ t, navigation, challenges, fetchChallenges, onChallengePress }) {
  useEffect(() => {
    const fetch = navigation.addListener('focus', () => {
      fetchChallenges();
    });
    return fetch;

  }, [navigation]);

  const renderChallenge = ({ item }) => {
    return <ChallengeCard challenge={item} onChallengePress={onPress} t={t} />;
  };

  const onPress = id => onChallengePress(id);

  const challengesKeyExtractor = item => item.id.toString();

  renderChallenge.propTypes = {
    item: PropTypes.object
  };

  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>{t('title')}</Text>
      <FlatList
        data={challenges}
        renderItem={renderChallenge}
        keyExtractor={challengesKeyExtractor}
      />
    </View>
  );
}

Challenges.propTypes = {
  t: PropTypes.func,
  navigation: PropTypes.object,
  fetchChallenges: PropTypes.func.isRequired,
  challenges: PropTypes.array,
  onChallengePress: PropTypes.func
};

Challenges.defaultProps = {
  challenges: []
};

export default withTranslation('challenges')(Challenges);
