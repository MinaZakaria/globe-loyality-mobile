import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Ribbon from '../Ribbon';
import styles from './style';

class RibbonWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ribbons: [],
      triggers: {},
      counter: 0
    };
    if (props.trigger) {
      props.trigger(
        this.show.bind(this),
        this.dismiss.bind(this)
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.ribbons.map(ribbon => ribbon.component)}
      </View>
    );
  }

  show({ type, message, dismissable = false, timeout = 0, onRetryPress }) {
    const ribbons = [...this.state.ribbons];
    const uid = this.state.counter + 1;
    ribbons.unshift({
      uid,
      component: this.ribbonComponent(type, message, onRetryPress, dismissable, timeout, uid)
    });
    this.setState({ ribbons, counter: uid });
    return uid;
  }

  ribbonComponent(type, message, onRetryPress, dismissable, timeout, uid) {
    return (
      <Ribbon
        key={`Ribbon${uid}`}
        type={type}
        text={message}
        onRetryPress={onRetryPress ? onRetryPress(uid) : undefined}
        onDismiss={dismissable ? this.remove.bind(this, uid) : undefined}
        timeout={timeout}
        trigger={(easeOut) => {
          const triggers = { ...this.state.triggers };
          triggers[`${uid}`] = easeOut;
          this.setState({ triggers });
        }}
      />
    );
  }

  dismiss(uid) {
    const triggers = this.state.triggers;
    (triggers[`${uid}`]) && triggers[`${uid}`](() => this.remove(uid));
  }

  remove(uid) {
    const ribbons = this.state.ribbons.filter((ribbon) => ribbon.uid !== uid);
    this.setState({ ribbons });
    if (this.props.onDismissPress)
      this.props.onDismissPress(uid);
  }
}

RibbonWrapper.propTypes = {
  trigger: PropTypes.func,
  onDismissPress: PropTypes.func
};

export default RibbonWrapper;
