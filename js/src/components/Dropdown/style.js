import { StyleSheet } from 'react-native';
import { colors, spacings } from '../../styles';

export default StyleSheet.create({
  labelText: {
    backgroundColor: colors.surface,
    marginLeft: spacings.xs,
    paddingHorizontal: spacings.xxs * 2
  },
  inputContainer: {
    width: 250,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    paddingRight: spacings.lg
  },
  disabled: {
    borderColor: colors.disabled
  },
  error: {
    borderColor: colors.error
  },
  enabled: {
    borderColor: colors.primarySub
  },
  dropdown: {
    paddingLeft: spacings.lg
  },
  dropdownOffset: {
    top: 12,
    left: 16
  }
});
