/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { fonts, colors, spacings } from '../../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInput: {
    ...fonts.body,
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D5D5D5',
    textAlign: 'center',
    color: colors.primary,
    marginBottom: spacings.lg
  },
  submitText: {
    ...fonts.smallTitle,
    color: colors.surface
  },
  errorText: {
    ...fonts.smallTitle,
    color: colors.error,
    paddingTop: spacings.xs
  }
});
