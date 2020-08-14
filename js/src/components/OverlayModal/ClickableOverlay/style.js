import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

const opacity = '4D';

export default StyleSheet.create({
  container: {
    backgroundColor: `${colors.shadow}${opacity}`,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
