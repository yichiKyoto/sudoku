/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No special webpack changes needed; worker API falls back to mock if bundling fails
};

export default nextConfig;

