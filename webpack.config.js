// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackConfig = {
	mode: 'production',
	entry: {
		main: path.resolve(__dirname, './src/js/index.js')
	},

	output: {
		filename: 'index.bundle.js',
		path: path.resolve(__dirname, './dist')
	},

	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(),

		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'assets/images/*.jpg',
					to: '',
					context: 'src/'
				}
			]
		}),

		new MiniCssExtractPlugin({
			filename: 'css/style.css'
		}),

		new HtmlWebpackPlugin({
			title: 'webpack index',
			template: './src/pages/index.html',
			filename: 'index.html',
			inject: true,
			chunks: ['pages'],
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),

		new HtmlWebpackPlugin({
			title: 'webpack news',
			template: './src/pages/news.html',
			filename: 'news.html',
			inject: true,
			chunks: ['pages'],
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),

		new HtmlWebpackPlugin({
			title: 'webpack photo',
			template: './src/pages/photo.html',
			filename: 'photo.html',
			inject: true,
			chunks: ['pages'],
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),

		new HtmlWebpackPlugin({
			title: 'webpack rozklad',
			template: './src/pages/rozklad.html',
			filename: 'rozklad.html',
			inject: true,
			chunks: ['pages'],
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		})
	]
}

module.exports = webpackConfig
