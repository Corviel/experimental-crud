/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "http://localhost:1337/admin",
      },
      {
        source: '/admin/:path*',
        destination: 'http://localhost:1337/admin/:path*',
      },
    ]
  }
}

module.exports = nextConfig
