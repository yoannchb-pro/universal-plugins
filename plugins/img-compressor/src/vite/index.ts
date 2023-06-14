import type { Plugin } from "vite";
import Options from "../types/options";
import prerender from "..";

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
