// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://ai-skinsleuth-85a14.web.app/:path*', // <-- your Studio domain
        permanent: true, // 308
      },
    ];
  },
};

export default nextConfig;
