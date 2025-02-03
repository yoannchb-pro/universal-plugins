import { Compiler } from "webpack";
import imgCompressor from "./core";
import Options from "./types/options";
import type { Plugin } from "vite";

/**
 * Image compressor plugin for rollup
 * @param options
 * @returns
 */
function imgCompressorRollupPlugin(options: Options) {
  return {
    name: "imgCompressorRollupPlugin",
    async generateBundle() {
      await imgCompressor(options);
    },
  };
}

/**
 * Image compressor webpack plugin
 */
class ImgCompressorWebpackPlugin {
  constructor(private options: Options) {}

  apply(compiler: Compiler) {
    compiler.hooks.run.tap("ImgCompressorWebpackPlugin", async () => {
      await imgCompressor(this.options);
    });
  }
}

/**
 * Image compressor plugin for vitejs
 * @param options
 * @returns
 */
const imgCompressorVitePlugin = (options: Options): Plugin => {
  return {
    name: "imgCompressorVitePlugin",
    apply: "build",
    enforce: "post",
    async closeBundle() {
      await imgCompressor(options);
    },
  };
};

export {
  imgCompressor,
  imgCompressorRollupPlugin,
  ImgCompressorWebpackPlugin,
  imgCompressorVitePlugin,
};
