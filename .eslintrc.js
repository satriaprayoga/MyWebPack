module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parser: "babel-eslint",
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: "script"
	},
	rules: {
		"no-unused-vars": 2,
		"no-console": 1
	},
	root: true,
	parserOptions: {
		sourceType: "module"
	}
};
