import PropTypes from 'prop-types';
import React, { Component } from 'react';

import GeneralButton from '../../../GeneralButton';


class CarefulButton extends Component {
  render() {
    return (
      <GeneralButton
        title={this.props.title}
        onPress={this.props.onPress}
        type='careful'
        size='large'
      />
    );
  }
}

CarefulButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default CarefulButton;
