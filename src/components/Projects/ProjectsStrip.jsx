import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import ProjectCardNew from './ProjectCardNew';

const ProjectsStrip = ({ projects, onSelect }) => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const progress = useTransform(x, (latest) => {
    if (!containerRef.current) return 0;
    const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    return maxScroll > 0 ? Math.min(Math.max(-latest / maxScroll, 0), 1) : 0;
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const onWheel = (e) => {
      e.preventDefault();
      const next = Math.max(Math.min(el.scrollLeft + e.deltaY * 0.8, el.scrollWidth), 0);
      el.scrollTo({ left: next, behavior: 'auto' });
      x.set(-next);
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [x]);

  const onScroll = () => {
    if (!containerRef.current) return;
    x.set(-containerRef.current.scrollLeft);
  };

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        onScroll={onScroll}
        className="no-scrollbar relative flex gap-4 overflow-x-auto pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {projects.map((project, idx) => (
          <div key={project.title} className="w-[320px] shrink-0" style={{ scrollSnapAlign: 'start' }}>
            <ProjectCardNew project={project} onSelect={onSelect} delay={idx * 0.04} />
          </div>
        ))}
      </div>
      <motion.div className="h-1 w-full rounded-full bg-white/5" initial={{ opacity: 0.6 }} animate={{ opacity: 1 }}>
        <motion.div
          className="h-full rounded-full bg-[var(--gradient-accent)]"
          style={{ scaleX: progress, originX: 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
};

export default ProjectsStrip;
