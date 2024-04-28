/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "similarwatch.com",
      },
    ],
  },
};

export default nextConfig;
