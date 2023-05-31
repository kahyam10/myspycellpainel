const withImages = require("next-images");

module.exports = withImages({
  esModule: true,
  future: {
    webpack5: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
});
