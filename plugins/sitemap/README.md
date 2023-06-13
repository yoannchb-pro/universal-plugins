# Plugin-Sitemap

Prerender a SPA application during build

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

```

### Advanced usage

```ts

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
