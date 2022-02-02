/** @type {import('next').NextConfig} */
// next.config.js
const withPWA = require("next-pwa");

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";

module.exports = withPWA({
  basePath: '/whereiam',
  pwa: {
    dest: "public",
    subdomainPrefix: '/whereiam/',
    register: true,
    skipWaiting: true,
    disable: isDev,
  },
  reactStrictMode: true
});
