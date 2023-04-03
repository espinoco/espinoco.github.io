import lume from "lume/mod.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";

const site = lume({
  src: "./src",
  // GitHub Pages only allows the / (root) or /docs folders to be selected to build the site
  dest: "./docs",
  server: {
    page404: "/index.html"
  }
});
site.copy("CNAME");
site.use(slugifyUrls()); // Slugify all page URLs to remove potentially conflicting characters

export default site;
