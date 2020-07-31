import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../../styles';

const text = {
  ...fonts.body
};

export default StyleSheet.create({
  container: {
    width: 170,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeText: {
    ...text,
    color: colors.secondary,
  },
  normalText: {
    ...text,
    color: colors.primarySub,
  },
  disabledText: {
    ...text,
    color: colors.inkSub,
  },
  smallButton: {
    flexDirection: 'row',
    height: 100
  },
  smallButtonText: {
    ...text,
    fontSize: 18,
    paddingLeft: 5
  },
  bigButton: {
    height: 135
  },
  disabledImage: {
    tintColor: colors.disabled,
  },
  enabledImage: {
    tintColor: colors.primary,
  },
  activeImage: {
    tintColor: colors.secondary
  }
});
