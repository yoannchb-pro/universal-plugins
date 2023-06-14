import prerender from "..";
import Options from "../types/options";

function prerenderRollupPlugin(options: Options) {
  return {
    name: "prerenderRollupPlugin",
    async generateBundle() {
      await prerender(options);
    },
  };
}

export default prerenderRollupPlugin;
