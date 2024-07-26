/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.slingacademy.com"],
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
