import type { Plugin } from "vite";
import Options from "../types/options";
import imgCompressor from "..";

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

export default imgCompressorVitePlugin;
