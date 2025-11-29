# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment

### GitHub Pages (Recommended Quick Setup)

This repository is configured for automatic deployment to **GitHub Pages** when you push to the `main` branch.

1. Ensure the repository name matches the base path set in `vite.config.js` (`/portfolio/`). If you rename the repo, update `base` accordingly.
2. Commit and push all changes to `main`.
3. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will build and publish the contents of `dist` to a `gh-pages` branch.
4. In the repository settings under Pages, select the `gh-pages` branch if not auto-selected.

#### Local build
```bash
npm install
npm run build
```
The static output is in `dist/`.

### Alternative Hosting Options

- **Vercel**: Import the repo, framework auto-detected (Vite). No base path needed; remove `base` from `vite.config.js` if deploying here.
- **Netlify**: Set build command `npm run build` and publish directory `dist`. If using project sub-path removal, also remove `base`.
- **Firebase Hosting**: Use `firebase init hosting`, then deploy `dist`.
- **Cloudflare Pages**: Build command `npm run build`, output `dist`.

### Adjusting Base Path
If deploying to a root domain (e.g., `muhammadadil20.github.io` with that exact repo name), set `base: '/'` in `vite.config.js`.

### Environment Notes
No runtime server required; this is a static build. All navigation is in-page, so no special SPA fallback setup is needed.
