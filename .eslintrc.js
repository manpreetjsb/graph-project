module.exports = {
  root: true,
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-quotes': ['error', 'prefer-single'],
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
}
