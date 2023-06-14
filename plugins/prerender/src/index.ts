import getPort from "get-port";
import Options from "./types/options";
import createServer from "./core/server";
import createRenderer from "./core/renderer";
import savePage from "./core/save";
import { log } from "./utils";

/**
 * Prerender main function
 * @param options
 */
const prerender = async (options: Options): Promise<void> => {
  log("Starting prerendering");
  const port = await getPort();
  log(`Rendering on http://localhost:${port}`);

  const server = await createServer(options, port);
  log("Server created with success");
  const renderer = await createRenderer(options, port);
  log("Renderer created with success");

  const renderedHTML = await Promise.allSettled(
    options.routes.map(renderer.render)
  );

  for (const result of renderedHTML) {
    if (result.status === "rejected") {
      log(result.reason, true);
      continue;
    }

    savePage(options, result.value.route, result.value.html);
    log(`${result.value.route} rendered with success`);
  }

  renderer.close();
  log("Renderer closed");
  server.close();
  log("Server closed");

  log("Prenrendering success");
};

export default prerender;
