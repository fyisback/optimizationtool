module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ["@babel/preset-env"],
    },
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [],
  rules: {},
};
