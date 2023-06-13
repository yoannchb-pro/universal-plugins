import puppeteer from "puppeteer";
import Options from "../types/options";
import { minify } from "html-minifier";
import { wait } from "../utils";

async function createRenderer(options: Options, port: number) {
  const browser = await puppeteer.launch({
    headless: options.renderer?.headless ?? "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  return {
    async render(route: string) {
      const page = await browser.newPage();

      /* We inject window on new document */
      if (options.renderer?.windowInject)
        await page.evaluateOnNewDocument((windowInjection) => {
          for (const property in windowInjection) {
            window[property as any] = windowInjection[property];
          }
        }, options.renderer.windowInject);

      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 10000,
      });

      /* We wait for a specific element */
      if (options.renderer?.renderAfterElementExist)
        await page.waitForSelector(options.renderer.renderAfterElementExist);
      /* We wait for a specific event */
      if (options.renderer?.renderAfterDocumentEvent)
        await page.evaluate((eventName) => {
          return new Promise((resolve) => {
            document.addEventListener(eventName, resolve);
          });
        }, options.renderer.renderAfterDocumentEvent);
      /* NOT RECOMMENDED: Waiting time */
      if (options.renderer?.renderAfterTime)
        await wait(options.renderer?.renderAfterTime);

      const html = minify(await page.content(), options.minify);

      await page.close();

      return { route, html };
    },
    async close() {
      await browser.close();
    },
  };
}

export default createRenderer;
