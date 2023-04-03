import lume from "lume/mod.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import sitemap from "lume/plugins/sitemap.ts";
import metas from "lume/plugins/metas.ts";

import lang_bash from "https://unpkg.com/@highlightjs/cdn-assets@11.6.0/es/languages/bash.min.js";
import lang_vimscript from "https://unpkg.com/@highlightjs/cdn-assets@11.6.0/es/languages/vim.min.js";

const site = lume({
  src: "./src",
  // GitHub Pages only allows the / (root) or /docs folders to be selected to build the site
  dest: "./docs",
  server: {
    page404: "/404.html"
  },
  location: new URL("https://carloespino.com") // needed for sitemap to set the url
});
site.copy("CNAME");
site.use(slugifyUrls()); // Slugify all page URLs to remove potentially conflicting characters
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

export default site;
