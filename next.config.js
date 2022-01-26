/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  experimental: {
    outputStandalone: true,
  },
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  // Use these two field if host the site on Github Pages
  basePath: 'bitcoinvietnam/otc.bitcoinvn.io',
  assetPrefix: 'bitcoinvietnam/otc.bitcoinvn.io',

  // Use these below if hosted on custom domain
  // basePath: '',
  // assetPrefix: './',
});
