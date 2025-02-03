import { Compiler } from "webpack";
import sitemap from "./core";
import Options from "./types/options";
import type { Plugin } from "vite";

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

class SitemapWebpackPlugin {
  constructor(private options: Options) {}

  apply(compiler: Compiler) {
    compiler.hooks.run.tap("SitemapWebpackPlugin", async () => {
      sitemap(this.options);
    });
  }
}

export default SitemapWebpackPlugin;

export {
  sitemap,
  sitemapRollupPlugin,
  sitemapVitePlugin,
  SitemapWebpackPlugin,
};
