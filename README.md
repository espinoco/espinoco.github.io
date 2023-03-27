# Carlo Espino's Personal Site

This site uses [deno](https://github.com/denoland/deno) as the JavaScript runtime
and [lume](https://github.com/lumeland/lume) as the static site generator.

## Dependencies

| Project    | Version |
| ---------- | ------- |
| deno.land  | ^1.31.3 |

## Development

- Recommended: use [tea](https://github.com/teaxyz/cli) to get the deno dependency resolved based on the table above.
- `deno task serve` to start a local server with live reload
- `deno task lume` to build the static site under the `docs` folder

## Deployment

Push to the `master` branch to deploy changes. GitHub Pages will deploy the site from the `master` branch and use the `/docs` folder as the source.
