const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
const CompressionWebpackPlugin = require("compression-webpack-plugin")
// const productionGzipExtensions = ["js", "css", "svg", "png", "woff", "woff2", "ttf", "eot"]
const isProcudtion = process.env.NODE_ENV === "production";

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  filenameHashing: false,
  lintOnSave: !isProcudtion,
  productionSourceMap: !isProcudtion,

  configureWebpack: config => {
    if (isProcudtion) {
      return {
        optimization:  {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              extractComments: "all",
              terserOptions: {
                ascii_only: true,
                compress: true,
                mangle: true,
              },
            }),
          ],
        },
        // plugins: [
        //   new CompressionWebpackPlugin({
        //     filename: "[path].gz[query]",
        //     algorithm: "gzip",
        //     test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        //     threshold: 10240,
        //     minRatio: 0.8,
        //     deleteOriginalAssets: true,
        //   }),
        // ],
        performance: {
          hints: "warning",
          maxEntrypointSize: 50000000,
          maxAssetSize: 30000000,
          assetFilter: function(assetFilename) {
            return assetFilename.endsWith(".js");
          }
        },
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete("prefetch");
    config.plugin("CompressionPlugin").use(CompressionWebpackPlugin);
  },
  
  transpileDependencies: [
    "vuetify"
  ]
}