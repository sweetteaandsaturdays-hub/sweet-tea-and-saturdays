/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true }, // ok to keep
  // ⚠️ Do NOT include: output: 'export'
};

module.exports = nextConfig;
