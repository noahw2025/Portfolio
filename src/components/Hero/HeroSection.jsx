import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../motion';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  return (
    <section className="relative isolate overflow-hidden px-5 py-16 md:px-8 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div className="absolute left-10 top-12 h-60 w-60 rounded-full blur-3xl" style={{ background: 'var(--gradient-accent)', y: y1 }} />
        <motion.div className="absolute right-[-80px] top-0 h-72 w-72 rounded-full blur-3xl" style={{ background: 'var(--color-secondary)', y: y2, opacity: 0.35 }} />
        <motion.div className="absolute bottom-[-60px] left-1/3 h-72 w-72 rounded-full blur-3xl" style={{ background: 'var(--color-primary)', opacity: 0.18 }} />
      </div>

      <motion.div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2" variants={staggerContainer()} initial="initial" animate="animate">
        <motion.div className="space-y-6" variants={fadeInUp(0)}>
          <p className="text-sm uppercase tracking-[0.25em] text-muted">Atlanta, Georgia</p>
          <h1 className="text-4xl font-semibold leading-tight text-text sm:text-5xl md:text-6xl">Noah Walker</h1>
          <p className="text-xl text-muted">Computer Science student & emerging AI/Automation engineer.</p>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Building automation systems that connect hardware, software, and data. From blockchain rigs and IoT deployments to AI-driven Python automation, I love turning complex problems into reliable solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-5 py-3 text-sm font-semibold text-black shadow-card transition hover:-translate-y-0.5"
              data-cursor="interactive"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <a
              href="/assets/Noah_Walker_Resume.pdf"
              download
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-outline px-5 py-3 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-text"
              data-cursor="interactive"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3 rounded-2xl border border-outline bg-[color:var(--color-surface)]/70 p-4 backdrop-blur">
            {[{ label: 'GPA', value: '3.93' }, { label: 'IoT nodes', value: '20+' }, { label: 'Storage plotted', value: '90TB' }].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/5 px-4 py-3 text-center">
                <span className="block text-2xl font-bold text-text">{stat.value}</span>
                <span className="text-xs uppercase tracking-wide text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="relative flex justify-center lg:justify-end" variants={fadeInUp(0.08)}>
          <div className="absolute inset-0 -z-10 rounded-full bg-[var(--gradient-accent)] opacity-40 blur-3xl" />
          <div className="glass-panel relative h-[420px] w-full max-w-[460px] overflow-hidden border border-outline/80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_70%_0%,rgba(255,255,255,0.05),transparent_30%)]" />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent" />
            <div className="relative flex h-full flex-col justify-between p-6 text-sm text-muted">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Creative console</p>
                <h3 className="text-2xl font-semibold text-text">3D control deck</h3>
                <p className="mt-2 max-w-md">Interact with the console to explore projects, automation workflows, and 3D environments.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-xs text-muted">Focus</p>
                  <p className="text-text">AI / Automation</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-xs text-muted">Stacks</p>
                  <p className="text-text">Python, React, R3F</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
