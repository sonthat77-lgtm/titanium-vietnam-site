# Titanium Vietnam — Website (Ready to Run)

## Run locally
```bash
npm i
npm run dev
```
Open http://localhost:3000

## Deploy with Vercel (easiest)
- Push this folder to a GitHub repo
- Go to https://vercel.com → New Project → Import repo → Deploy

## Deploy with Firebase Hosting (Google)
```bash
npm i -g firebase-tools
firebase login
npm run build      # outputs ./out
firebase init hosting   # choose project, public dir: out, SPA: yes
firebase deploy
```
