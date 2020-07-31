import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown as DropdownComponent } from 'react-native-material-dropdown';
import styles from './style';
import { colors } from '../../styles';

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.emptyOption = { [props.valueKey]: null, [props.labelKey]: '' };
  }

  render() {
    const { data, optional, ...restProps } = this.props;
    return (
      <DropdownComponent
        data={optional ? this.data() : data}
        errorColor={colors.error}
        disabledLineWidth={0}
        disabledLineType='solid'
        baseColor={colors.primarySub}
        rippleOpacity={0}
        lineWidth={1}
        labelTextStyle={styles.labelText}
        inputContainerStyle={this.getContainerStyle()}
        style={styles.dropdown}
        dropdownOffset={styles.dropdownOffset}
        valueExtractor={this.valueExtractor}
        labelExtractor={this.labelExtractor}
        onChangeText={this.props.onChange}
        {...restProps}
      />
    );
  }

  data = () => {
    const { data } = this.props;
    let hybridData = [...data];
    hybridData.unshift(this.emptyOption);
    return hybridData;
  }

  valueExtractor = item => item;

  labelExtractor = item => item[this.props.labelKey];

  getContainerStyle() {
    const inputContainer = [styles.inputContainer];
    const { disabled, error } = this.props;
    if (disabled) {
      inputContainer.push(styles.disabled);
    } else if (error) {
      inputContainer.push(styles.error);
    } else {
      inputContainer.push(styles.enabled);
    }

    return inputContainer;
  }
}

Dropdown.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string.isRequired,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  baseColor: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  labelTextStyle: PropTypes.object,
  optional: PropTypes.bool
};

Dropdown.defaultProps = {
  data: [],
  disabled: false,
  label: '',
  value: '',
  optional: false,
  valueKey: ''
};
export default Dropdown;
