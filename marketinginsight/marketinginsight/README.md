# Marketing Insight Pro

React + Vite website for Marketing Insight Pro.

## Run locally

```
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```
npm run build
```

Output goes to the `dist/` folder.

## Structure

- `src/pages/` — Home, Services, Portfolio, About
- `src/components/` — Navbar, Footer, WhatsAppButton
- `src/data/` — services.js and testimonials.js (edit these to change copy)
- `src/assets/logo.png` — your logo

## Contact form — one-time activation

The Contact page sends messages to marketinginsight11@gmail.com using a free service
called FormSubmit (no backend/server needed). The **very first time** someone submits
the form after the site goes live, FormSubmit sends an activation email to
marketinginsight11@gmail.com — open it and click "Activate" (check Spam/Promotions if
you don't see it). After that one-time click, every future submission is delivered
straight to the inbox automatically.

## Things to personalize before going live

- Replace placeholder testimonials in `src/data/testimonials.js` with real client reviews
- Replace placeholder stats in `src/pages/Home.jsx` (`stats` array) with real numbers
- Add real project images/results to `src/pages/Portfolio.jsx`
- Update `src/pages/About.jsx` with your real founding story
