import loginReducer from '../login';
import { loginApiSuccess } from '../../actions/login';

const createState = ({
  accessToken = '',
  tokenType = '',
  expiresIn = 0
} = {}) => ({
  accessToken, tokenType, expiresIn
});

const initialState = createState();
let prevState, nextState;

describe('loginReducer()', () => {
  test('Reducer with no arguments should return the initial state', () => {
    const actual = loginReducer();

    expect(actual).toEqual(initialState);
  });
});

describe('loginApiSuccess() action', () => {
  test('with no arguments should return the initial state', () => {
    prevState = createState({
      accessToken: 'token 1',
      tokenType: 'Bearer'
    });
    const actual = loginReducer(prevState, loginApiSuccess());

    expect(actual).toEqual(initialState);
  });

  test('with all arguments should set the token, type, expiresIn', () => {
    prevState = createState({
      accessToken: 'token 1',
      tokenType: 'Bearer'
    });

    nextState = createState({
      accessToken: 'token 2',
      tokenType: 'Bearer',
      expiresIn: 5
    });
    const actual = loginReducer(prevState, loginApiSuccess(nextState.accessToken, nextState.tokenType, nextState.expiresIn));

    expect(actual).toEqual(nextState);
  });
});
