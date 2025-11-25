
  # Freelancing Website Landing Page

  This is a code bundle for Freelancing Website Landing Page. The original project is available at https://www.figma.com/design/HHFfESUiBnxJJU0dlV6B7P/Freelancing-Website-Landing-Page.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  ## GitHub Pages Deployment
  
  This project includes a GitHub Actions workflow at `.github/workflows/gh-pages-deploy.yml` that:
  - Installs dependencies and builds with `npm run build` (outDir is configured as `build/` in `vite.config.ts`).
  - Deploys the site via GitHub Pages using the modern `actions/upload-pages-artifact` and `actions/deploy-pages` flow.
  
  The workflow also automatically sets the Vite `base` value for GitHub Pages to `/${REPO_NAME}/` by computing the repository name at build time.
  
  To enable GitHub Pages for this repository:
  1. Commit & push the workflow to `main`.
  2. Go to the repository's *Settings → Pages* and ensure the source is set to *GitHub Actions*.
  3. Optionally, set a custom domain if you use one.
  