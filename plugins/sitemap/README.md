# Plugin-Sitemap

Generate a sitemap for your website on build

## Summary

- [Plugin-Sitemap](#plugin-sitemap)
  - [Summary](#summary)
  - [Installation](#installation)
  - [Import](#import)
  - [Usage](#usage)
    - [Basic usage](#basic-usage)
    - [Advanced usage](#advanced-usage)
  - [Plugin integration](#plugin-integration)
    - [Vite](#vite)
    - [Webpack](#webpack)
    - [Rollup](#rollup)

## Installation

```
$ npm i @yoannchb/plugin-sitemap
```

## Import

```ts
import sitemap from "@yoannchb/plugin-sitemap";
```

## Usage

### Basic usage

```ts
import path from "path";

sitemap({
  // Required - The path where the sitemap is saved
  outputDir: path.resolve(__dirname, "./dist"),

  //Required - The main website
  website: "https://example.com",

  // Required - Routes to render
  routes: ["/", "/about", "/team", "/team/members"],

  // Routes can also be gived in this format
  // routes: [
  //   {
  //     route: "/",
  //     priority: 1.0,
  //   },
  //   {
  //     route: "/about",
  //     priority: 0.8,
  //     lastmod: "2023-06-13",
  //   },
  //   {
  //     route: "/team/members",
  //     changefreq: "daily",
  //   },
  // ],
});
```

### Advanced usage

```ts
import path from "path";

sitemap({
  // Required - The path where the sitemap is saved
  outputDir: path.resolve(__dirname, "./dist"),

  //Required - The main website
  website: "https://example.com",

  // Required - Routes to render
  routes: ["/", "/about", "/team", "/team/members"],

  //Optional - The sitemap file name (by default it's sitemap.xml)
  fileName: "new-name.xml",

  //Optional - If you want to minify the xml or not (by default it's false)
  disableMinify: true,
});
```

## Plugin integration

### Vite

```ts
import sitemapVitePlugin from "@yoannchb/plugin-sitemap/vite";

export default {
  plugins: [
    sitemapVitePlugin({
      /* options */
    }),
  ],
};
```

### Webpack

```ts
import SitemapWebpackPlugin from "@yoannchb/plugin-sitemap/webpack";

export default {
  plugins: [
    new SitemapWebpackPlugin({
      /* options */
    }),
  ],
};
```

### Rollup

```ts
import sitemapRollupPlugin from "@yoannchb/plugin-sitemap/rollup";

export default {
  plugins: [
    sitemapRollupPlugin({
      /* options */
    }),
  ],
};
```
