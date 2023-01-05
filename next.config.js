/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/proxy/api/filteringAccommodationList",
        destination: 'https://pokeapi.co/api/v2/pokemon',
      },
    ];
  },
}

module.exports = nextConfig
