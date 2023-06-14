import path from "path";
import Options from "./types/options";
import { log } from "./utils";
import gulp from "gulp";
import imagemin from "gulp-imagemin";

/**
 * Compress image from a specific path
 * @param options
 * @param dir
 * @returns
 */
function compress(options: Options, dir: string) {
  return new Promise<string>((resolve) => {
    gulp
      .src(path.join(options.baseDir, dir))
      .pipe(
        imagemin([
          imagemin.gifsicle(options.plugins?.gifsicle ?? { interlaced: true }),
          imagemin.mozjpeg(
            options.plugins?.mozjpeg ?? { quality: 75, progressive: true }
          ),
          imagemin.optipng(
            options.plugins?.optipng ?? { optimizationLevel: 5 }
          ),
          imagemin.svgo(
            options.plugins?.svgo ?? {
              plugins: [
                { name: "removeViewBox", active: true },
                { name: "cleanupIDs", active: false },
              ],
            }
          ),
        ])
      )
      .pipe(
        gulp.dest(path.join(options.outputDir ?? options.baseDir, dir), {
          overwrite: true,
        })
      )
      .on("end", () => resolve(dir));
  });
}

/**
 * Image compressor main function
 * @param options
 */
const imgCompressor = async (options: Options): Promise<void> => {
  log("Starting image compression");

  options.include ??= ["*"];
  options.outputDir ??= options.baseDir;

  let promises: Promise<string>[] = [];
  for (const dir of options.include) {
    promises.push(compress(options, dir));
  }

  const allPromisesDone = await Promise.allSettled(promises);

  for (const promiseDone of allPromisesDone) {
    if (promiseDone.status === "rejected") {
      log(promiseDone.reason, true);
      continue;
    }

    log(`${promiseDone.value} compressed with sucess`);
  }

  log("Image compression success");
};

export default imgCompressor;
