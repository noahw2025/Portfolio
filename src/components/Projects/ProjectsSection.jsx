import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import ProjectsStrip from './ProjectsStrip';
import ProjectDetailModal from './ProjectDetailModal';
import projects from '../../data/projects';
import { staggerContainer } from '../motion';

const ProjectsSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative px-5 py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-8">
        <SectionHeader
          eyebrow="Projects"
          title="Systems that connect code, hardware, and data."
          copy="Hands-on builds combining automation, infrastructure, and AI with practical constraints like cost, uptime, and usability."
        />
        <motion.div variants={staggerContainer()} initial="initial" animate="animate">
          <ProjectsStrip projects={projects} onSelect={setSelected} />
        </motion.div>
      </div>
      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default ProjectsSection;
