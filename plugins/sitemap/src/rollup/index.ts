import sitemap from "..";
import Options from "../types/options";

/**
 * Sitemap generator for rollup plugin
 * @param options
 * @returns
 */
function sitemapRollupPlugin(options: Options) {
  return {
    name: "prerenderRollupPlugin",
    generateBundle() {
      sitemap(options);
    },
  };
}

export default sitemapRollupPlugin;
