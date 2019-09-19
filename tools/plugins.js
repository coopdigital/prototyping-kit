const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const options = require("./options");

/**
 * Plugins
 *
 * Plugins are what make up Webpacks functionality and also go beyond what
 * loaders can do.
 *
 * See documentation for more details. https://webpack.js.org/concepts/plugins
 */
module.exports = (environment) => {
  /**
   * Store environment variables
   */
  const envOptions = options[environment];

  /**
   * Webpack EnvironmentPlugin
   *
   * Allows easy use of enviroment variables within Webpack.
   */
  const EnvironmentOptions = () => {
    return new webpack.EnvironmentPlugin(envOptions.settings);
  }

  /**
   * Webpack ProvidePlugin
   *
   * Allows us the automatically load modules in Webpack without having to
   * import them everywhere.
   */
  const EnvironmentPlugin = () => {
    return new webpack.ProvidePlugin(envOptions.plugins);
  }

  /**
   * MiniCssExtractPlugin
   *
   * Extracts CSS into separate files.
   */
  const CssExtractPlugin = () => {
    return new MiniCssExtractPlugin({
      filename: "assets/css/[name].[hash].css"
    });
  }

  return {
    EnvironmentOptions,
    EnvironmentPlugin,
    CssExtractPlugin
  };
};
