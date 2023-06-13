import { log } from "../utils";
import Options from "../types/options";

function generateLastMod() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function generatePriority(options: Options, route: string) {
  return options.routes.indexOf(route) === 0 ? "1.0" : "0.8";
}

function createPage(options: Options, route: Options["routes"][number]) {
  const isRouteObject = typeof route === "object";
  const routePath = isRouteObject ? route.route : route;

  try {
    const priority = isRouteObject
      ? route.priority ?? generatePriority(options, route.route)
      : route;
    const lastMode = isRouteObject
      ? route.lastmod ?? generateLastMod()
      : generateLastMod();
    const changeFreq = isRouteObject ? route.changefreq ?? "never" : "never";

    const page = `<url>
    <loc>${options.website}${routePath}</loc>
    <lastmod>${lastMode}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
</url>`;

    log(`${routePath} rendered with sucess`);

    return page;
  } catch (err) {
    log(`${routePath} failed`, true);
    log(err, true);
  }
}

export default createPage;
