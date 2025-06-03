import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      // Add other domains if needed (e.g., for Google, Facebook, etc.)
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Example for Google avatars
      },
    ],
  },
};

export default nextConfig;