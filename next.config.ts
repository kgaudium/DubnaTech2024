const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    scope: '/',
    skipWaiting: true,
});

const nextConfig = withPWA({
    output: "standalone",
    reactStrictMode: true,
});

module.exports = nextConfig;
