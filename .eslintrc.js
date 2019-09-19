module.exports = {
  extends: ["airbnb-base", "prettier"],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-console": "off",
    "consistent-return": "off",
    "no-plusplus": "off"
  }
};
