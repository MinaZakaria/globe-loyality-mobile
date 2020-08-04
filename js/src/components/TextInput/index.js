import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import { OutlinedTextField } from 'react-native-material-textfield';
import { colors } from '../../styles';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.data = '';
  }

  render() {
    return (
      <OutlinedTextField
        {...this.props}
        labelTextStyle={[this.props.labelTextStyle, styles.labelTextStyle]}
        ref={this.textFieldRef}
        renderRightAccessory={this.renderOptional.bind(this)}
        tintColor={colors.primarySub}
        style={styles.textfieldStyle}
        activeLineWidth={1}
        disabledLineType='solid'
        errorColor={colors.error}
        inputContainerStyle={[this.getContainerStyle(), this.props.containerStyle]}
        lineWidth={1}
        baseColor={this.props.disabled ? colors.disabled : colors.primarySub}
        disabledLineWidth={0}
        onChangeText={this.onChangeText.bind(this)}
      />
    );
  }

  blur() {
    this.textField.blur();
  }

  setValue(value) {
    this.textField.setValue(value);
  }

  textFieldRef = (r) => {
    this.textField = r;
  }

  renderOptional() {
    if (this.props.optional && !this.data) {
      return <Text style={styles.optional}>optional</Text>;
    }
  }

  onChangeText(data) {
    this.data = data;
    this.props.onChangeText(data);
  }

  getContainerStyle() {
    const inputContainerStyle = [styles.inputContainerStyle];
    const { disabled, error } = this.props;
    if (disabled) {
      return [inputContainerStyle, styles.disabled];
    }
    if (error) {
      return [inputContainerStyle, styles.error];
    }
    return [inputContainerStyle, styles.enabled];
  }
}

TextInput.defaultProps = {
  onChangeText: () => { },
  optional: false,
  disabled: false,
  error: '',
  editable: true
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  onChangeText: PropTypes.func,
  editable: PropTypes.bool,
  labelTextStyle: PropTypes.object,
  containerStyle: PropTypes.object
};

export default TextInput;
