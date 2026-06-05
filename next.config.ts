import type { NextConfig } from "next";

// Configuration for Next.js app
const nextConfig: NextConfig = {
  // Allow ngrok for local development webhooks
  allowedDevOrigins: ["polygraph-bladder-curliness.ngrok-free.dev"],
  devIndicators: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
