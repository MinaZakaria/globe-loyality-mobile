import { StyleSheet } from 'react-native';
import { colors, spacings } from '../../styles';

export default StyleSheet.create({
  inputContainerStyle: {
    width: 250,
    marginVertical: spacings.xxs,
    height: 50,
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
  optional: {
    color: colors.primarySub,
    backgroundColor: colors.surface,
    bottom: spacings.lg
  },
  textfieldStyle: {
    color: colors.ink,
  },
  labelTextStyle: {
    position: 'absolute',
    left: '100%'
  }
});
