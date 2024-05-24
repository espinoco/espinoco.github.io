import lume from "lume/mod.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import sitemap from "lume/plugins/sitemap.ts";
import metas from "lume/plugins/metas.ts";
import date from "lume/plugins/date.ts";
import internalLinks from "./plugins/internal_links.ts";

import lang_bash from "https://unpkg.com/@highlightjs/cdn-assets@11.6.0/es/languages/bash.min.js";
import lang_vimscript from "https://unpkg.com/@highlightjs/cdn-assets@11.6.0/es/languages/vim.min.js";

const site = lume({
  src: "./src",
  dest: "./build",
  server: {
    page404: "/404.html"
  },
  location: new URL("https://espino.co") // needed for sitemap to set the url
});
site.use(nunjucks());
site.copy("CNAME");
site.copy([".mp4", ".png", ".xml", ".svg", ".webmanifest", ".ico"]);
site.use(slugifyUrls({ // Slugify all page URLs to remove potentially conflicting characters
  extensions: [".html"], // To slugify only HTML pages
}));
site.use(
  codeHighlight({
    languages: {
      bash: lang_bash,
      vimscript: lang_vimscript
    }
  })
);
site.use(sitemap());
site.use(metas());
site.use(date());
site.use(internalLinks());

export default site;
