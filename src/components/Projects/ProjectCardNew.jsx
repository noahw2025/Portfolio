import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { popCard } from '../motion';

const ProjectCardNew = ({ project, onSelect, delay = 0 }) => (
  <motion.button
    type="button"
    variants={popCard(delay)}
    whileHover={{ rotateX: -2, rotateY: 2, y: -6 }}
    className="group relative flex min-h-[260px] flex-col gap-3 overflow-hidden rounded-2xl border border-outline bg-[color:var(--color-surface)]/80 p-5 text-left shadow-card backdrop-blur"
    onClick={() => onSelect(project)}
    data-cursor="interactive"
  >
    <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
      <div className="absolute inset-0 bg-[var(--gradient-accent)] opacity-10" />
    </div>
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="text-lg font-semibold text-text">{project.title}</h3>
        <p className="text-sm text-muted">{project.summary}</p>
      </div>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-text/80">
        {project.tag || 'Build'}
      </span>
    </div>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tag) => (
        <span key={tag} className="rounded-full border border-outline px-2.5 py-1 text-xs font-semibold text-muted">
          {tag}
        </span>
      ))}
    </div>
    <div className="mt-auto flex items-center gap-4 text-sm font-semibold text-text">
      {project.github && (
        <span className="inline-flex items-center gap-1 text-muted group-hover:text-text">
          <Github size={14} /> GitHub
        </span>
      )}
      {project.demo && (
        <span className="inline-flex items-center gap-1 text-muted group-hover:text-text">
          <ExternalLink size={14} /> Demo
        </span>
      )}
      <span className="ml-auto text-xs uppercase tracking-[0.2em] text-muted">Inspect</span>
    </div>
  </motion.button>
);

export default ProjectCardNew;
