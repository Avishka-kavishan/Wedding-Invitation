const isGitHubPages =
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined;
const repoName = "Wedding-Invitation";
const basePath = isGitHubPages ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
