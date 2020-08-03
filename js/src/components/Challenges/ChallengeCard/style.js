import { StyleSheet } from 'react-native';
import { fonts, colors, spacings } from '../../../styles';

export default StyleSheet.create({
  challenge: {
    shadowColor: colors.inkPrimary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: colors.surface,
    borderRadius: 5,
    margin: spacings.sm,
    padding: spacings.sm
  },
  challengeName: {
    ...fonts.headline,
    paddingBottom: spacings.xxs
  },
  challengeDescription: {
    ...fonts.medium,
    paddingBottom: spacings.xs,
    color: colors.inkSub
  }
});
