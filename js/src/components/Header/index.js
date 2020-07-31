import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';
import BackButton from '../Buttons/BackButton';

class Header extends Component {
  render() {
    const { onBackPress, children } = this.props;
    return (
      <View style={styles.contanier}>
        {onBackPress && <BackButton onPress={onBackPress} />}
        <View style={styles.childrenContainer}>
          {children}
        </View>
      </View>
    );
  }
}

Header.propTypes = {
  onBackPress: PropTypes.func,
  // containerStyle: PropTypes.object,
  children: PropTypes.any
};

export default Header;
