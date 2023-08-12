/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/contact": { page: "/contact" },
    };
  },
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;