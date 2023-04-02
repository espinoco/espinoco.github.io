# Carlo Espino's Personal Site

This site uses [deno](https://github.com/denoland/deno) as the JavaScript runtime and [lume](https://github.com/lumeland/lume) as the static site generator.

- The `src` directory includes all of the pages to be generated.
- The `_includes` directory includes the layouts of the site.
- The `_data.yml` file includes the shared data across pages.

Each page needs a front matter with a `title` variable with the title of the page which is set as the `h1` heading. If you want the page to be listed in the home page, set the `publish_as_page_in_home_listings` variable to `true`.

## Dependencies

| Project    | Version |
| ---------- | ------- |
| deno.land  | ^1.31.3 |

Tip: you can use [tea](https://github.com/teaxyz/cli) to get the dependencies table above resolved as a developer environment.

## Development

- `deno task serve` to start a local server with live reload.
- `deno task lume` to build the static site under the `docs` directory. GitHub Pages only allows the `/` (root) or `/docs` directories to be selected to serve the site.

## Deployment

Push to the `master` branch to deploy changes. GitHub Pages will deploy the site from the `master` branch and use the `/docs` directory as the source. The `CNAME` file is required by GitHub Pages to set the custom domain name.
