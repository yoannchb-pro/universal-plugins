# Plugin-img-compressor

Universal plugin to compress image for your website

## Summary

- [Plugin-img-compressor](#plugin-img-compressor)
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
$ npm i @yoannchb/plugin-img-compressor
```

## Import

```ts
import imgCompressor from "@yoannchb/plugin-img-compressor";
```

## Usage

### Basic usage

```ts
import path from "path";

await imgCompressor({
  //Required - The dir of your project to scan
  baseDir: path.resolve(__dirname, "./dist"),
});
```

### Advanced usage

```ts
await imgCompressor({
  //Required - The dir of your project to scan
  baseDir: path.resolve(__dirname, "./dist"),

  //Optional - The dir to ouput the compressed images
  outputDir: path.resolve(__dirname, "./output"),

  //Optional - What you want to compress
  include: ["./assets/*.{png,svg}"],

  //Optional - Configure the differents image compressor plugins
  plugins: {
    //Optional - see https://www.npmjs.com/package/imagemin-gifsicle
    //DEFAULT:
    gifsicle: { interlaced: true },

    //Optional - see https://www.npmjs.com/package/imagemin-mozjpeg
    //DEFAULT:
    mozjpeg: { quality: 75, progressive: true },

    //Optional - see https://www.npmjs.com/package/imagemin-optipng
    //DEFAULT:
    optipng: { optimizationLevel: 5 },

    //Optional - see https://www.npmjs.com/package/imagemin-svgo
    //DEFAULT
    svgo: {
      plugins: [
        { name: "removeViewBox", active: true },
        { name: "cleanupIDs", active: false },
      ],
    },
  },
});
```

## Plugin integration

### Vite

```ts
import imgCompressorVitePlugin from "@yoannchb/plugin-img-compressor/vite";

export default {
  plugins: [
    imgCompressorVitePlugin({
      /* options */
    }),
  ],
};
```

### Webpack

```ts
import ImgCompressorWebpackPlugin from "@yoannchb/plugin-img-compressor/webpack";

export default {
  plugins: [
    new ImgCompressorWebpackPlugin({
      /* options */
    }),
  ],
};
```

### Rollup

```ts
import imgCompressorRollupPlugin from "@yoannchb/plugin-img-compressor/rollup";

export default {
  plugins: [
    imgCompressorRollupPlugin({
      /* options */
    }),
  ],
};
```
