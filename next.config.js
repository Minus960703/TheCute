/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/proxy/api/filteringAccommodationList",
        destination: 'https://pokeapi.co/api/v2/pokemon',
      },
    ];
  },
  images: {
    domains: ['velog.velcdn.com'],
  }
}

module.exports = nextConfig
