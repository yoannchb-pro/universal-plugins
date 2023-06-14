import prerender from "..";
import Options from "../types/options";

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

export default prerenderRollupPlugin;
