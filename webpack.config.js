const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname,'src'),
	entry: {
		main: './index.js',
		analitic: './analitic.js'
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions:['.js', '.json']
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './index.html'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /.css$/,
				use:['style-loader','css-loader']
			},
			{
				test: /\.(png|gif|jpg|jpeg)$/,
				use:['file-loader']
			},
			{
				test: /\.(ttf)$/,
				use: ['file-loader']
			},
			{
				test:/\.xml$/,
				use:['xml-loader']
			},
			{
				test:/\.csv$/,
				use:['csv-loader']
			}
		]
	}
}
