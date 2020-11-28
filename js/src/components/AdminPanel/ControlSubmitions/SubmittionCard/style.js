import { StyleSheet } from 'react-native';
import { fonts, colors, spacings } from '../../../../styles';

export default StyleSheet.create({
  container: {
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
    padding: spacings.sm,
  },
  title: {
    ...fonts.midTitle,
    paddingBottom: spacings.xxs
  },
  text: {
    ...fonts.body,
    paddingBottom: spacings.xxs
  },
  pointsText: {
    ...fonts.midTitle,
    alignSelf: 'center',
    paddingBottom: spacings.xxs
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  programImage: {
    height: 100,
    flex: 0.3
  },
  challengeInfoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between'
  },
  challengeInfo: {
    flexDirection: 'column',
    flex: 0.7,
  },
  userInfoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between'
  },
  userInfo: {
    flexDirection: 'column',
    flex: 0.7,
  },
  submittionImage: {
    height: 100,
    flex: 0.3
  },
  closeModalButton: {
    height: 60,
    backgroundColor: 'black',
    padding: 30,
  },
});
