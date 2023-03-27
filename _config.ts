import lume from "lume/mod.ts";

const site = lume({
  server: {
    page404: "/index.html"
  },
  prettyUrls: false
});
site.ignore("README.md", "Private");
site.copy("CNAME");
site.copy("js");

export default site;
