# Dexter AI Website

Professional static website for **Dexter AI**, an AI-powered workshop assistant built in public.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Static build compatible with Cloudflare Pages

## Run locally

```bash
npm install
npm run dev
```

Vite will print the local URL, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

The production build is generated in `dist/`.

## Edit project data

Most public-facing values are in:

- `src/config/project.ts` - project name, tagline, creator support target, current amount, developer and contact email
- `src/config/links.ts` - support, social and GitHub links

## Publish with Cloudflare Pages

1. Open Cloudflare Dashboard.
2. Go to **Workers & Pages**.
3. Choose **Create application**.
4. Select **Pages** and connect your GitHub repository.
5. Use these build settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Deploy the site.

No backend is required. This project builds into static files and is ready for Cloudflare Pages.
