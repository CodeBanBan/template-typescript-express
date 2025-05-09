module.exports = {
  extends: ['standard-with-typescript'],
  parserOptions: {
    project: './tsconfig.json'
  },
  env: {
    mocha: true
  },
  rules: {
    'object-shorthand': 'off'
  }
}
