import type { Compiler } from "webpack";
import sitemap from "..";
import Options from "../types/options";

class SitemapWebpackPlugin {
  constructor(private options: Options) {}

  apply(compiler: Compiler) {
    compiler.hooks.run.tap("SitemapWebpackPlugin", async () => {
      sitemap(this.options);
    });
  }
}

export default SitemapWebpackPlugin;
