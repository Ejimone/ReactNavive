// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Try importing nativewind differently based on version
let nativewindConfig;
try {
  // For NativeWind v4
  const { withNativeWind } = require('nativewind/metro');
  nativewindConfig = withNativeWind(config, { input: "./app/globals.css" });
} catch (error) {
  try {
    // For NativeWind v3
    const withNativeWind = require('nativewind/metro');
    nativewindConfig = withNativeWind(config, { input: "./app/globals.css" });
  } catch (secondError) {
    // Fallback to basic config if neither approach works
    console.warn('NativeWind metro integration failed, using default config');
    nativewindConfig = config;
  }
}

module.exports = nativewindConfig;
