const {name} = require('./package');
const path = require("path");

module.exports = {
  webpack: config => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';
    config.output.publicPath = process.env.PUBLIC_URL || '/';

    return config;
  },

  devServer: _ => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;

    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },

  paths: function (paths, env) {
    // ...add your paths config
    paths.appBuild = path.join(path.dirname(paths.appBuild), '../../dist/react-demo')
    return paths;
  },
};
