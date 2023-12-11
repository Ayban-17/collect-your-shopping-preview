/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')
const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/collect-your-shopping-landingpage/**',
      },
    ],
  },
}

module.exports = nextConfig
