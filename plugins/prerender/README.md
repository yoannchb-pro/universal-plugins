# Prerender

Prerender a SPA application during build

## Installation

```
$ npm i @yoannchb/plugin-prerender
```

## Import

```ts
import prerender from "@yoannchb/plugin-prerender";
```

## Usage

Basic usage

```ts
await prerender({
    // Required - The path to of the builded app to prerender
    buildDir: path.resolve(__dirname, "./dist"),
    // Required - Routes to render
    routes: ["/", "/about", "/team", "/team/members"],
}),
```

## Vite

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

## Webpack

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

## Rollup

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
