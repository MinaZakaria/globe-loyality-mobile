import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ClickableOverlay from './ClickableOverlay';

class OverlayModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    props.trigger({
      show: this.show,
      hide: this.hide
    });
  }

  show = () => {
    this.setState({ visible: true });
  }

  hide = () => {
    this.onCloseRequest();
  }

  render() {
    return (
      <ClickableOverlay visible={this.state.visible} onPress={this.onPress}
        disabled={false}>
        {this.props.children}
      </ClickableOverlay>
    );
  }

  onPress = () => {
    this.props.onPress();
    if (this.props.hideOnPress) {
      this.onCloseRequest();
    }
  }

  onCloseRequest() {
    this.setState({ visible: false });
    this.props.onHide();
  }
}

OverlayModal.propTypes = {
  trigger: PropTypes.func.isRequired,
  triggerController: PropTypes.func,
  onHide: PropTypes.func,
  onPress: PropTypes.func,
  hideOnPress: PropTypes.bool,
  children: PropTypes.node
};

OverlayModal.defaultProps = {
  onHide: () => { },
  onPress: () => { },
  hideOnPress: true,
};

export default OverlayModal;
