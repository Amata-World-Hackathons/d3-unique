/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const nextConfig = {
  basePath,
  assetPrefix: basePath,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
