const path = require("path");
module.exports = {
	entry: "./src/wpcampus-footer.js",
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "wpcampus-footer.min.js"
	}
};