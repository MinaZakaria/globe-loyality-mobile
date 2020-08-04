import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import styles from './style';
import TextInput from '../../TextInput';
import Dropdown from '../../Dropdown';
import GeneralButton from '../../Buttons/GeneralButton';

import { UNIQUE } from '../../../constants/views/buttonTypes';
import { XLARGE } from '../../../constants/views/buttonSizes';

function CreateChallenge({ onCreateChallengePress, t, programs }) {

  const [name, setName] = useState(''),
    [description, setDescription] = useState(''),
    [programId, setProgramId] = useState(''),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(null);

  const getError = () => {
    return error && (
      <Text style={styles.errorText}>
        {t([`errors.${error.type}`, `common:errors.${error.type}`], error.details)}
      </Text>
    );
  };

  const onChangeName = name => setName(name);
  const onChangeDescription = description => setDescription(description);
  const onChangeProgram = (program) => setProgramId(program.id);


  const onCreatePress = () => {
    setLoading(true);
    onCreateChallengePress({ name, description, programId })
      .then(() => {
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  return (
    <View style={styles.container}>
      <Dropdown
        data={programs}
        label={t('create.programsPlaceholder')}
        labelKey='name'
        onChange={onChangeProgram}
        optional={false}
      />
      <TextInput
        containerStyle={styles.nameContainerStyle}
        autoCorrect={false}
        label={t('create.namePlaceholder')}
        onChangeText={onChangeName}
        autoCapitalize='none'
        maxLength={25}
        value={name}
        defaultValue={name}
      />
      <TextInput
        containerStyle={styles.descriptionContainerStyle}
        autoCorrect={false}
        label={t('create.descriptionPlaceholder')}
        onChangeText={onChangeDescription}
        autoCapitalize='none'
        multiline={true}
        maxLength={150}
        value={description}
        defaultValue={description}
      />
      <View style={styles.buttonContainer}>
        <GeneralButton
          bodyStyle={styles.submitButton}
          title={t('create.button')}
          titleStyle={styles.submitText}
          size={XLARGE}
          type={UNIQUE}
          onPress={onCreatePress}
          disabled={name == '' || description == '' || programId}
          loading={loading}
        />
      </View>
      {getError()}
    </View >
  );
}

CreateChallenge.propTypes = {
  onCreateChallengePress: PropTypes.func,
  t: PropTypes.func.isRequired,
  programs: PropTypes.array
};

export default withTranslation('challenges')(CreateChallenge);
