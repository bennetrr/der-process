/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    experimental: {
        images: {
            allowFutureImage: true
        }
    }
};

module.exports = nextConfig;
