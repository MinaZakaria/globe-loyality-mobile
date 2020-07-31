/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { fonts, colors, spacings } from '../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  submitText: {
    ...fonts.smallTitle,
    color: colors.surface
  },
  errorText: {
    ...fonts.smallTitle,
    color: colors.error,
    paddingTop: spacings.xs
  },
  submitButton: {
    marginTop: 20,
  }
});
