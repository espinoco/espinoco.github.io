# Carlo Espino's Personal Site

This site uses [deno](https://github.com/denoland/deno) as the JavaScript runtime and [lume](https://github.com/lumeland/lume) as the static site generator.

## Dependencies

| Project    | Version |
| ---------- | ------- |
| deno.land  | ^1.41.2 |

## Development

- `deno task serve` to start a local server with live reload.
- `deno task lume` to build the static site under the `docs` directory. GitHub Pages only allows the `/` (root) or `/docs` directories to be selected to serve the site.

### Structure

- The `src` directory includes all of the pages to be generated.
- The `_includes` directory includes the layouts of the site.
- The `_data.yml` file stores the shared data across pages.

Each page needs a front matter with a `title` variable with the title of the page which is set as the `h1` heading and in the title element.

There are two kinds of pages, the nav pages and the non-nav pages. The nav pages are listed in the navigation element and non-nav pages are listed in the homepage.
- To make a page a nav page, set the variable `is_nav_page` to `true`, then set the `nav_text` variable to the text to display in the nav link, and then set the `nav_order` to a strictly increasing integer to set its order in the nav element.
- The non-nav pages require no specific variables to be set, they'll get listed in the homepage and use the `title` variable as the text for the link to that page.

### Plugins

- [Slugify URLs](https://lume.land/plugins/slugify_urls/): converts all URLs in your HTML documents by removing or replacing potentially conflicting characteres like accents, spaces, etc.
- [Code Highlight](https://lume.land/plugins/code_highlight/): uses the highlight.js library to search and highlight the syntax code of any `<pre><code>` element.
- [Sitemap](https://lume.land/plugins/sitemap/): generates a sitemap.xml file automatically with all your pages, which is useful for SEO. It also creates a robots.txt
- [Metas](https://lume.land/plugins/metas/): generates `<meta>` tags in your HTML pages for Open graph, Twitter cards, Schema.org, and SEO purposes.
- Internal Links: custom plugin WIP under `plugins/internal_links.ts` to implement WikiLinks (Internal Links) preprocessing for markdown files.

## Deployment

Push to the `master` branch to deploy changes. GitHub Pages will deploy the site from the `master` branch and use the `/docs` directory as the source. The `CNAME` file is required by GitHub Pages to set the custom domain name.
