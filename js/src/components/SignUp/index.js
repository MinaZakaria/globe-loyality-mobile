import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import Header from '../Header';
import SignUpForm from './SignUpForm';

import styles from './style';

function SignUp(props) {
  const { t, onRegisterPress, navigation, userRoles } = props;
  return (
    <View style={styles.container}>
      <Header
        onBackPress={() => navigation.goBack()}
      >
        <Text style={styles.title}>{t('title')}</Text>
      </Header>
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <SignUpForm
            userRoles={userRoles}
            onRegisterPress={onRegisterPress}
          />

        </View>
      </View>
    </View>
  );
}

SignUp.propTypes = {
  t: PropTypes.func,
  navigation: PropTypes.object,
  userRoles: PropTypes.array,
  onRegisterPress: PropTypes.func.isRequired
};

export default withTranslation('signup')(SignUp);
