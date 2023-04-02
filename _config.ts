import lume from "lume/mod.ts";

const site = lume({
  src: "./src",
  // GitHub Pages only allows the / (root) or /docs folders to be selected to build the site
  dest: "./docs",
  server: {
    page404: "/index.html"
  }
});
site.copy("CNAME");

export default site;
