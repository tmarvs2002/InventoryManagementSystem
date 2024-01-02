/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    distDir: 'build',
    compiler: {
        styledComponents: true
    },
    webpack: (config, { webpack, isServer, nextRuntime }) => {
        if (isServer && nextRuntime === "nodejs")
            config.plugins.push(
                new webpack.IgnorePlugin({ resourceRegExp: /^aws-crt$/ })
            );
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true, typescript: true, ref: true } }],
        })

        return config
    },
}

module.exports = nextConfig
