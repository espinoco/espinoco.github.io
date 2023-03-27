# Carlo Espino's Personal Site

## Dependencies

| Project    | Version |
| ---------- | ------- |
| deno.land  | ^1.31.3 |

## Usage

- `deno task serve` to start a local server
- `deno task lume` to build static site under `_site`
- Push `_site` contents to the `master` branch to deploy changes
- Push sources to the `src` branch

## Development

- Recommended: use [tea](https://github.com/teaxyz/cli) to get the dependencies table above resolved automatically upon `cd`.
- Uses [deno](https://github.com/denoland/deno) as JavaScript runtime
- Uses [lume](https://github.com/lumeland/lume) as the static site generator
