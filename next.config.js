/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },

  images: {
    remotePatterns: [
      {
        protocol: process.env.API_REMOTEPATTERNS_PROTOCOL,
        hostname: process.env.API_REMOTEPATTERNS_HOSTNAME,
        pathname: process.env.API_REMOTEPATTERNS_PATHNAME,
      },
    ],
  },
}

module.exports = nextConfig
