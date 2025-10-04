import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pyczzkmwevupfiphktwc.supabase.co',
        pathname: '/storage/v1/object/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/npm/emoji-datasource-apple/**'
      },
      {
        protocol: 'https',
        hostname: 'www.dior.com',
        pathname: '/on/demandware.static/-/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**'
      }
    ],
    minimumCacheTTL: 60
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
        { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' }
      ]
    }
  ]
}

export default nextConfig
