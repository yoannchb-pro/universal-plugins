import type { Plugin } from "vite";
import Options from "../types/options";
import sitemap from "..";

/**
 * Sitemap generator plugin for vitejs
 * @param options
 * @returns
 */
const sitemapVitePlugin = (options: Options): Plugin => {
  return {
    name: "sitemapVitePlugin",
    apply: "build",
    enforce: "post",
    closeBundle() {
      sitemap(options);
    },
  };
};

export default sitemapVitePlugin;
