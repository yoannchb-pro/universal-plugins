import imgCompressor from "..";
import Options from "../types/options";

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

export default imgCompressorRollupPlugin;
