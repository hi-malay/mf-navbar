const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({ // Tailor the output including buildentry and output point on basis of props
    orgName: "mf-demo",
    projectName: "navbar",
    webpackConfigEnv,
  });

  // entry: '/Users/malaymishra/Downloads/ALL_TECH/MicroFrontEnd/navbar/src/mf-demo-navbar.js',
  // output: {
  //   filename: 'mf-demo-navbar.js',
  //   libraryTarget: 'system',
  //   path: '/Users/malaymishra/Downloads/ALL_TECH/MicroFrontEnd/navbar/dist',
  //   jsonpFunction: 'webpackJsonp_navbar',
  //   devtoolNamespace: 'navbar'
  // },
  // module: { rules: [ [Object], [Object], [Object] ] },
  // devtool: 'sourcemap',
  // devServer: {
  //   compress: true,
  //   historyApiFallback: true,
  //   headers: { 'Access-Control-Allow-Origin': '*' },
  //   disableHostCheck: true
  // },
  // externals: [ 'single-spa', /^@mf-demo\//, 'react', 'react-dom' ],

  return webpackMerge.smart(defaultConfig, {
    // customizations can go here
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  });
};
