import type { Options as HtmlMinifierOptions } from "html-minifier";

type RendererOptions = {
  windowInject: { [key: string]: any };
  renderAfterDocumentEvent: string;
  renderAfterElementExist?: string;
  renderAfterTime?: number;
  headless?: boolean;
};

type Options = {
  buildDir: string;
  routes: string[];
  outputDir?: string;
  indexDir?: string;
  minify?: HtmlMinifierOptions;
  renderer?: RendererOptions;
};

export default Options;
