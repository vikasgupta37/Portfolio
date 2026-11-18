# Portfolio frontend

Next.js App Router site with a static export for GitHub Pages.

## Development

```bash
yarn install
yarn dev
```

## Content

Edit `src/data/portfolio.ts`. It centralizes personal details, experience, education, skills, projects, certifications, achievements, social links, and site configuration. The older `src/data/mock.js` path re-exports the central data.

## Build and deploy

```bash
NEXT_PUBLIC_BASE_PATH=/Portfolio yarn build
```

Next exports the site to `out/`. The root GitHub Actions workflow builds this directory on pushes to `main` and deploys it to GitHub Pages. Set the repository's Pages source to **GitHub Actions**.
