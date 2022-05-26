module.exports = {
    swcMinify: false,
    presets: ['next/babel'],
    env: { TEST: process.env.TEST },
    async rewrites() {
        return [];
    },
};
