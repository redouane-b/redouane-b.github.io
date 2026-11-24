# Redouane Bouazza · Portfolio

Source of **https://redouane-b.github.io/**, the personal site of Redouane Bouazza, Senior Data & AI Solutions at Karetis (AI & data for pharma sales performance · Lyon, France).

Built with React 19 + Vite. Every push to `main` is built and published by GitHub Actions (`.github/workflows/deploy.yml`). In **Settings → Pages**, the source must be **GitHub Actions**.

## Develop

```bash
npm install
npm run dev
```

Content lives at the top of `src/App.jsx`. Case-study cards have an `impact` field: leave it `null` until there is a real number. The page is public, so keep clients anonymous. Search-engine metadata (title, description, Open Graph, schema.org `Person`) lives in `index.html`. Update its `dateModified` and `public/sitemap.xml` `lastmod` when the content changes.
