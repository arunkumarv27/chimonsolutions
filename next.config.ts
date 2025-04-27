import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack"; // Import Webpack types

const nextConfig: NextConfig = {
  images: {
    domains: ["www.launchuicomponents.com", "assets.aceternity.com"],
  },
  webpack(config: WebpackConfig) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Enables SVG import as React components
      issuer: /\.[jt]sx?$/, // Ensures rule applies to TSX/JSX files
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
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig
