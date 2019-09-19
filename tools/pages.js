const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const path = require("path");
const options = require("./options");

const getHtmlPartial = filename => {
  if (filename && typeof filename === "string") {
    const htmlPartialPath = path.resolve(
      __dirname,
      `../src/partials/${filename}`
    );
    if (fs.existsSync(htmlPartialPath)) {
      return fs.readFileSync(htmlPartialPath);
    }
    throw new Error(`No file exists at ${htmlPartialPath}.`);
  }
  throw new Error(`Argument ${filename} is an invalid filename.`);
};

module.exports = environment => {
  const envOptions = options[environment];

  const generatePages = () => {
    const pages = [
      {
        name: "index",
        filename: envOptions.filename,
        title: "Your Offers",
        baseUrl: `${envOptions.settings.OFFERS_WEBSITE_BASE_URL}/`,
        inject: true
      },
      {
        name: "error",
        filename: "error.html",
        title: "Page no found",
        baseUrl: `${envOptions.settings.OFFERS_WEBSITE_BASE_URL}/`,
        // Prevent the JS loading. We manually include the CSS in template.
        inject: false
      }
    ];

    return pages.map(page => {
      const params = {
        inject: page.inject,
        hash: false,
        template: path.resolve(__dirname, `../src/${page.name}.html`),
        filename: page.filename,
        title: `${page.title} - Co-op`,
        header: getHtmlPartial("header.html"),
        footer: getHtmlPartial("footer.html"),
        gigyaApiKey: envOptions.GIGYA_API_KEY,
        intercomAppId: envOptions.settings.INTERCOM_APP_ID
      };

      if (page.baseUrl) {
        params.baseUrl = page.baseUrl;
      }
      return new HtmlWebpackPlugin(params);
    });
  };

  return { generatePages };
};
