import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { LARGE, SMALL } from '../../../constants/views/buttonSizes';

import styles from './style';

function SideButton(props) {
  const { text, icon, disabled } = props;

  const getContainerStyle = () => {
    const { size } = props;

    if (size == SMALL) {
      return [styles.container, styles.smallButton];
    }
    return [styles.container, styles.bigButton];
  };

  const getTextStyle = () => {
    const { disabled, isActive, size } = props;

    if (!disabled) {
      return isActive ?
        styles.activeText
        : size == LARGE ? styles.normalText : styles.smallButtonText;
    }
    else {
      return size == LARGE ? styles.disabledText : styles.smallButtonText;
    }
  };

  const getImageStyle = () => {
    const { isActive, disabled } = props;
    return isActive ? styles.activeImage : disabled ? styles.disabledImage : styles.enabledImage;
  };

  const onPress = () => {
    const { onPress, onPressParam } = props;
    onPress(onPressParam);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={1}
    >
      <View style={getContainerStyle()}>
        <Image
          source={icon}
          style={getImageStyle()}
        />
        <Text style={getTextStyle()}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

SideButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  size: PropTypes.oneOf([LARGE, SMALL]),
  onPressParam: PropTypes.any
};

SideButton.defaultProps = {
  onPress: () => { },
  size: LARGE
};

export default SideButton;
