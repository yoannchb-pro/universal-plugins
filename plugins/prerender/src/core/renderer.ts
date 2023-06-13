import puppeteer from "puppeteer";
import Options from "../types/options";
import { minify } from "html-minifier";

async function createRenderer(options: Options, port: number) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  return {
    async render(route: string) {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: "domcontentloaded",
      });
      const html = minify(await page.content());
      await page.close();
      return { route, html };
    },
    async close() {
      await browser.close();
    },
  };
}

export default createRenderer;
