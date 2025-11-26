import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:noahw2025@gmail.com?subject=Let%27s build something reliable&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 md:px-8">
      <div className="grid gap-10 rounded-3xl border border-white/5 bg-white/5 p-8 shadow-card backdrop-blur md:grid-cols-2">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something reliable together."
            copy="Looking for an intern, junior engineer, or someone who can connect hardware, software, and AI? I'd love to chat."
          />
          <div className="grid gap-3 text-sm text-slate-200">
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-indigo-200" />
              <span className="font-semibold text-white">Email:</span>
              <a className="text-indigo-200 underline-offset-4 hover:text-white hover:underline" href="mailto:noahw2025@gmail.com">
                noahw2025@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-indigo-200" />
              <span className="font-semibold text-white">Phone:</span> (404) 414-4219
            </p>
            <p>
              <span className="font-semibold text-white">Location:</span> Atlanta, Georgia
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/15 px-3 py-2 text-indigo-100 shadow-card transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-white"
                href="https://github.com/noahw2025"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> github.com/noahw2025
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/15 px-3 py-2 text-indigo-100 shadow-card transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-white"
                href="https://www.linkedin.com/in/noah-walker-54b721222/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} /> linkedin.com/in/noah-walker-54b721222
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lg"
                href="/assets/Noah_Walker_Resume.pdf"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-white/5 bg-background/80 p-6 shadow-inner"
        >
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-white">Name</label>
            <input
              className="rounded-xl border border-white/10 bg-background px-3 py-2 text-sm text-white outline-none ring-indigo-400/50 transition focus:ring-2"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-white">Email</label>
            <input
              className="rounded-xl border border-white/10 bg-background px-3 py-2 text-sm text-white outline-none ring-indigo-400/50 transition focus:ring-2"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-white">Message</label>
            <textarea
              className="min-h-[140px] rounded-xl border border-white/10 bg-background px-3 py-2 text-sm text-white outline-none ring-indigo-400/50 transition focus:ring-2"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="What would you like to build?"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 px-4 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
