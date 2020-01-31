module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 取消缩进检查
    'space-before-function-paren': 0,
    'indent': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
}
