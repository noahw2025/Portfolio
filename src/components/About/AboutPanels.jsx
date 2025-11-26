import { motion } from 'framer-motion';
import { fadeInUp, popCard, staggerContainer } from '../motion';

const skillBuckets = [
  {
    title: 'Programming Languages',
    items: ['Python', 'JavaScript', 'React', 'HTML/CSS', 'Java', 'C'],
  },
  {
    title: 'AI & Machine Learning',
    items: ['PyTorch', 'Hugging Face', 'TensorFlow', 'OpenAI APIs'],
  },
  {
    title: 'Web & Systems',
    items: ['React.js', 'Node.js', 'REST APIs', 'Linux/Unix', 'Git', 'Docker', 'VS Code'],
  },
  {
    title: 'Blockchain & IoT',
    items: ['Ethereum', 'CHIA', 'Helium Network', 'LoRaWAN', 'Hardware optimization'],
  },
  {
    title: 'Soft Skills',
    items: ['Leadership', 'Research', 'Data analysis', 'Problem solving', 'Team collaboration'],
  },
];

const AboutPanels = () => (
  <motion.div
    className="grid gap-4 md:grid-cols-2"
    variants={staggerContainer(0.06)}
    initial="initial"
    animate="animate"
  >
    {skillBuckets.map((bucket, idx) => (
      <motion.div key={bucket.title} variants={popCard(idx * 0.04)} className="glass-panel p-5">
        <h4 className="text-lg font-semibold text-text">{bucket.title}</h4>
        <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted">
          {bucket.items.map((item) => (
            <span key={item} className="rounded-full border border-outline px-3 py-1 text-xs font-semibold">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default AboutPanels;
