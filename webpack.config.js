const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './index.html'
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([
			{
				from: '',
				to: ''
			} 
		])
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
	},
	devServer: {
		port:3000
	}
}
