// prerender.js
// Runs after Vite build to generate static HTML routes for SEO bots.
// Completely bypasses headless browser (puppeteer) requirements, making it 100% stable on Vercel.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Build index.html not found! Run npm run build first.');
  process.exit(1);
}

const template = fs.readFileSync(indexPath, 'utf-8');

const routes = [
  {
    path: 'services',
    title: 'Growth Services | Marketing Insight Pro',
    desc: 'Performant marketing services: high-ROAS Meta Ads setups, technical SEO audits, high-retention video editing, and custom social post designs.',
    canonical: 'https://marketinginsightpro.vercel.app/services'
  },
  {
    path: 'portfolio',
    title: 'Client Work & Portfolio | Marketing Insight Pro',
    desc: 'Explore real-world case studies across Meta Ads, SEO audits, video editing, social media management, and strategic copywriting campaigns.',
    canonical: 'https://marketinginsightpro.vercel.app/portfolio'
  },
  {
    path: 'about',
    title: 'About Our Vision & Agency | Marketing Insight Pro',
    desc: 'Learn about our performance agency in Pakistan, our custom campaign methodologies, and our mission to scale brands to new heights.',
    canonical: 'https://marketinginsightpro.vercel.app/about'
  },
  {
    path: 'contact',
    title: 'Free Digital Consultation | Marketing Insight Pro',
    desc: 'Schedule a strategy call or request a free campaign audit. Our digital growth experts respond in under 24 hours.',
    canonical: 'https://marketinginsightpro.vercel.app/contact'
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy | Marketing Insight Pro',
    desc: 'Privacy Policy guidelines and data collection procedures for Marketing Insight Pro.',
    canonical: 'https://marketinginsightpro.vercel.app/privacy-policy'
  },
  {
    path: 'terms-conditions',
    title: 'Terms & Conditions | Marketing Insight Pro',
    desc: 'Terms & Conditions governing direct marketing consultations and campaign audits.',
    canonical: 'https://marketinginsightpro.vercel.app/terms-conditions'
  },
  {
    path: 'cookie-policy',
    title: 'Cookie Policy | Marketing Insight Pro',
    desc: 'Cookies and tracker configurations utilized by Marketing Insight Pro.',
    canonical: 'https://marketinginsightpro.vercel.app/cookie-policy'
  }
];

console.log('--- Static Route Prerender Script ---');
routes.forEach(route => {
  const dir = path.join(distPath, route.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  // Replace Description (standard, og:description, twitter:description)
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);
  html = html.replace(/property="og:description" content=".*?"/, `property="og:description" content="${route.desc}"`);
  html = html.replace(/name="twitter:description" content=".*?"/, `name="twitter:description" content="${route.desc}"`);

  // Replace OG URL
  html = html.replace(/property="og:url" content=".*?"/, `property="og:url" content="${route.canonical}"`);

  // Replace Canonical Link
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${route.canonical}" />`);

  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`✅ Generated: dist/${route.path}/index.html`);
});

console.log('--- Prerendering Completed Successfully! ---');
