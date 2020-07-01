module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "react-native/react-native": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:security/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-native",
    "security"
  ],
  "rules": {
    "eol-last": [
      "error",
      "always"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react-native/no-raw-text": "off",
    "react-native/sort-styles": "off",
    "security/detect-non-literal-fs-filename": "off",
    "no-console": "error"
  },
  "settings": {
    "react": {
      "version": "16.3.1",
    }
  }
};