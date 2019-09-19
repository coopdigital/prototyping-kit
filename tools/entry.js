/**
 * Webpack entry file
 *
 * The purpose of this file is to allow Webpack to import you application code.
 * This will be all of the Javascript and CSS. It is a cleaner approach so you
 * can keep you application index.js file clean.
 */

/**
 * Require the entire Javascript
 */
import "../src/javascript/index.js";

/**
 * Using CssMiniExtractPlugin we import our CSS so it can be processed with
 * Webpack but still output as a separate file.
 */
import "../src/css/main.css";
