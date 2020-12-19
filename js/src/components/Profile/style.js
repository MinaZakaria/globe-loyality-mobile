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
  points: {
    marginLeft: 40,
    marginTop: 20,
    fontSize: 40
  },
  challengesContainer: {
    paddingTop: spacings.xl
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  titleText: {
    margin: 20,
    ...fonts.title,
    alignSelf: 'center'
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
    ...fonts.midTitle,
    paddingVertical: spacings.xs,
    paddingHorizontal: spacings.xl
  }
});
