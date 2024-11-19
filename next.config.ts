import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://3a31-103-211-14-200.ngrok-free.app//:path*' // Replace with your Flask API URL
      },
    ]
  },
};

export default nextConfig;
