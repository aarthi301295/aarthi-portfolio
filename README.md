# aarthi-portfolio

Modern portfolio site — monospace gradient hero, mesh gradient background, honest "Aspiring AI Engineer" framing. Built with Next.js 14 (App Router) + Tailwind CSS. Deploys to Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before deploying — edit two placeholders

Open `app/page.tsx` and replace at the top:

## Deploy to Vercel

```bash
git init
git add .
git commit -m "initial portfolio"
git branch -M main
git remote add origin https://github.com/your-username/aarthi-portfolio.git
git push -u origin main
```

Then go to https://vercel.com → Add New Project → import the repo → Deploy.
Every future `git push` auto-deploys.

## Adding projects later

The projects section currently shows three dashed placeholder rows with "COMING SOON" tags. To add a real project, replace the placeholder block inside the `Projects` section in `app/page.tsx`.

## Design notes

- **Fonts**: Inter (body) + JetBrains Mono (name, code-style accents) via `next/font/google`
- **Colors**: Tailwind indigo/slate + custom `ink` (#0A0A0A). Mesh gradient background layered in `globals.css`.
- **Name gradient**: cyan → blue → indigo → violet, applied via `.name-gradient` CSS class using `background-clip: text`.
