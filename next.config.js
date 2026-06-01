/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure static export works with dynamic routes
  distDir: 'out',
};

module.exports = nextConfig;
