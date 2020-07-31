import { StyleSheet } from 'react-native';
import { colors, spacings } from '../../styles';

export default StyleSheet.create({
  contanier: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.shadow, //iOS
    shadowOpacity: 0.11, //iOS
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
    paddingRight: spacings.xs,
    shadowRadius: 8,//iOS
    elevation: 1, //Android
  },
  childrenContainer: {
    marginLeft: 20
  }
});
