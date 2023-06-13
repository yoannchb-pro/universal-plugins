import path from "path";
import fs from "fs";
import Options from "../types/options";

function saveSiteMap(options: Options, xml: string) {
  const target = path.join(options.buildDir, "sitemap.xml");
  fs.writeFileSync(target, xml);
}

export default saveSiteMap;
