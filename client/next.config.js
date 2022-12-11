/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
    esmExternals: false,
  },
  swcMinify: true,
};