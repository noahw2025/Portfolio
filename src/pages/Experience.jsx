import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import experience from '../data/experience';
import { popCard, staggerContainer } from '../components/motion';

const Experience = () => (
  <section className="px-5 py-16 md:px-8 md:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl space-y-10">
      <SectionHeader
        eyebrow="Experience"
        title="Turning ideas into systems that stay online."
        copy="From IoT deployments to data-heavy reporting and leadership, I focus on reliability and clear outcomes."
      />
      <motion.div className="grid gap-4" variants={staggerContainer(0.08)} initial="initial" animate="animate">
        {experience.map((item, idx) => (
          <motion.div key={item.id} variants={popCard(idx * 0.04)} className="glass-panel space-y-3 p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{item.location}</p>
                <h3 className="text-xl font-semibold text-text">
                  {item.role} · {item.company}
                </h3>
                <p className="text-sm text-muted">
                  {item.startDate} — {item.endDate}
                </p>
              </div>
              <span className="rounded-full border border-outline px-3 py-1 text-xs font-semibold text-muted">{item.tag}</span>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      <div className="glass-panel p-5 text-muted">
        <h4 className="text-lg font-semibold text-text">What I&apos;ve learned</h4>
        <p className="mt-2">
          Leadership and people management, turning messy real-world data into decisions, and shipping solutions that keep running after launch. Each role sharpened my ability to connect strategy with execution.
        </p>
      </div>
    </div>
  </section>
);

export default Experience;
