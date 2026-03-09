const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mf-demo",
    projectName: "navbar",
    webpackConfigEnv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: "asset/resource",
        },
      ],
    },
    externals: ["react-dom/client"],
    devServer: {
      host: "0.0.0.0",
      port: 9001,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });
};
