import { StyleSheet } from 'react-native';
import { fonts, colors, spacings } from '../../styles';

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
  mainInfo: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 40
  },
  mainText: {
    marginLeft: 15,
    marginTop: 10
  },
});
