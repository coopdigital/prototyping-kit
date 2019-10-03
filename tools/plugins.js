const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

/**
 * Plugins
 *
 * Plugins are what make up Webpacks functionality and also go beyond what
 * loaders can do.
 *
 * See documentation for more details. https://webpack.js.org/concepts/plugins
 */
module.exports = () => {
  /**
   * Clean Webpack Plugin
   *
   * Cleans up the build folder.
   */
  const CleanPlugin = () => {
    return new CleanWebpackPlugin("../dist", { allowExternal: true });
  };

  /**
   * MiniCssExtractPlugin
   *
   * Extracts CSS into separate files.
   */
  const CssExtractPlugin = () => {
    return new MiniCssExtractPlugin({
      filename: "src/css/[name].[hash].css"
    });
  };

  return { CleanPlugin, CssExtractPlugin };
};
