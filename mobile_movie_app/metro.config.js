// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
// Import withNativeWind correctly
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Use the withNativeWind function to wrap the config
module.exports = withNativeWind(config, { input: "./app/globals.css" });
