import { StyleSheet } from 'react-native';
import { fonts, colors, spacings } from '../../../styles';

export default StyleSheet.create({
  container: {
    shadowColor: colors.inkPrimary,
    shadowOffset: {
      width: -3,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: colors.surface,
    borderRadius: 5,
    margin: spacings.sm,
    padding: spacings.sm,
  },
  challengeName: {
    ...fonts.headline,
    paddingBottom: spacings.xxs
  },
  challengeDescription: {
    ...fonts.medium,
    paddingBottom: spacings.xs,
    color: colors.inkSub
  },
  descriptionContainerStyle: {
    height: 200,
    // width: 250,
    marginBottom: 20
  },
  nameContainerStyle: {
    // width: 250,
  },
  buttonContainer: {
    alignItems: 'center'
  },
  errorText: {
    ...fonts.smallTitle,
    color: colors.error,
    paddingVertical: spacings.xs,
    alignSelf: 'center'
  }
});
