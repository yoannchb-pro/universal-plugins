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
buildDir: path.resolve(__dirname, "./dist"),
```

### Advanced usage

```ts

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
