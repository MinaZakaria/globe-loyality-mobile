import { StyleSheet } from 'react-native';
import { fonts, colors, spacings } from '../../../styles';

export default StyleSheet.create({
  contanier: {
    width: 141,
    height: 68,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: spacings.xl,
    paddingRight: spacings.xl
  },
  text: {
    ...fonts.headline,
    color: colors.primary,
    paddingLeft: spacings.xxs,
  }
});
