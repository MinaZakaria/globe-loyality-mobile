import { StyleSheet } from 'react-native';
import { fonts, colors, spacings } from '../../styles';

const container = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: colors.error,
  maxHeight: 55,
  marginTop: spacings.xxs * 2
};

export default StyleSheet.create({
  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxHeight: 55,
    paddingLeft: spacings.xs
  },
  right: {
    paddingRight: spacings.xs,
    flexDirection: 'row'
  },
  title: {
    ...fonts.body,
    margin: spacings.xs,
    color: colors.surface
  },
  info: {
    ...container,
    backgroundColor: colors.ink
  },
  error: {
    ...container,
    backgroundColor: colors.error
  },
  warning: {
    ...container,
    backgroundColor: colors.primarySub
  }
});
