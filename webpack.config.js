const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  module: {
      rules: [
          { 
              test: /\.jsx?$/, 
              loader: 'babel-loader', 
              exclude: /node_modules/ 
          },
          {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: 'jQuery'
            },{
                loader: 'expose-loader',
                options: '$'
            }]
          },
          {
            test: require.resolve('jquery.scrollto'),
            use: [{
                loader: 'expose-loader',
                options: 'scrollto'
            }]
          }
      ]
  },
  devServer: {
      contentBase: path.resolve(__dirname, "dist")
  }
};