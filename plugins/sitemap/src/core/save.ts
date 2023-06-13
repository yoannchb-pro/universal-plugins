import path from "path";
import fs from "fs";
import Options from "../types/options";

function saveSiteMap(options: Options, xml: string) {
  const target = path.join(
    options.outputDir,
    options.fileName ?? "sitemap.xml"
  );
  fs.writeFileSync(target, xml);
}

export default saveSiteMap;
