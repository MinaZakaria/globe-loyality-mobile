import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types';

import { INFO, ERROR, WARNING } from '../../constants/views/ribbonTypes';
import styles from './style';

class Ribbon extends Component {

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    props.trigger(
      this.easeOut.bind(this)
    );
  }

  componentDidMount() {
    this.easeIn();
    if (this.props.timeout > 0 && this.props.onDismiss) {
      this.dismissOnTimeout(() => this.easeOut(this.props.onDismiss), this.props.timeout);
    }
  }

  dismissOnTimeout(fn, timeout) {
    setTimeout(fn, timeout * 1000);
  }

  render() {
    const bottom = this.interpolate();
    const { text, onRetryPress, onDismiss } = this.props;
    return (
      <Animated.View style={[this.getStyle(), { bottom }]} activeOpacity={1}>
        <View style={styles.left}>
          <Text style={styles.title}>{text}</Text>
        </View>
        <View style={styles.right}>
          {onRetryPress &&
            this.renderButton(onRetryPress, 'retry')}
          {onDismiss &&
            this.renderButton(() => this.easeOut(onDismiss), 'dismiss')}
        </View>
      </Animated.View>
    );
  }

  getStyle() {
    switch (this.props.type) {
      case INFO:
        return styles.info;
      case ERROR:
        return styles.error;
      case WARNING:
        return styles.warning;
    }
  }

  renderButton(onPress, text) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.title}>{text}</Text>
      </TouchableOpacity>
    );
  }

  easeIn() {
    this.animate(1);
  }

  easeOut(callback) {
    this.animate(0, callback);
  }

  animate(toValue, callback) {
    Animated.timing(
      this.animatedValue,
      {
        toValue,
        duration: 250,
      }
    ).start(callback);
  }

  interpolate() {
    return this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, 0]
    });
  }
}

Ribbon.propTypes = {
  text: PropTypes.string.isRequired,
  onRetryPress: PropTypes.func,
  onDismiss: PropTypes.func,
  timeout: PropTypes.number,
  type: PropTypes.oneOf([INFO, ERROR, WARNING]).isRequired,
  trigger: PropTypes.func,
};

export default Ribbon;
