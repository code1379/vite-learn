// pnpm install eslint-plugin-promise eslint-plugin-node -D
// pnpm install eslint-config-standard eslint-plugin-import -D
module.exports = {
  extends: 'standard',
  globals: {
    postMessage: true,
  },
  rules: {
    'space-before-function-paren': 'off',
  },
};

// husky
// pnpm install husky -D
// npx husky install
// npx husky add .husky/pre-commit "npm run lint"

//!! 我这里执行 npm run lint 会报错
