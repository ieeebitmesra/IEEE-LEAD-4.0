/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/feed/1',
            permanent: true,
          },
        ]
      },
}