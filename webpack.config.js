const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	entry: "./src/wpcampus-footer.js",
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					{ loader: "style-loader" },
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: "css-loader", options: { sourceMap: false } },
					{ loader: "sass-loader", options: { sourceMap: false } }
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin(),
	]
};