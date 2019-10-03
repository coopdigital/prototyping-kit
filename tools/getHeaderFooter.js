const rpn = require("request-promise-native");
const fs = require("fs");
const path = require("path");

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

module.exports = async () => {
  const SSN_HEADER_URL =
    "https://assets.digital.coop.co.uk/single-site-nav/dist/coop-header.html";
  const SSN_FOOTER_URL =
    "https://assets.digital.coop.co.uk/single-site-nav/dist/coop-footer.html";

  await loadAndSavePage(SSN_HEADER_URL, "header.html");
  await loadAndSavePage(SSN_FOOTER_URL, "footer.html");
};
