module.exports = {
  publicPath: "./",
  // 用于测试服务器保存功能
  devServer: {
    proxy: "http://localhost:8000"
  },
  configureWebpack: {
    output: {
      libraryExport: "default"
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".vue"]
    }
  }
};
