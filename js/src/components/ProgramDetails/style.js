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
    alignSelf: 'center',
    marginLeft: 75
  },
  header: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  programsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    alignSelf: 'center',
    width: 400,
    height: 400
  },
  emptyText: {
    ...fonts.midTitle,
    alignSelf: 'center',
    paddingTop: spacings.xxl,
  }
});
