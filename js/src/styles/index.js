import { Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const colors = {
  primary: '#4F5366',
  primarySub: '#6A829B',
  secondary: '#679F27',
  background: '#EDEEF2',
  backgroundSub: '#EEEEEE',
  surface: '#FFFFFF',
  surfaceSub: '#FAFAFA',
  ink: '#333333',
  inkSub: '#7D7E80',
  error: '#D14B4B',
  shadow: '#000000',
  disabled: '#B7B7B8',
  paleGrey: '#F5F6FA',
  blueShadow: '#1B254D'
};

export const spacings = {
  none: 0,
  xxs: 4,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 36
};

/**
 * Usage: Please use these font presets inside StyleSheet for performance. Don't
 *        pass them directly to style properties.
 *
 * Letter Spacing: It is not well supported on android. Using values other than
 *                 0 may not work wel on android and more sutle ways will needed
 *                 to implement the same effect.
 */
export const fonts = {
  title: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: 0
  },
  headline: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0
  },
  headlineSub: {
    fontFamily: 'Lato',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0
  },
  body: {
    fontFamily: 'Lato',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0
  },
  smallTitle: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0
  },
  midTitle: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0
  },
  medium: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0
  },
  printHeadline: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'bold',
    fontSize: 26,
    letterSpacing: 0
  },
  printHeadlineMedium: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0
  },
  printHeadlineSub: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0
  },
  printBody: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'normal',
    fontSize: 14,
    letterSpacing: 0
  },
  printBodyBold: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0
  },
  printBodyItalic: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'normal',
    fontSize: 14,
    letterSpacing: 0,
    fontStyle: 'italic'
  },
  printBodyHeader: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0
  },
  printFooter: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'normal',
    fontSize: 12,
    letterSpacing: 0
  },
  printFooterItalic: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'normal',
    fontSize: 12,
    letterSpacing: 0,
    fontStyle: 'italic'
  }
};
