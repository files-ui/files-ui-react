const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname, "../.."),
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
