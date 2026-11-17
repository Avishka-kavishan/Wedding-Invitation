const isGitHubPages = process.env.GITHUB_ACTIONS === "true" || process.env.NEXT_PUBLIC_BASE_PATH;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/Wedding-Invitation" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
