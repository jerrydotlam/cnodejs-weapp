module.exports = {
  // root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'airbnb-base/legacy'
  ],
  globals: {
    '__DEV__': true,
    '__WECHAT__': true,
    '__ALIPAY__': true,
    wx: true,
    App: true,
    Page: true,
    getApp: true,
    Behavior: true,
    Component: true
  },
  rules: {
    'no-console': 0,
    'func-names': 0,
  }
}
 