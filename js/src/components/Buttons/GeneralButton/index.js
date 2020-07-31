import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import PropTypes from 'prop-types';

import images from '../../../../assets/images';
import { FRIENDLY, CAREFUL, PRIMARY, UNIQUE, DISABLED } from '../../../constants/views/buttonTypes';
import { XLARGE, LARGE, SMALL } from '../../../constants/views/buttonSizes';
import Spinner from '../../Spinner';
import styles from './style';

class GeneralButton extends Component {

  shouldComponentUpdate(nextProps) {
    return !(this.props.loading && nextProps.loading);
  }

  render() {
    const { title, icon, loading, disabled } = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={this.onPress}
        style={[this.getBodyStyle(), this.props.bodyStyle]}
      >
        {loading && this.renderSpinner()}
        {!loading && icon &&
          <Image
            style={[this.getIconStyle(), this.props.iconStyle]}
            source={icon} />}
        {!loading &&
          <View>
            <Text
              style={[this.getTitleStyle(), this.props.titleStyle]}
            >
              {title}
            </Text>
          </View>
        }
      </TouchableOpacity>
    );
  }

  renderSpinner() {
    return (
      <View style={styles.loading}>
        <Spinner image={images.loading2} />
      </View>
    );
  }

  getBodyStyle() {
    const { disabled } = this.props;
    const sizeStyle = this.getSizeStyle();
    const typeStyle = this.getTypeStyle();
    if (disabled) {
      return [styles.disabledBody, sizeStyle];
    }
    return [typeStyle, sizeStyle];
  }

  getTypeStyle() {
    const { type } = this.props;
    switch (type) {
      case FRIENDLY:
        return styles.friendlyBody;
      case PRIMARY:
        return styles.primaryBody;
      case UNIQUE:
        return styles.uniqueBody;
      case CAREFUL:
        return styles.carefulBody;
      case DISABLED:
        return styles.disabledBody;
      default:
        return styles.defaultBody;
    }
  }

  getSizeStyle() {
    const { size } = this.props;
    switch (size) {
      case XLARGE:
        return styles.fixedWidthXLarge;
      case LARGE:
        return styles.fixedWidthLarge;
      case SMALL:
        return styles.fixedWidthSmall;
      default:
        return null;
    }
  }

  getTitleStyle() {
    const { type, disabled } = this.props;
    const types = [PRIMARY, UNIQUE, FRIENDLY, CAREFUL];

    if (disabled || type == DISABLED) {
      return styles.disabledTitle;
    }
    if (types.includes(type)) {
      return styles.title;
    }
    return styles.defaultTitle;
  }

  getIconStyle() {
    const { activeIcon, disabled } = this.props;
    if (disabled) {
      return styles.disabledIcon;
    } else if (activeIcon) {
      return styles.activeIcon;
    }
    return styles.defaultIcon;
  }

  onPress = () => this.props.onPress(this.props.onPressParam);
}

GeneralButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.any,
  onPressParam: PropTypes.any,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  activeIcon: PropTypes.bool,
  type: PropTypes.oneOf([FRIENDLY, CAREFUL, PRIMARY, UNIQUE, DISABLED]),
  size: PropTypes.oneOf([SMALL, LARGE, XLARGE]),
  bodyStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  iconStyle: PropTypes.object
};

GeneralButton.defaultProps = {
  onPress: () => { },
  loading: false,
  disabled: false,
  activeIcon: false
};

export default GeneralButton;
