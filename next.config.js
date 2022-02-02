/** @type {import('next').NextConfig} */
// next.config.js
const withPWA = require("next-pwa");

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: isDev,
  },
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://tronya.github.io/whereiam/' : '',
});
