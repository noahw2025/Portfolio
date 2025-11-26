import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import socials from '../../data/socials';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

const NavItem = ({ to, label, onNavigate }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink
      to={to}
      onClick={onNavigate}
      className="relative inline-flex items-center px-3 py-2 text-sm font-semibold text-text transition hover:text-white"
    >
      <span>{label}</span>
      <AnimatePresence>
        {isActive && (
          <motion.span
            layoutId="nav-pill"
            className="absolute inset-0 -z-10 rounded-full"
            style={{ background: 'color-mix(in srgb, var(--color-primary) 18%, transparent)' }}
            transition={{ type: 'spring', stiffness: 520, damping: 34 }}
          />
        )}
      </AnimatePresence>
    </NavLink>
  );
};

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-outline backdrop-blur"
      style={{ background: 'color-mix(in srgb, var(--color-background) 90%, transparent)' }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <NavLink to="/" className="text-lg font-semibold tracking-tight text-text">
          Noah Walker
        </NavLink>

        <div className="hidden items-center gap-2 rounded-full border border-outline bg-[color:var(--color-surface)] px-2 py-1 shadow-card md:flex">
          {links.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <a
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-outline bg-[color:var(--color-surface)] px-3 py-2 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-text"
              href="/assets/Noah_Walker_Resume.pdf"
              download
            >
              <Download size={16} /> Resume
            </a>
            <a
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-outline px-3 py-2 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-text"
              href={socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />
            </a>
            <a
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-outline px-3 py-2 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-text"
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} />
            </a>
          </div>
          <ThemeToggle />
          <button
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline text-text md:hidden"
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
            className="border-t border-outline px-5 pb-4 pt-2 backdrop-blur md:hidden"
            style={{ background: 'color-mix(in srgb, var(--color-background) 92%, transparent)' }}
          >
            <nav className="flex flex-col gap-2 text-sm text-text">
              {links.map((link) => (
                <NavItem key={link.to} {...link} onNavigate={() => setOpen(false)} />
              ))}
              <a
                className="focus-ring rounded-lg border border-outline bg-[color:var(--color-surface)] px-3 py-2 text-center font-semibold text-text transition hover:border-text"
                href="/assets/Noah_Walker_Resume.pdf"
                download
                onClick={() => setOpen(false)}
              >
                Download Resume
              </a>
              <div className="flex gap-2 pt-1">
                <a
                  className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-outline bg-[color:var(--color-surface)] px-3 py-2 font-semibold text-text transition hover:border-text"
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-outline bg-[color:var(--color-surface)] px-3 py-2 font-semibold text-text transition hover:border-text"
                  href={socials.linkedin}
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

export default NavBar;
