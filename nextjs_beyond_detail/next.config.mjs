/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  // Performance optimizations
  compress: true,
  productionBrowserSourceMaps: false,

  // SCSS support via sass package
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  async redirects() {
    return [
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/auto-detailing-scarborough', destination: '/car-detailing-scarborough', permanent: true },
      { source: '/tail-light-tinting-scarborough', destination: '/tail-light-tinting', permanent: true },
      { source: '/ontariowindowtintinglaw', destination: '/window-tinting-laws-ontario', permanent: true },
      { source: '/mobile-car-detailing-toronto', destination: '/mobile-detailing', permanent: true },
      { source: '/mobile-car-detailing', destination: '/mobile-detailing', permanent: true },
      { source: '/exotic-car-detailing-toronto', destination: '/luxury-car-detailing-toronto', permanent: true },
      { source: '/window-tinting', destination: '/tint', permanent: true },
      { source: '/book', destination: '/booking', permanent: false },
      { source: '/service-area/pickering', destination: '/car-detailing-pickering', permanent: true },
      { source: '/service-area/markham', destination: '/car-detailing-markham', permanent: true },
      { source: '/markham', destination: '/car-detailing-markham', permanent: true },
      { source: '/service-area/north-york', destination: '/car-detailing-north-york', permanent: true },
      { source: '/image-licensing', destination: '/copyright', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(self), microphone=(), camera=()' },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
