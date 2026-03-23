import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.CI ? "export" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
