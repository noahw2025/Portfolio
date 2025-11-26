import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const NavButton = ({ to, label, onNavigate }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink
      to={to}
      onClick={onNavigate}
      className="relative rounded-full px-3 py-2 text-sm font-semibold text-slate-200 transition hover:text-white"
    >
      <span>{label}</span>
      <AnimatePresence>
        {isActive && (
          <motion.span
            layoutId="nav-pill"
            className="absolute inset-0 -z-10 rounded-full bg-white/10"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
      </AnimatePresence>
    </NavLink>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <NavLink to="/" className="text-lg font-semibold tracking-tight text-white">
          Noah Walker
        </NavLink>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-2 rounded-full border border-white/5 bg-white/5 px-2 py-1 text-sm shadow-card md:flex">
            {links.map((link) => (
              <NavButton key={link.to} to={link.to} label={link.label} />
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-xl"
              href="/assets/Noah_Walker_Resume.pdf"
              download
            >
              Download Resume
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/15 px-3 py-2 text-sm font-semibold text-indigo-100 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-white"
              href="https://github.com/noahw2025"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/15 px-3 py-2 text-sm font-semibold text-indigo-100 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-white"
              href="https://www.linkedin.com/in/noah-walker-54b721222/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/5 bg-background px-5 pb-4 pt-2 md:hidden"
          >
            <nav className="flex flex-col gap-2 text-sm text-slate-200">
              {links.map((link) => (
                <NavButton key={link.to} to={link.to} label={link.label} onNavigate={() => setOpen(false)} />
              ))}
              <a
                className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 px-3 py-2 text-center font-semibold text-white transition hover:shadow-lg"
                href="/assets/Noah_Walker_Resume.pdf"
                download
                onClick={() => setOpen(false)}
              >
                Download Resume
              </a>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-indigo-400/40 bg-indigo-500/15 px-3 py-2 font-semibold text-indigo-100 transition hover:border-indigo-200 hover:text-white"
                  href="https://github.com/noahw2025"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-sky-400/40 bg-sky-500/15 px-3 py-2 font-semibold text-indigo-100 transition hover:border-indigo-200 hover:text-white"
                  href="https://www.linkedin.com/in/noah-walker-54b721222/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
