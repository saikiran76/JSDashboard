const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  
  module.exports = withBundleAnalyzer({
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.cache = {
          type: 'filesystem',
          buildDependencies: {
            config: [__filename],
          },
        };
      }
  
      if (!isServer) {
        const MiniCssExtractPlugin = require('mini-css-extract-plugin');
        config.plugins.push(new MiniCssExtractPlugin());
      }
  
      return config;
    },
    productionBrowserSourceMaps: false
  });
  