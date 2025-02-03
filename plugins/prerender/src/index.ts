import { Compiler } from "webpack";
import prerender from "./core";
import Options from "./types/options";
import type { Plugin } from "vite";

/**
 * Rollup plugin to prerender a website
 * @param options
 * @returns
 */
function prerenderRollupPlugin(options: Options) {
  return {
    name: "prerenderRollupPlugin",
    async generateBundle() {
      await prerender(options);
    },
  };
}

/**
 * Vite plugin to prerender a website
 * @param options
 * @returns
 */
const prerenderVitePlugin = (options: Options): Plugin => {
  return {
    name: "prerenderVitePlugin",
    apply: "build",
    enforce: "post",
    async closeBundle() {
      await prerender(options);
    },
  };
};

class PrerenderWebpackPlugin {
  constructor(private options: Options) {}

  apply(compiler: Compiler) {
    compiler.hooks.run.tap("PrerenderWebpackPlugin", async () => {
      await prerender(this.options);
    });
  }
}

export default PrerenderWebpackPlugin;

export {
  prerender,
  prerenderRollupPlugin,
  prerenderVitePlugin,
  PrerenderWebpackPlugin,
};
