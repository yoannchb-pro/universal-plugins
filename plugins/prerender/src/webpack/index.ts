import type { Compiler } from "webpack";
import prerender from "..";
import Options from "../types/options";

class PrerenderWebpackPlugin {
  constructor(private options: Options) {}

  apply(compiler: Compiler) {
    compiler.hooks.run.tap("PrerenderWebpackPlugin", async () => {
      await prerender(this.options);
    });
  }
}

export default PrerenderWebpackPlugin;
