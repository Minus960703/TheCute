/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/filteringAccommodationList",
        destination: 'https://sg.petandbe.com/filtering/accommodation',
      },
    ];
  },
}

module.exports = nextConfig
