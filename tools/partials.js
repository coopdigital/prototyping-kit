const rpn = require("request-promise-native");
const fs = require("fs");
const path = require("path");

const options = require("./options");

const loadAndSavePage = (uri, filename) => {
  return rpn({
    uri
  })
    .then(html => {
      const htmlPartialPath = path.resolve(
        __dirname,
        `../src/partials/${filename}`
      );
      return fs.writeFileSync(htmlPartialPath, html);
    })
    .catch(error => {
      throw error;
    });
};

module.exports = async environment => {
  const envOptions = options[environment];

  const { SSN_HEADER_URL, SSN_FOOTER_URL } = envOptions.settings;

  await loadAndSavePage(SSN_HEADER_URL, "header.html");
  await loadAndSavePage(SSN_FOOTER_URL, "footer.html");
};
