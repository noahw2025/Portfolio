import { Github, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="border-top border-white/5 bg-background/90 py-6">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-slate-400 md:px-8">
      <span>&copy; {new Date().getFullYear()} Noah Walker. All rights reserved.</span>
      <div className="flex flex-wrap gap-3">
        <a
          href="https://github.com/noahw2025"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/15 px-3 py-2 font-semibold text-indigo-100 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-white"
        >
          <Github size={16} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/noah-walker-54b721222/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/15 px-3 py-2 font-semibold text-indigo-100 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-white"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
