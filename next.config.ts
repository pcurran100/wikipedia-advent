import type { NextConfig } from "next";

const repoBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: repoBase,
  assetPrefix: repoBase,
};

export default nextConfig;