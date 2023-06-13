import tempjs from "tempjs-template";
import path from "path";
import fs from "fs";

type Plugin = { name: string; description: string };

function getPlugins(): Plugin[] {
  const plugins: Plugin[] = [];

  const actualPath = path.resolve(__dirname, "../plugins");
  const files = fs.readdirSync(actualPath);

  const directories = files.filter((file) => {
    const stats = fs.statSync(`${actualPath}/${file}`);
    return stats.isDirectory();
  });

  for (const plugin of directories) {
    const description = JSON.parse(
      fs.readFileSync(path.join(plugin, "./package.json"), "utf8")
    ).description;
    plugins.push({ name: plugin, description });
  }

  return plugins;
}

const compiled = tempjs.compileFromFile(
  path.resolve(__dirname, "../template/template.md"),
  {
    plugins: getPlugins(),
  }
);

fs.writeFileSync(path.resolve(__dirname, "../README.md"), compiled, "utf-8");
