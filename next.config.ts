import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  allowedDevOrigins: ['http://192.168.0.121:3000'],
  cacheComponents: true,
};

export default nextConfig;
