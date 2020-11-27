import { StyleSheet } from 'react-native';
import { colors, fonts, spacings } from '../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: spacings.xs
  },
  button: {
    alignItems: 'center',
    marginLeft: spacings.lg,
    marginTop: spacings.xs,
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.surface
  },
  text: {
    ...fonts.midTitle,
    color: colors.primarySub,
    fontSize: spacings.md,
    lineHeight: spacings.xl
  },
  image: {
    width: 74,
    height: 74,
    borderRadius: spacings.xxs,
    color: colors.primarySub
  },
  iconImage: {
    width: spacings.xl,
    height: spacings.xl
  }
});
