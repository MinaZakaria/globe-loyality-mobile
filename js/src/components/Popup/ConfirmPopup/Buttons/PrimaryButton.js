import PropTypes from 'prop-types';
import React, { Component } from 'react';

import GeneralButton from '../../../GeneralButton';


class PrimaryButton extends Component {
  render() {
    return (
      <GeneralButton
        title={this.props.title}
        onPress={this.props.onPress}
        size='large'
      />
    );
  }
}

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default PrimaryButton;
