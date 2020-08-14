import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import styles from './style';
import images from '../../../assets/images';
import Spinner from '../Spinner';

const POPUP_SIZES = ['small', 'large', 'xsmall'];
const ERROR_POSITIONS = ['top', 'bottom'];

class Popup extends Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        {this.renderCloseButtons()}
        <View style={this.getPopupContainerStyle()}>
          {this.renderHeader()}
          {this.renderScrollableBody()}
          {this.renderFooter()}
        </View>
      </View >
    );
  }

  renderCloseButtons() {
    const { back, onClosePress, disableClose } = this.props;
    return !disableClose && (
      <TouchableOpacity onPress={onClosePress} activeOpacity={1} disabled={!onClosePress}>
        {back ? <Image style={styles.back} source={images.back2} /> :
          <Image style={styles.close} source={images.close} />}
      </TouchableOpacity>
    );
  }

  renderHeader() {
    const { title, errorPosition } = this.props;
    return (
      <View style={styles.titleContainer}>
        {title && <Text style={this.getTitleStyle()}>{title}</Text>}
        {this.renderSubTitle()}
        {errorPosition === 'top' && this.renderError()}
      </View>
    );
  }

  renderSubTitle() {
    const { subTitle } = this.props;
    if (subTitle) {
      return (
        <Text style={this.getSubTitleStyle()}>
          {subTitle}
        </Text>
      );
    }
  }

  renderScrollableBody() {
    const { children } = this.props;
    return (
      <ScrollView bounces={false} keyboardShouldPersistTaps='always'>
        <View>
          {children && < View style={styles.body}>{children}</View>}
        </View>
      </ScrollView>
    );
  }

  renderFooter() {
    const { isLoading, errorPosition } = this.props;
    return (
      <View>
        {errorPosition === 'bottom' && this.renderError()}
        {isLoading ? this.renderSpinner() : this.renderActions()}
      </View>
    );
  }

  renderError() {
    const { error } = this.props;
    if (error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      );
    }
  }

  renderSpinner() {
    return (
      <View style={styles.loading}>
        <Spinner image={images.loading2} />
      </View>
    );
  }

  renderActions() {
    const { actions } = this.props;
    return (
      <View style={this.getActionsStyle()}>
        {actions}
      </View>
    );
  }

  getTitleStyle() {
    const titleTextStyle = [styles.titleText];
    const { warning, titleStyle } = this.props;
    if (warning) {
      titleTextStyle.push(styles.warning);
    }
    if (titleStyle) {
      titleTextStyle.push(titleStyle);
    }
    return titleTextStyle;
  }

  getPopupContainerStyle() {
    const containerStyle = [styles.popupContainer];
    const { size, fullHeight } = this.props;
    if (POPUP_SIZES.includes(size)) {
      containerStyle.push(styles[`${size}`]);
    }
    if (fullHeight) {
      containerStyle.push(styles.fullHeight);
    }
    return containerStyle;
  }

  getActionsStyle() {
    const { actions } = this.props;
    const actionStyle = [styles.actions];

    if (!actions) {
      return [];
    }
    if (actions.length > 1) {
      actionStyle.push(styles.spaceBetween);
    }
    return actionStyle;
  }

  getSubTitleStyle() {
    const subTitleTextStyle = [styles.subTitleText];
    const { subTitleStyle } = this.props;
    if (subTitleStyle) {
      subTitleTextStyle.push(subTitleStyle);
    }
    return subTitleTextStyle;
  }
}

Popup.propTypes = {
  size: PropTypes.oneOf(['small', 'large', 'xsmall']),
  actions: PropTypes.node,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  warning: PropTypes.bool,
  children: PropTypes.node,
  onClosePress: PropTypes.func,
  disableClose: PropTypes.bool,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  errorPosition: PropTypes.oneOf(ERROR_POSITIONS),
  titleStyle: PropTypes.any,
  subTitleStyle: PropTypes.any,
  bodyStyle: PropTypes.any,
  back: PropTypes.bool,
  fullHeight: PropTypes.bool
};

Popup.defaultProps = {
  errorPosition: 'bottom',
  back: false
};
export default Popup;
