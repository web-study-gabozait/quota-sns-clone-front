/** @type {import('next').NextConfig} */

const ENV = {
  ENV: process.env.ENV ?? "",
  API_HOST: process.env.API_HOST ?? "http://localhost:8080",
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  publicRuntimeConfig: {...ENV},
};

module.exports = nextConfig;
