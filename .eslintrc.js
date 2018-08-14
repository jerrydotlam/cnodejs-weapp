module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'prettier',
    'prettier/standard'
  ],
  plugins: [
    'prettier'
  ],
  env: {
    browser: true
  },
  // globals: {
  //   '__DEV__': true,
  //   '__WECHAT__': true,
  //   '__ALIPAY__': true,
  //   App: true,
  //   Page: true,
  //   Component: true,
  //   Behavior: true,
  //   wx: true,
  //   getApp: true
  // },
  rules: {
    // 'prettier/prettier': 'error',
    'no-console': 0,
    // 'quotes': ['error', 'single']
  }
}
 