import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://stitchitquick.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
