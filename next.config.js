/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable image optimization + avoid static export behavior
  images: { unoptimized: true },
  // IMPORTANT: Do NOT set `output: 'export'` anywhere.
};

module.exports = nextConfig;
