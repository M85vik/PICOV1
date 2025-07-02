const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

// Step 1: Create your base config
const baseConfig = mergeConfig(getDefaultConfig(__dirname), {
  // your custom metro config options (if any)
});

// Step 2: Wrap the base config with reanimated's config
module.exports = wrapWithReanimatedMetroConfig(baseConfig);
