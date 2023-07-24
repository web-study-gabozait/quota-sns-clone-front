/** @type {import('next').NextConfig} */

const ENV = {
  ENV: process.env.NODE_ENV ?? "",
  API_HOST: process.env.API_HOST ?? "http://localhost:8080",
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {...ENV},
};

module.exports = nextConfig;
