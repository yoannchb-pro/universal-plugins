type Route =
  | string
  | {
      route: string;
      priority: number;
      lastmod: `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
      changefreq:
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never";
    };

type Options = {
  outputDir: string;
  website: string;
  routes: Route[];
  fileName?: string;
  disableMinify?: boolean;
};

export default Options;
