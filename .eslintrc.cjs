module.exports = {
	parser: "@typescript-eslint/parser",
	extends: ["af-javascript", "plugin:@typescript-eslint/recommended"],
	plugins: ["@typescript-eslint"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		project: ["tsconfig.json"],
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: ["tsconfig.json"],
			},
		},
	},
	rules: {
		"no-unused-vars": "off",
		"no-useless-constructor": "off",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
	},
}
