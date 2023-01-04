/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/filteringAccommodationList",
        destination: 'https://pokeapi.co/api/v2/pokemon',
      },
    ];
  },
}

module.exports = nextConfig
