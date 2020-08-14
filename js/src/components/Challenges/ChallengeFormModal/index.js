/* eslint-disable security/detect-object-injection */
import React, { Component } from 'react';
import { View } from 'react-native';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Popup from '../../Popup';
import Dropdown from '../../Dropdown';
import TextInput from '../../TextInput';
import OverlayModal from '../../OverlayModal';
import GeneralButton from '../../Buttons/GeneralButton';

import { UNIQUE } from '../../../constants/views/buttonTypes';
import { XLARGE } from '../../../constants/views/buttonSizes';

import { INPUT_VALIDATION } from '../../../constants/ApiErrors';

import styles from './style';

class ChallengeFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState();
    this.modalControls = {
      show: () => { },
      hide: () => { }
    };
  }

  defaultState = () => {
    const { challenge } = this.props;

    return {
      error: null,
      loading: false,
      challenge: {
        id: challenge.id,
        name: challenge.name,
        description: challenge.description,
        programId: challenge.programId
      }
    };
  }

  render() {
    const { t, programs } = this.props;

    return (
      <OverlayModal
        trigger={this.modalTrigger}>
        <Popup
          actions={this.renderActions()}
          onClosePress={this.hideModal}
          isLoading={this.state.loading}
          error={this.getError()}
          title='Add new Challenge'
          size='large'
        >
          <View>
            <Dropdown
              data={programs}
              label={t('create.programsPlaceholder')}
              labelKey='name'
              onChange={this.onChangeProgram}
              optional={false}
            />
            <TextInput
              containerStyle={styles.nameContainerStyle}
              autoCorrect={false}
              label={t('create.namePlaceholder')}
              onChangeText={this.onChangeName}
              autoCapitalize='none'
              maxLength={25}
              defaultValue={this.state.challenge.name}
              error={this.getFieldError('name')}
            />
            <TextInput
              containerStyle={styles.descriptionContainerStyle}
              autoCorrect={false}
              label={t('create.descriptionPlaceholder')}
              onChangeText={this.onChangeDescription}
              autoCapitalize='none'
              multiline={true}
              maxLength={300}
              defaultValue={this.state.challenge.description}
              error={this.getFieldError('description')}
            />
          </View>
        </Popup>
      </OverlayModal>
    );
  }

  onChangeName = name => this.setState({ challenge: { ...this.state.challenge, name } });
  onChangeDescription = description => this.setState({ challenge: { ...this.state.challenge, description } });
  onChangeProgram = program => this.setState({ challenge: { ...this.state.challenge, programId: program.id } });

  modalTrigger = ({ show, hide }) => {
    this.modalControls = {
      show, hide
    };
    this.props.trigger({
      show: this.showModal,
      hide
    });
  }

  showModal = () => {
    this.setState(this.defaultState(), () => this.modalControls.show());
  }

  hideModal = () => {
    this.modalControls.hide();
  }

  renderActions() {
    const { t } = this.props;
    const { challenge, loading } = this.state;
    let buttons = [];
    buttons.push(
      <View style={styles.buttonContainer}>
        <GeneralButton
          bodyStyle={styles.submitButton}
          title={t('create.button')}
          titleStyle={styles.submitText}
          size={XLARGE}
          type={UNIQUE}
          onPress={() => this.onDonePress(challenge)}
          disabled={challenge.name == '' || challenge.description == '' || challenge.programId == ''}
          loading={loading}
        />
      </View>
    );
    return buttons;
  }

  /** Callbacks */
  onDonePress = (challenge) => {
    this.setState({ loading: true, error: null });

    this.props.onDone(challenge)
      .then(() => {
        this.setState({ loading: false, error: null });
        this.hideModal();
      })
      .catch(error => {
        this.setState({ loading: false, error });
      });
  }

  /** Handling Errors */
  getError() {
    const { t } = this.props;
    const { error } = this.state;
    if (error && error.type != INPUT_VALIDATION) {
      return t(`common:errors.${error.type}`, error.details);
    }
  }

  getFieldError(field) {
    const { t } = this.props;
    const { error } = this.state;

    if (error && error.type == INPUT_VALIDATION && error.details[field]) {
      const { type, ...params } = error.details[field][0];
      return t(`common:errors.validations.${type}`,
        {
          entity_field: t(`common:validation_fields.challenge_${field}`),
          ...params
        });
    }
  }
}

ChallengeFormModal.propTypes = {
  t: PropTypes.func.isRequired,
  challenge: PropTypes.object,
  onDone: PropTypes.func.isRequired,
  trigger: PropTypes.func,
  programs: PropTypes.array

};

ChallengeFormModal.defaultProps = {
  challenge: {
    name: '',
    description: '',
    programId: null,
  }
};

export default withTranslation('challenges')(ChallengeFormModal);
