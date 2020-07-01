import { getAccessToken, getTokenType, getExpiresIn } from '../login';

const state = {
  login: {
    accessToken: 'token',
    tokenType: 'Bearer',
    expiresIn: 3,
  }
};

describe('getAccessToken() selector ', () => {
  test('It should return login token', () => {
    const actual = getAccessToken(state);
    const expected = 'token';
    expect(actual).toEqual(expected);
  });
});

describe('getTokenType() selector', () => {
  test('It should return TokenType ', () => {
    const actual = getTokenType(state);
    const expected = 'Bearer';
    expect(actual).toEqual(expected);
  });
});

describe('getExpiresIn() selector', () => {
  test('It should return expiresIn ', () => {
    const actual = getExpiresIn(state);
    const expected = 3;
    expect(actual).toEqual(expected);
  });
});
