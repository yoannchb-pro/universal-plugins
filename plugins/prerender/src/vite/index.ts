import type { Plugin } from "vite";
import Options from "../types/options";
import prerender from "..";

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

export default prerenderVitePlugin;
