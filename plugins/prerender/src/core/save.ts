import Options from "../types/options";
import path from "path";
import fs from "fs";

function savePage(options: Options, route: string, html: string) {
  const target = path.join(
    options.outputDir ?? options.buildDir,
    route,
    "index.html"
  );
  const directory = path.dirname(target);

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  fs.writeFileSync(target, html);
}

export default savePage;
