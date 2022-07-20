// 参照解决办法 https://stackoverflow.com/questions/66215112/syntax-error-error-no-eslint-configuration-found-in-when-i-tried-to-npm-run
// pnpm install eslint -D
// npx eslint --init
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    semi: 0,
    'space-before-function-paren': 0,
    'no-unused-var': 0,
    'no-unused-vars': 0
  }
};
