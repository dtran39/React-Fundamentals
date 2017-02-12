// In webpack.config.js

// When we run webpack, it will takes everything from app/index.html and create dist/index.html
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  // Webpack allows you to have more than one entry point -> an array, not a string	
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
    // Module: list of modules
  module: {
  	// loaders: for transformation
    loaders: [
	/* Each loader must have: 
		1.  file type to run the specific transformation on (we don't want to run css transformation on js file)
		2. which directories should be included or excluded from being transformed 
			(usually node_modules needs to be excluded)
		3. The loader we want to run
	*/  	
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};