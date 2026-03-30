/** CRA: ігноруємо зламані/відсутні source maps у @mediapipe (тягнеться з @react-three/drei). */
module.exports = {
  webpack: {
    configure(config) {
      config.ignoreWarnings = [
        ...(config.ignoreWarnings || []),
        (warning) =>
          typeof warning?.message === "string" &&
          warning.message.includes("Failed to parse source map") &&
          warning.message.includes("@mediapipe/tasks-vision"),
      ];
      return config;
    },
  },
};
