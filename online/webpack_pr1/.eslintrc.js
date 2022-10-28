module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'plugin:import/recommended'], // eslint-import-resolver-alias, eslint-import-resolver-webpack 설치
  globals: {
    API_DOMAIN: true,
    TWO: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': 'webpack', // webpack의 resolve를 따라감
  },
  rules: {
    // delete ␍ prettier/prettier 오류 해결
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
