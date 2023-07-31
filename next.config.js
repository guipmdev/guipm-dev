/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http', // ALTERAR DEPOIS
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
