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
        source: "/sitemap.xml",
        destination: '/api/seo/sitemap',
      },
      {
        source: "/naver4ba768d98496a476b43baf6dc3808728.html",
        destination: '/api/seo/naver'
      },
      {
        source: "/robots.txt",
        destination: '/api/seo/robots',
      }
    ];
  },
  images: {
    domains: ['velog.velcdn.com'],
  }
}

module.exports = nextConfig
