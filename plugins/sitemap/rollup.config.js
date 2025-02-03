const ts = require("rollup-plugin-ts");
const terser = require("@rollup/plugin-terser");

const pkg = require("./package.json");
const config = require("./tsconfig.json");

const node = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      name: "sitemap",
      sourcemap: true,
    },
  ],
  plugins: [ts(config), terser()],
};

module.exports = node;
