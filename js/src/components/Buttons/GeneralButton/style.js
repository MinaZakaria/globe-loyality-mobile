import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../../styles';

const colorOpacity = '14';

const container = {
  height: 55,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center'
};

const defaultBody = {
  backgroundColor: colors.paleGrey,
  shadowColor: colors.blueShadow,
  shadowOffset: {
    width: 0,
    height: 2
  }, // iOS
  shadowRadius: 1, // iOS
  shadowOpacity: 0.2, // iOS
  elevation: 2 // Andriod
};

const title = {
  ...fonts.body,
  fontWeight: 'bold',
  textAlign: 'center',
};

export default StyleSheet.create({
  disabledBody: {
    ...container,
    backgroundColor: `${colors.shadow}${colorOpacity}`,
  },
  defaultBody: {
    ...container,
    ...defaultBody,
  },
  carefulBody: {
    ...container,
    backgroundColor: colors.error,
  },
  friendlyBody: {
    ...container,
    backgroundColor: colors.secondary,
  },
  primaryBody: {
    ...container,
    backgroundColor: colors.primarySub
  },
  uniqueBody: {
    ...container,
    backgroundColor: colors.primary
  },
  fixedWidthXLarge: {
    width: 250,
  },
  fixedWidthLarge: {
    width: 200,
  },
  fixedWidthSmall: {
    width: 100,
  },

  title: {
    ...title,
    color: colors.surface
  },
  defaultTitle: {
    ...title,
    color: colors.primarySub
  },
  disabledTitle: {
    ...title,
    color: colors.disabled
  },

  disabledIcon: {
    tintColor: colors.disabled,
  },
  defaultIcon: {
    tintColor: colors.primary,
  },
  activeIcon: {
    tintColor: colors.secondary,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
