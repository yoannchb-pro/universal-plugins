const ts = require("rollup-plugin-ts");
const terser = require("@rollup/plugin-terser");
const autoExternal = require("rollup-plugin-auto-external");

const pkg = require("./package.json");
const config = require("./tsconfig.json");

const node = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "umd",
      sourcemap: true,
    },
  ],
  plugins: [autoExternal(), ts(config), terser()],
};

module.exports = node;
