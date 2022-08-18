/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // assetPrefix: isProd ? "./" : undefined,
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : undefined,
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : undefined,
};

module.exports = nextConfig;
