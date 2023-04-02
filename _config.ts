import lume from "lume/mod.ts";

const site = lume({
  server: {
    page404: "/index.html"
  },
  // GitHub Pages only allows the / (root) or /docs folders to be selected to build the site
  dest: "./docs"
});
site.ignore("README.md");
site.copy("CNAME");

export default site;
