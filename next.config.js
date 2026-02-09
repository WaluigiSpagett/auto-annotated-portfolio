/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '', // Set this to '/auto-annotated-portfolio' if deploying to a subdirectory
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true, // Required for static export
    }
};

module.exports = nextConfig;
