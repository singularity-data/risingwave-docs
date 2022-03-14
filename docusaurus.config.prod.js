const config = require("./docusaurus.config");

/** @type {import('@docusaurus/types').Config} */
const newConfig = {
  baseUrl: "/risingwave-docs/"
};

module.exports = { ...config, ...newConfig };