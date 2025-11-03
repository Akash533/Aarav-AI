
# Aarav AI — Vercel-ready

This folder contains two AI assistant interfaces ready to deploy to Vercel:

1. **Desktop HUD** (`index.html`) - Original desktop-focused control interface
2. **Mobile App** (`mobile-app.html`) - Complete multi-screen mobile experience

## 🎨 New: Mobile App UI/UX

A modern, multi-screen mobile application inspired by the Ello AI Assistant design with:
- 5 complete screens (Home, Tasks, Content Generator, Chat, Settings)
- Soft gradient design with rounded shapes
- Cross-platform support (Windows, iOS, Android)
- Progressive Web App (PWA) capabilities
- AI-powered features throughout

📱 See `MOBILE_APP_README.md` for detailed documentation.

## Deploy to Vercel (quick)
1. Create a GitHub repo and push this folder.
2. Sign in to Vercel with GitHub.
3. Import the repo. Settings:
   - Framework: Other
   - Output dir: /
   - Build command: (leave blank)
4. Deploy — you'll get an https://...vercel.app URL.

Access:
- Desktop HUD: `https://your-app.vercel.app/`
- Mobile App: `https://your-app.vercel.app/mobile-app.html`

## Local test
1. npm install
2. npx http-server -c-1 . -p 3000
3. Open http://localhost:3000 (Desktop HUD) or http://localhost:3000/mobile-app.html (Mobile App)
4. Or use ngrok for public HTTPS.
