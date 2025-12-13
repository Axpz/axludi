import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 表示允许所有 https 主机
      },
      {
        protocol: 'http',
        hostname: '**', // 可选：也允许 http 图片，但不推荐
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;