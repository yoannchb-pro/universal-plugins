import Options from "./types/options";
import { log } from "./utils";
import createPage from "./core/page";
import saveSiteMap from "./core/save";

const sitemap = (options: Options) => {
  const website = options.website;

  options.website = website.endsWith("/")
    ? website.substring(0, website.length - 1)
    : website;

  log("Generating sitemap init");

  const xml = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${options.routes.map((route) => createPage(options, route)).join("")}
        </urlset>
      `.replace(/[\n\t]|\s{2,}/gi, "");
  log("XML generated with sucess");

  saveSiteMap(options, xml);
  log("Sitemap saved");
};

export default sitemap;
