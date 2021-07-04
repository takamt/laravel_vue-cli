module.exports = () => {
  const webpackConfig = {
    module: {},
    resolve: {
      extensions: [".js", ".ts", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm-bundler.js",
      },
    },
    plugins: [],
    devtool: "eval-cheap-source-map",
  };

  const config = {
    // Laravel側：assets系（js,css等）の出力先
    outputDir: "../public/app",
    // public以下のassets系（js,css等）の参照先
    publicPath: "/app",
    // キャッシュバスティングのためにファイル名にハッシュをつける
    filenameHashing: true,
    // 複数のSPAを作成可能
    pages: {
      // 主要機能を扱うSPA
      main: {
        entry: "src/main/main.js",
        template: "templates/base.html",
        filename: `../../resources/views/spa/main.blade.php`,
      },
    },
    configureWebpack: webpackConfig,
  };

  return config;
};
