const path = require("path");
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
					{ loader: "css-loader", options: { sourceMap: false } },
				]
			}
		]
	},
};