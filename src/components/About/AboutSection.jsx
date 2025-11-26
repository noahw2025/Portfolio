import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import { fadeInUp, staggerContainer, popCard } from '../motion';

const panels = [
  {
    title: 'Origin Story',
    body:
      'Started with hardware tinkering—mining rigs, CHIA plots, and IoT nodes—then dove into AI, APIs, and automation to connect every layer of the stack.',
  },
  {
    title: 'What I Do',
    body:
      'Design and ship systems that actually run: automation pipelines, IoT deployments, and AI agents that solve real workflows.',
  },
  {
    title: 'Tech Stack',
    body: 'Python, JavaScript/React, AI/ML frameworks, REST APIs, Linux/Unix, Git, Docker, VS Code, Ethereum, CHIA, Helium.',
  },
];

const AboutSection = () => (
  <section className="relative px-5 py-16 md:px-8 md:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl space-y-10">
      <SectionHeader
        eyebrow="About"
        title="Curiosity-first builder with a systems mindset."
        copy="Atlanta-based Computer Science senior drawn to the junction of hardware, software, and intelligent automation."
      />
      <motion.div
        className="grid gap-4 md:grid-cols-3"
        variants={staggerContainer(0.08)}
        initial="initial"
        animate="animate"
      >
        {panels.map((panel, idx) => (
          <motion.div
            key={panel.title}
            variants={popCard(idx * 0.04)}
            className="glass-panel flex flex-col gap-2 p-5"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{panel.title}</p>
            <p className="text-text/90">{panel.body}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={staggerContainer(0.06)}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp(0.05)} className="glass-panel p-5">
          <h3 className="text-lg font-semibold text-text">Quick facts</h3>
          <ul className="mt-3 grid grid-cols-2 gap-3 text-sm text-muted">
            <li>🎓 Senior, Computer Science @ GSU</li>
            <li>📍 Atlanta, GA</li>
            <li>📊 GPA 3.93 – President’s List & Dean’s List</li>
            <li>⚙️ Building systems that ship</li>
          </ul>
        </motion.div>
        <motion.div variants={fadeInUp(0.08)} className="glass-panel p-5">
          <h3 className="text-lg font-semibold text-text">Soft skills</h3>
          <p className="text-muted">Leadership, research, data analysis, problem solving, team collaboration.</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
