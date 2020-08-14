import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors, spacings } from '../../styles';

const { height } = Dimensions.get('window');
const margin = 15;

export default StyleSheet.create({
  outerContainer: {
    paddingTop: margin,
    paddingBottom: margin,
    justifyContent: 'center',
  },
  popupContainer: {
    borderRadius: 10,
    backgroundColor: colors.surface,
    padding: spacings.xxl,
    maxHeight: height - margin * 2
  },
  fullHeight: {
    minHeight: height - margin * 2
  },
  close: {
    right: -310,
    top: 5
  },
  back: {
    alignSelf: 'flex-start',
    position: 'absolute',
    left: -40
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    ...fonts.headline,
    color: colors.primary
  },
  warning: {
    color: colors.error
  },
  body: {
    paddingTop: spacings.xl
  },
  actions: {
    paddingTop: spacings.xl,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  large: {
    width: 350
  },
  small: {
    width: 300
  },
  xsmall: {
    width: 250
  },
  subTitleText: {
    ...fonts.headlineSub,
    color: colors.primarySub,
    textAlign: 'center'
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  errorText: {
    ...fonts.headlineSub,
    color: colors.error,
    textAlign: 'center'
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacings.lg
  }
});
