import { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})
const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 2678400,
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
    deviceSizes: [430, 768, 1080, 1280, 1600, 1920],
  },
  reactStrictMode: false,
  output: 'standalone',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    viewTransition: true,
    webVitalsAttribution: ['CLS', 'LCP'],
    // cssChunking: true,
  },
  env: {
    API: '/wp-json/api/v2',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

//ANALYZE=true npm run build

export default withBundleAnalyzer(nextConfig);