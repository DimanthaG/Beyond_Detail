const path = require('path');

module.exports = function override(config, env) {
  // Add cache control to production build
  if (env === 'production') {
    config.output = {
      ...config.output,
      filename: 'static/js/[name].[contenthash:8].js',
      chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    };
    
    // Ensure images are properly handled in production
    // Update file-loader/asset modules configuration if needed
    if (config.module && config.module.rules) {
      config.module.rules.forEach(rule => {
        if (rule.oneOf) {
          rule.oneOf.forEach(oneOfRule => {
            // Ensure image files are processed correctly
            if (oneOfRule.test && oneOfRule.test.toString().includes('image')) {
              // Make sure images are included in the build
              if (!oneOfRule.generator) {
                oneOfRule.generator = {};
              }
              oneOfRule.generator.filename = 'static/media/[name].[hash:8][ext]';
            }
          });
        }
      });
    }
    
    // Add long-term caching for assets
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 20
          },
          // Common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    };
  }
  
  return config;
};

