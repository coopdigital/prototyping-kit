const path = require("path");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssCustomMedia = require("postcss-custom-media");
const postcssImport = require("postcss-import");
const postcssNested = require("postcss-nested");
const postcssPresetEnv = require("postcss-preset-env");

/**
 * Loaders
 *
 * Loaders are ways we can run non Javascript or JSON files through Webpack and
 * then convert them into valid modules.
 *
 * See documentation for further details
 * https://webpack.js.org/concepts/#loaders
 */
module.exports = environment => {
  /**
   * Babel
   *
   * We transpile all project Javascript so that we ensure backwards
   * compatibility with older browsers.
   *
   * Config for Babel can be found in ../.babelrc.
   */
  const JSLoader = () => {
    return {
      test: /\.js$/,
      include: [path.resolve(__dirname, "../src/javascript")],
      use: {
        loader: "babel-loader"
      }
    };
  };

  /**
   * CSS loader
   *
   */
  const CSSLoader = () => {
    return {
      /**
       * We currently test for .css files only.
       */
      test: /\.css$/,
      use: [
        /**
         * MiniCssExtractPlugin Loader
         *
         * We use the MiniCssExtractPlugin plugin first so that the CSS we load
         * is properly extracted into their own files.
         */
        MiniCssExtractPlugin.loader,

        /**
         * CSS Loader
         *
         * Required before we run any of our CSS through PostCSS or Sass.
         */
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            url: false,
            importLoaders: 1
          }
        },

        /**
         * PostCSS Loader
         *
         * Now we can use the PostCSS loader to post-process the CSS using its
         * own eco-system of plugins for authoring and optimisations.
         */
        {
          loader: "postcss-loader",
          options: {
            autoprefixer: {
              browsers: ["last 2 versions"]
            },
            sourceMap: true,
            /**
             * Plugins:
             *  - PostCSS Import: Allows imports in CSS.
             *  - PostCSS Custom Media: Allows to Custom Media query sytax.
             *  - PostCSS Nested: Allows nesting in CSS based on future spec.
             *  - PostCSS Present Env: Sensible defaults for PostCSS
             *  - Autoprefixer: Automatically applies CSS prefixes for legacy
             *    browsers.
             *  - CSSNano: Compress and Optimise our CSS for production.
             */
            plugins: () => [
              postcssImport(),
              postcssCustomMedia(),
              postcssNested(),
              postcssPresetEnv({
                autoprefixer: {
                  grid: true
                },
                preserve: true,
                stage: 0
              }),
              autoprefixer,
              cssnano({
                preset: [
                  "default",
                  {
                    normalizeWhitespace: environment === "prod"
                  }
                ]
              })
            ]
          }
        }
      ]
    };
  };

  return { JSLoader, CSSLoader };
};
