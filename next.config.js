/** @type {import('next').NextConfig} */
// next.config.js
const withPWA = require("next-pwa");

const isProd = process.env.NODE_ENV === "production";

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  assetPrefix: isProd ? "/whereiam/" : "",
});
