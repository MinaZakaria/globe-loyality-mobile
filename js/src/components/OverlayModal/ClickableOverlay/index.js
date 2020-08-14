import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import styles from './style';
import {
  MenuProvider
} from 'react-native-popup-menu';

class ClickableOverlay extends Component {
  render() {
    return (
      <Modal animationType='none' transparent={true} visible={this.props.visible}>
        <MenuProvider skipInstanceCheck>
          <TouchableOpacity
            style={styles.container}
            onPress={this.props.onPress}
            activeOpacity={1}
            disabled={this.props.disabled}
          >
            <TouchableOpacity activeOpacity={1}>
              {this.props.children}
            </TouchableOpacity>
          </TouchableOpacity>
        </MenuProvider>
      </Modal>
    );
  }
}

ClickableOverlay.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired
};

export default ClickableOverlay;
