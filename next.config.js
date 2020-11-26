module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md/,
      use: [options.defaultLoaders.babel, '@mdx-js/loader'],
    });

    config.module.rules.push({
      test: /\.worker\.js$/,
      loader: 'worker-loader',
    });

    return config;
  },
};
