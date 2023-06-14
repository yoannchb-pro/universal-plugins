import path from "path";
import fs from "fs";
import Options from "../types/options";

/**
 * Save the sitemap
 * @param options
 * @param xml
 */
function saveSiteMap(options: Options, xml: string) {
  const target = path.join(
    options.outputDir,
    options.fileName ?? "sitemap.xml"
  );
  fs.writeFileSync(target, xml);
}

export default saveSiteMap;
