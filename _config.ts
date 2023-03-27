import lume from "lume/mod.ts";

const site = lume({
  server: {
    page404: "/index.html"
  },
  prettyUrls: false,
  dest: "./docs" // GitHub pages only allows / (root) or /docs folders to be selected to build the site
});
site.ignore("README.md", "Private");
site.copy("CNAME");
site.copy("js");

export default site;
