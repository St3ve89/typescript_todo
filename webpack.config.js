const path = require('path');

module.exports = {
  entry: './src/app.ts',
  mode: 'development',
  devtool: "inline-source-map",
  watchOptions: {
    ignored: './node_modules/'
  },
  output: {
    path:  path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}