import { StyleSheet } from 'react-native';
import { fonts, colors, spacings } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: colors.background
  },
  innerContainer: {
    flex: 0.8,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 29,
    padding: spacings.xxl,
    backgroundColor: colors.surface
  },
  title: {
    ...fonts.headline,
    marginTop: spacings.xl,
    marginBottom: spacings.xl,
    color: colors.primary
  }
});
