import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import GeneralButton from '../../Buttons/GeneralButton';
import { UNIQUE } from '../../../constants/views/buttonTypes';
import { XLARGE } from '../../../constants/views/buttonSizes';
import styles from './style';

function LoginForm(props) {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(null),
    { t } = props;

  const onChangeEmail = email => setEmail(email.replace(/\s/g, ''));

  const onChangePassword = (password) => setPassword(password);

  const onLoginPress = () => {
    setLoading(true);
    props.onLoginPress(email, password)
      .then(() => {
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  const getError = () => {
    return error && (
      <Text style={styles.errorText}>
        {t([`errors.${error.type}`, `common:errors.${error.type}`], error.details)}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoFocus={true}
        autoCorrect={false}
        style={styles.textInput}
        placeholder={t('emailPlaceholder')}
        onChangeText={onChangeEmail}
        autoCapitalize='none'
        value={email}
      />
      <TextInput
        style={styles.textInput}
        placeholder={t('passwordPlaceholder')}
        secureTextEntry={true}
        onChangeText={onChangePassword}
        autoCapitalize='none'
        value={password}
      />
      <GeneralButton
        title={t('button')}
        titleStyle={styles.submitText}
        size={XLARGE}
        type={UNIQUE}
        onPress={onLoginPress}
        disabled={email == '' || password == ''}
        loading={loading}
      />
      {getError()}
    </View>
  );
}

LoginForm.propTypes = {
  t: PropTypes.func.isRequired,
  onLoginPress: PropTypes.func.isRequired
};

export default withTranslation('login')(LoginForm);
