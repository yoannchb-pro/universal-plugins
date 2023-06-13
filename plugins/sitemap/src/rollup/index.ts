import sitemap from "..";
import Options from "../types/options";

function sitemapRollupPlugin(options: Options) {
  return {
    name: "prerenderRollupPlugin",
    generateBundle() {
      sitemap(options);
    },
  };
}

export default sitemapRollupPlugin;
