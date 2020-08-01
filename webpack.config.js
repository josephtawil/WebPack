const config = {
    entry: "./src/app.js",
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
        ],
      },

    output: {
        path: __dirname + "/dist",
    
        filename: "bundle.js"
    },

    mode: "development",
}

module.exports = config;