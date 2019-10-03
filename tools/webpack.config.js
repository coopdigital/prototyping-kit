const path = require("path");
const loadersModule = require("./loaders");
const pluginsModule = require("./plugins");
const pagesModule = require("./pages");
const getHeaderFooter = require("./getHeaderFooter");

module.exports = async env => {
  /**
   * Set environment variable.
   */
  const environment = env.NODE_ENV;

  /**
   * Single Site Navigation Partials
   *
   * Build HTML partials for Single Site Navigation and Footer. The rest of the
   * config will await this to complete so we can ensure we have the HTML from
   * the external endpoint.
   */
  await getHeaderFooter();

  /**
   * Plugins
   *
   * Webpack Plugins. See plugins.js for full list.
   */
  const plugins = pluginsModule();

  /**
   * Loaders
   *
   * Webpack Loaders. See loaders.js for full list.
   */
  const loaders = loadersModule(environment);

  /**
   * HtmlWebpackPlugin
   *
   * Using HtmlWebpackPlugin we define an array of page objects that we then
   * create templates from.
   */
  const pages = pagesModule();
  const generatedPages = pages.generatePages();

  const config = {
    /**
     * Mode
     *
     * Set the environment mode based on the settings provided.
     */
    mode: environment === "prod" ? "production" : "development",

    /**
     * Entry
     *
     * Set the Webpack entry file. Defined by our environment settings.
     */
    entry: "entry.js",

    /**
     * Output
     *
     * Where Webpack outputs the assets and bundles. Location defined by
     * environment settings.
     */
    output: {
      filename: "bundle.[hash].js",
      path: path.resolve(__dirname, "../dist")
    },

    /**
     * Devtool
     *
     * Controls the source-maps of assets. Should be false for production.
     */
    devtool: "source-map",

    /**
     * Modules
     *
     * Defines our loader as module rules. See loaders.js for full list.
     */
    module: {
      rules: [loaders.CSSLoader(), loaders.JSLoader()]
    },

    /**
     * Plugins
     *
     * Defines our plugins. As we implement the HtmlWebpack plugin as part of
     * the pages.js script we have to concat that output here so they are also
     * built.
     */
    plugins: [plugins.CleanPlugin(), plugins.CssExtractPlugin()].concat(
      generatedPages
    )
  };

  /**
   * Dev server
   *
   * For local development we use webpack-dev-server to create a localhost.
   */
  if (environment === "local") {
    config.devServer = {
      contentBase: "dist",
      compress: true,
      port: 9000,
      writeToDisk: true
    };
  }

  return config;
};
