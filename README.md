# Noah Walker Portfolio (React + Vite)

Modern single-page portfolio rebuilt with React, Tailwind CSS, and Framer Motion. Features smooth section navigation, animated hero/projects/experience cards, and centralized data for easy updates. Resume is served from `public/assets/Noah_Walker_Resume.pdf`.

## Tech Stack
- React 19 + Vite 7
- Tailwind CSS 3 (custom dark theme + accent gradient)
- Framer Motion 12 for scroll/hover animations

## Getting Started
1. Install deps: `npm install`
2. Dev server: `npm run dev` (opens on http://localhost:5173)
3. Production build: `npm run build`
4. Preview build: `npm run preview`

## Project Structure
- `src/App.jsx` — page layout assembling all sections.
- `src/components/` — UI sections and shared pieces:
  - `Navbar`, `Hero`, `About`, `Projects`, `ProjectCard`, `Experience`, `ExperienceCard`, `Contact`, `Footer`, `SectionHeader`.
- `src/data/` — update content in one place:
  - `projects.js` (titles, summaries, bullets, tech, links)
  - `experience.js` (roles, companies, dates, bullets)
- `src/index.css` — Tailwind entry + global theming.
- `public/assets/` — static assets, including `Noah_Walker_Resume.pdf` (linked in CTAs).

## Content to Update
- Replace placeholder profile links in `Navbar.jsx`, `Contact.jsx`, and `Footer.jsx` with real GitHub/LinkedIn URLs.
- Add any project demo/GitHub links in `src/data/projects.js`.
- Drop images into `public/assets/img` if you want visuals; reference with `/assets/img/filename.ext`.

## Styling & Animations
- Tailwind customization lives in `tailwind.config.js` (colors, fonts, shadows).
- Framer Motion drives entrance/hover effects; tweak variants inline in components.

## Notes
- Favicon uses `public/vite.svg` — swap as desired.
- Smooth scrolling is handled via `scrollIntoView`; section IDs match nav links.
