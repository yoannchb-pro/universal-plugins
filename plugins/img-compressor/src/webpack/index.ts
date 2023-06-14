import type { Compiler } from "webpack";
import imgCompressor from "..";
import Options from "../types/options";

class ImgCompressorWebpackPlugin {
  constructor(private options: Options) {}

  apply(compiler: Compiler) {
    compiler.hooks.run.tap("ImgCompressorWebpackPlugin", async () => {
      await imgCompressor(this.options);
    });
  }
}

export default ImgCompressorWebpackPlugin;
