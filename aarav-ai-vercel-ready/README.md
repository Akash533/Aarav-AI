
# Aarav AI HUD — Vercel-ready

This folder is ready to deploy to Vercel for a public HTTPS preview.

## Deploy to Vercel (quick)
1. Create a GitHub repo and push this folder.
2. Sign in to Vercel with GitHub.
3. Import the repo. Settings:
   - Framework: Other
   - Output dir: /
   - Build command: (leave blank)
4. Deploy — you'll get an https://...vercel.app URL.

## Local test
1. npm install
2. npx http-server -c-1 . -p 3000
3. Open http://localhost:3000 or use ngrok for public HTTPS.
