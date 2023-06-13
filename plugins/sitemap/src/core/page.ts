import { log } from "../utils";
import Options from "../types/options";

function createPage(options: Options, route: string) {
  const priority = options.routes.indexOf(route) === 0 ? "1.0" : "0.8";

  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const page = `<url>
            <loc>${options.website}${route}</loc>
            <lastmod>${year}-${month}-${day}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>${priority}</priority>
          </url>`;

  log(`${route} rendered with sucess`);

  return page;
}

export default createPage;
