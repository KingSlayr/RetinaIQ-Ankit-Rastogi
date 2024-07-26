/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.slingacademy.com"],
  },
  trailingSlash: true,
  images: {
    unoptimized: true, // Optional, if you have issues with image optimization
  },
  basePath: "/RetinaIQ-Ankit-Rastogi",
};

export default nextConfig;
