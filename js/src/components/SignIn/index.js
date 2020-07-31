import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import images from '../../../assets/images';
import LoginForm from './LoginForm';
import styles from './style';

function SignIn(props) {
  const { t, onLoginPress, navigation } = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Image source={images.logo} />
        <Text style={styles.title}>{t('title')}</Text>
        <LoginForm
          onLoginPress={onLoginPress}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.title}>{t('createAccount')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

SignIn.propTypes = {
  t: PropTypes.func,
  navigation: PropTypes.object,
  onLoginPress: PropTypes.func.isRequired
};

export default withTranslation('login')(SignIn);
