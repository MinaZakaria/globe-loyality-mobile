import { StyleSheet } from 'react-native';
import { colors, spacings, fonts } from '../../styles';

export default StyleSheet.create({
  keyBoard: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#F1F9FF'
  },
  inputContainer: {
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textContainer: {
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textInput: {
    paddingVertical: 15,
    width: 279,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D5D5D5',
    textAlign: 'center',
    color: colors.primary,
    marginBottom: spacings.lg,
  },
  loginText: {
    ...fonts.title,
    color: '#2699FB'
  },
  button: {
    width: 279,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#2699FB',
    margin: spacings.lg,
    marginBottom: spacings.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    ...fonts.smallTitle,
    color: '#ffffff'
  },
  error: {
    ...fonts.smallTitle,
    color: colors.error
  }
});
