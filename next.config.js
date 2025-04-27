/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.launchuicomponents.com", "assets.aceternity.com"],
  },
  webpack(config) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
      issuer: /\.[jt]sx?$/,
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
