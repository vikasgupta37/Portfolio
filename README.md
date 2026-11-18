# Vikas Gupta — Portfolio

A responsive personal portfolio for Vikas Gupta, Forward Deployment Engineer I (AI Developer) at HCLTech's OpenAI Adoption CoE. Built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

```bash
cd frontend
yarn install
yarn dev
```

Open `http://localhost:3000`.

## Portfolio content

Update [`frontend/src/data/portfolio.ts`](frontend/src/data/portfolio.ts) to change profile details, experience, education, skills, projects, certifications, achievements, social profiles, or section settings. `frontend/src/data/mock.js` re-exports this data for older components.

Project status, dates, verification links, resume files, and repository URLs are only shown when supplied. The contact form is a labeled placeholder until a submission service is configured; the email link works now. The GitHub repository section reads public repository data from GitHub at runtime and omits the feed if it is unavailable.

## GitHub Pages deployment

Push to `main` to build and deploy the static export with GitHub Actions. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The workflow sets `NEXT_PUBLIC_BASE_PATH` from the repository name, builds `frontend/out`, then deploys the artifact.

For a local production build:

```bash
cd frontend
NEXT_PUBLIC_BASE_PATH=/Portfolio yarn build
```

The generated static site is in `frontend/out`.
