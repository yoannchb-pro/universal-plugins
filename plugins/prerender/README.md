# Plugin-Prerender

Universal plugin to prerender SPA website

## Summary

- [Plugin-Prerender](#plugin-prerender)
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
$ npm i @yoannchb/plugin-prerender
```

## Import

```ts
import prerender from "@yoannchb/plugin-prerender";
```

## Usage

### Basic usage

```ts
import path from "path";

await prerender({
    // Required - The path to of the builded app to prerender
    buildDir: path.resolve(__dirname, "./dist"),
    // Required - Routes to render
    routes: ["/", "/about", "/team", "/team/members"],
}),
```

### Advanced usage

```ts
await prerender({
    // Required - The path to of the builded app to prerender
    buildDir: path.resolve(__dirname, "./dist"),

    // Required - Routes to render
    routes: ["/", "/about", "/team", "/team/members"],

    // Optional - The path your rendered app should be output to
    outputDir: path.join(__dirname, 'prerendered'),

    // Optional - The path of the index.html file
    indexDir: path.join(__dirname, 'dist'),

    // Optional - Options for the HTML minifier (https://github.com/kangax/html-minifier#options-quick-reference)
    minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
    },

    renderer: {
        // Optional - Any value you want ot inject in window (example: window.foo)
        windowInject: {
          foo: 'bar'
        },

        // Optional -Wait before rendering that the specified event is dispatched on the document
        renderAfterDocumentEvent: 'some-event',

        // Optional - Wait before rendering that the specified element is detected
        renderAfterElementExists: '#root',

        // NOT RECOMMENDED
        // Optional - Wait before rendering that a certain amount of time has passed
        renderAfterTime: 10000, // Wait 10 seconds.

        // Optional - Display the browser window or not when rendering (Useful for debugging)
        headless: false
    }
}),
```

## Plugin integration

### Vite

```ts
import prerenderVitePlugin from "@yoannchb/plugin-prerender/vite";

export default {
  plugins: [
    prerenderVitePlugin({
      /* options */
    }),
  ],
};
```

### Webpack

```ts
import PrerenderWebpackPlugin from "@yoannchb/plugin-prerender/webpack";

export default {
  plugins: [
    new PrerenderWebpackPlugin({
      /* options */
    }),
  ],
};
```

### Rollup

```ts
import prerenderRollupPlugin from "@yoannchb/plugin-prerender/rollup";

export default {
  plugins: [
    prerenderRollupPlugin({
      /* options */
    }),
  ],
};
```
