import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import socials from '../../data/socials';
import { fadeInUp, staggerContainer } from '../motion';

const ContactSection = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 2200);
  };

  return (
    <section className="relative px-5 py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <motion.div variants={staggerContainer()} initial="initial" animate="animate" className="space-y-4">
          <motion.p variants={fadeInUp(0)} className="text-sm uppercase tracking-[0.25em] text-muted">
            Contact
          </motion.p>
          <motion.h2 variants={fadeInUp(0.05)} className="text-4xl font-semibold text-text md:text-5xl">
            Let&apos;s build something weird & beautiful.
          </motion.h2>
          <motion.p variants={fadeInUp(0.08)} className="max-w-2xl text-lg text-muted">
            Email, socials, or a quick message—pick what works best for you.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            className="glass-panel space-y-4 p-5"
            variants={staggerContainer(0.06)}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp(0.02)} className="flex flex-col gap-3 text-muted">
              <a className="focus-ring inline-flex items-center gap-2 text-text" href={socials.email}>
                <Mail size={18} /> noahw2025@gmail.com
              </a>
              <a className="focus-ring inline-flex items-center gap-2" href={socials.github} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a className="focus-ring inline-flex items-center gap-2" href={socials.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
              <p>Atlanta, Georgia · (404) 414-4219</p>
            </motion.div>
            <motion.div variants={fadeInUp(0.06)} className="flex gap-2 text-sm text-muted">
              <span className="rounded-full bg-white/5 px-3 py-1">Email first</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Open to collabs</span>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-panel space-y-3 p-5"
            variants={staggerContainer(0.06)}
            initial="initial"
            animate="animate"
          >
            <motion.label variants={fadeInUp(0.02)} className="text-sm text-text">
              Name
              <input
                required
                className="focus-ring mt-1 w-full rounded-xl border border-outline bg-white/5 px-3 py-2 text-text"
                placeholder="Your name"
                data-cursor="interactive"
              />
            </motion.label>
            <motion.label variants={fadeInUp(0.04)} className="text-sm text-text">
              Email
              <input
                type="email"
                required
                className="focus-ring mt-1 w-full rounded-xl border border-outline bg-white/5 px-3 py-2 text-text"
                placeholder="you@example.com"
                data-cursor="interactive"
              />
            </motion.label>
            <motion.label variants={fadeInUp(0.06)} className="text-sm text-text">
              Message
              <textarea
                required
                rows="4"
                className="focus-ring mt-1 w-full rounded-xl border border-outline bg-white/5 px-3 py-2 text-text"
                placeholder="What would you like to build?"
                data-cursor="interactive"
              />
            </motion.label>
            <motion.button
              type="submit"
              variants={fadeInUp(0.08)}
              className="focus-ring inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
              data-cursor="interactive"
            >
              {status === 'sent' ? 'Message sent!' : 'Send message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
