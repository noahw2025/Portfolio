import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectDetailModal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          className="glass-panel relative w-full max-w-3xl overflow-hidden border border-outline/80 p-6"
          initial={{ scale: 0.96, y: 10, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.96, y: 8, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="focus-ring absolute right-3 top-3 rounded-full border border-outline bg-white/5 p-2 text-text"
          >
            <X size={16} />
          </button>
          <div className="space-y-3 pr-6">
            <p className="text-xs uppercase tracking-[0.25em] text-muted">Project</p>
            <h3 className="text-2xl font-semibold text-text">{project.title}</h3>
            <p className="text-muted">{project.summary}</p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span key={tag} className="rounded-full border border-outline px-3 py-1 text-xs font-semibold text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 pt-2 text-sm font-semibold text-text">
              {project.github && (
                <a className="inline-flex items-center gap-1" href={project.github} target="_blank" rel="noreferrer">
                  <Github size={16} /> GitHub
                </a>
              )}
              {project.demo && (
                <a className="inline-flex items-center gap-1" href={project.demo} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ProjectDetailModal;
