import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  env: {
    SITE_NAME: 'Sony AI',
    SITE_DESCRIPTION: 'Technology Reimagined by Artificial Intelligence',
  },
};

export default nextConfig;
