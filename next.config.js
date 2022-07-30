const path = require('path');

module.exports = {
  images: {
    domains: ["cdn.shopify.com", "d3t32hsnjxo7q6.cloudfront.net"],
    formats: ["image/webp"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
