const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	mode:"development",
	entry: {
		main: './src/index.js',
		analitic: './src/analitic.js'
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebPackPlugin()
	]
}