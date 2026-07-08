import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio", // Це важливо для твого шляху yarabanana.github.io/portfolio/
  trailingSlash: true,
};

export default nextConfig;