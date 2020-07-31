import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import images from '../../../../assets/images';
import styles from './style';

class BackButton extends Component {
  render() {
    const { onPress, t } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.contanier}
      >
        <Image source={images.arrows.back} />
        <Text style={styles.text}>{t('backButton')}</Text>
      </TouchableOpacity>
    );
  }

  onPress = () => this.props.onPress(this.props.onPressParam);
}

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  onPressParam: PropTypes.any,
};

BackButton.defaultProps = {
  onPress: () => { }
};

export default withTranslation('header')(BackButton);
