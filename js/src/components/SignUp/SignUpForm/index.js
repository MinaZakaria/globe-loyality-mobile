import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import Dropdown from '../../Dropdown';
import TextInput from '../../TextInput';
import GeneralButton from '../../Buttons/GeneralButton';

import { UNIQUE } from '../../../constants/views/buttonTypes';
import { XLARGE } from '../../../constants/views/buttonSizes';
import styles from './style';

function SignUpForm(props) {
  const [name, setName] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [passwordConfirmation, setPasswordConfirmation] = useState(''),
    [roleId, setRoleId] = useState(''),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(null),
    { t } = props;

  const onChangeName = name => setName(name);
  const onChangeEmail = email => setEmail(email.replace(/\s/g, ''));
  const onChangePassword = (password) => setPassword(password);
  const onChangePasswordConfirmation = (passwordConfirmation) => setPasswordConfirmation(passwordConfirmation);
  const onChangeRole = (role) => setRoleId(role.id);

  const onRegisterPress = () => {
    setLoading(true);
    props.onRegisterPress({ name, email, password, passwordConfirmation, roleId })
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
        {t([`store.errors.${error.type}`, `common:errors.${error.type}`], error.details)}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        label={t('namePlaceholder')}
        onChangeText={onChangeName}
        autoCapitalize='none'
        value={name}
        defaultValue={name}
      />
      <TextInput
        autoCorrect={false}
        label={t('emailPlaceholder')}
        onChangeText={onChangeEmail}
        autoCapitalize='none'
        value={email}
      />
      <TextInput
        label={t('passwordPlaceholder')}
        secureTextEntry={true}
        onChangeText={onChangePassword}
        autoCapitalize='none'
        value={password}
      />
      <TextInput
        label={t('passwordConfirmationPlaceholder')}
        secureTextEntry={true}
        onChangeText={onChangePasswordConfirmation}
        autoCapitalize='none'
        value={passwordConfirmation}
      />
      <Dropdown
        data={props.userRoles}
        label={t('rolesPlaceholder')}
        labelKey='name'
        onChange={onChangeRole}
        optional={false}
      />
      <GeneralButton
        bodyStyle={styles.submitButton}
        title={t('button')}
        titleStyle={styles.submitText}
        size={XLARGE}
        type={UNIQUE}
        onPress={onRegisterPress}
        disabled={name == '' || email == '' || email == '' || passwordConfirmation == '' || roleId == ''}
        loading={loading}
      />
      {getError()}
    </View>
  );
}

SignUpForm.propTypes = {
  t: PropTypes.func.isRequired,
  userRoles: PropTypes.array,
  onRegisterPress: PropTypes.func.isRequired
};

export default withTranslation('signup')(SignUpForm);
