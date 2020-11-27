import { StyleSheet } from 'react-native';
import { fonts, colors, spacings } from '../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  containerTitle: {
    ...fonts.title,
    paddingTop: spacings.xl,
    paddingBottom: spacings.lg,
    alignSelf: 'center'
  },
  header: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  challengeInfo: {
    marginTop: 50,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    ...fonts.smallTitle,
    color: colors.error,
    paddingVertical: spacings.md,
  },
  successText: {
    ...fonts.smallTitle,
    color: colors.secondary,
    paddingVertical: spacings.md,
  }
});
