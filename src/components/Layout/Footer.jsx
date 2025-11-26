import { Github, Linkedin } from 'lucide-react';
import socials from '../../data/socials';

const Footer = () => (
  <footer
    className="relative z-10 border-t border-outline backdrop-blur"
    style={{ background: 'color-mix(in srgb, var(--color-surface) 85%, transparent)' }}
  >
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
      <div>
        <p className="font-semibold text-text">Noah Walker</p>
        <p className="text-muted">Building AI, automation, and 3D-driven experiences.</p>
      </div>
      <div className="flex items-center gap-3">
        <a
          className="inline-flex items-center gap-2 rounded-full border border-outline px-3 py-2 font-semibold text-text transition hover:-translate-y-0.5 hover:border-text"
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={16} /> GitHub
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-outline px-3 py-2 font-semibold text-text transition hover:-translate-y-0.5 hover:border-text"
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
