import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Popup from '../';
import CarefulButton from './Buttons/CarefulButton';
import PrimaryButton from './Buttons/PrimaryButton';

export class ConfirmPopup extends Component {
  render() {
    const {
      primaryTitle,
      onPrimaryPress,
      carefulTitle,
      onCarefulPress,
      ...rest
    } = this.props;
    return (
      <Popup
        {...rest}
        actions={[
          <CarefulButton title={carefulTitle} onPress={onCarefulPress} key='secondary' />,
          <PrimaryButton title={primaryTitle} onPress={onPrimaryPress} key='primary' />
        ]}
      >
      </Popup>
    );
  }
}

ConfirmPopup.propTypes = {
  primaryTitle: PropTypes.string.isRequired,
  onPrimaryPress: PropTypes.func.isRequired,
  carefulTitle: PropTypes.string.isRequired,
  onCarefulPress: PropTypes.func.isRequired,
};

export default ConfirmPopup;
