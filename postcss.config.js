module.exports = (ctx) => {
	const propList = [
		"max-width",
		"gap",
		"grid-gap",
		"column-gap",
		"grid-column-gap",
		"font",
		"font-size",
		"line-height",
		"letter-spacing",
		"padding",
		"padding-top",
		"padding-bottom",
		"padding-left",
		"padding-right",
		"max-width",
	];

	const pxToRem = {
		rootValue: 16,
		propList,
		mediaQuery: true,
	};

	return {
		plugins: {
			"postcss-import": {},
			"postcss-nested": {},
			autoprefixer: {},
			"postcss-preset-env": {},
			"postcss-discard-duplicates": {},
			"postcss-pxtorem": pxToRem,
			"postcss-discard-comments": {},
			cssnano: ctx.env === "production" ? {} : false,
		},
	};
};
