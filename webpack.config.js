const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: 'index.html',
})

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  plugins: [htmlPlugin],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@@store': path.resolve(__dirname, 'src/store/'),
      '@@components': path.resolve(__dirname, 'src/components/'),
    },
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
}
