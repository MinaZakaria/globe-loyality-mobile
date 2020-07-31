import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinValue: new Animated.Value(0)
    };

    this.animation = Animated.loop(
      Animated.timing(this.state.spinValue,
        {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true
        })
    );
  }

  render() {
    this.animation.start();
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <Animated.Image
        style={{ transform: [{ rotate: spin }] }}
        source={this.props.image}
      />
    );
  }
}

Spinner.propTypes = {
  image: PropTypes.any.isRequired,
};

export default Spinner;
