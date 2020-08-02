import { StyleSheet } from 'react-native';
import { fonts, colors, spacings } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface
  },
  containerTitle: {
    ...fonts.title,
    paddingTop: spacings.xxl,
    paddingBottom: spacings.lg,
    alignSelf: 'center'
  }
});
