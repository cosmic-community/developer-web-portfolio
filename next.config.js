/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove typedRoutes as it's not a valid Next.js 15 option
  },
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.cosmicjs.com',
      'imgix.cosmicjs.com'
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable static exports if needed
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig