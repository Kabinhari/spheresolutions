# SphereSolutions

Static business website for Sphere IT Solution.

## Deployment

The production site is deployed as a static React build to GitHub Pages using
GitHub Actions.

- Workflow: `.github/workflows/deploy.yml`
- Source app: `frontend/`
- Build output: `frontend/build`
- Trigger: pushes to `main` or manual `workflow_dispatch`

The `backend/` folder is not part of the production deployment. It was created
for an earlier form/database approach, but the live contact form uses Web3Forms
from the static frontend instead.

## GitHub Pages Setup

In GitHub, open the repository settings and configure:

1. `Settings` -> `Pages`
2. `Build and deployment`
3. Source: `GitHub Actions`

The workflow will build and publish the site after the next push to `main`.

## Contact Form

The contact form reads `REACT_APP_WEB3FORMS_KEY` at build time.

Add this repository secret before deploying:

```text
REACT_APP_WEB3FORMS_KEY
```

If the secret is not set, the workflow currently uses the fallback key already
configured in `.github/workflows/deploy.yml`.

## Local Development

```bash
cd frontend
yarn install
yarn start
```

## Local Production Build

```bash
cd frontend
yarn install --frozen-lockfile
yarn build
```
