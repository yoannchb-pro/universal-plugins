import type imageminGifsicle from "imagemin-gifsicle";
import type imageminMozjpeg from "imagemin-mozjpeg";
import type imageminOptipng from "imagemin-optipng";
import type { Options as SVGOOptions } from "imagemin-svgo";

type Options = {
  baseDir: string;
  outputDir?: string;
  include?: string[];
  plugins?: {
    gifsicle?: imageminGifsicle.Options;
    mozjpeg?: imageminMozjpeg.Options;
    optipng?: imageminOptipng.Options;
    svgo?: SVGOOptions;
  };
};

export default Options;
