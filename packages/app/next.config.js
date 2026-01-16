const { join } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["shared-package"],
  turbopack: {
    root: join(__dirname, ".."), // Root is packages
  },
};

module.exports = nextConfig;
