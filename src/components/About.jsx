import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Award, Clock } from 'lucide-react';

const pillars = [
  {
    icon: Leaf,
    title: "Ethically Sourced",
    desc: "Every bean traced to its origin. We partner directly with farmers who share our values.",
  },
  {
    icon: Award,
    title: "Award-Winning",
    desc: "Recognised by the Specialty Coffee Association of India for three consecutive years.",
  },
  {
    icon: Clock,
    title: "Slow Crafted",
    desc: "No shortcuts. Every cup is brewed to its optimal extraction time, every single time.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-pad bg-obsidian-800 relative overflow-hidden">
      {/* Decorative bg text */}
      <div className="absolute top-0 right-0 font-display text-[12rem] font-bold text-obsidian-700/30 leading-none select-none pointer-events-none hidden lg:block">
        BREW
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative h-[500px]">
              {/* Main image */}
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80"
                alt="Cafe interior"
                className="absolute top-0 left-0 w-3/4 h-80 object-cover"
              />
              {/* Secondary image */}
              <img
                src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=400&q=80"
                alt="Latte art"
                className="absolute bottom-0 right-0 w-1/2 h-64 object-cover border-4 border-obsidian-800"
              />
              {/* Years badge */}
              <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-espresso-600 flex flex-col items-center justify-center z-10 shadow-2xl">
                <span className="font-display text-3xl font-bold text-cream-50">5+</span>
                <span className="font-body text-[9px] uppercase tracking-widest text-cream-200/80">Years</span>
              </div>
              {/* Line accent */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-espresso-500/50" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-espresso-500/50" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">Our Story</span>
            <h2 className="font-display text-5xl md:text-6xl font-light text-cream-100 leading-tight mb-4">
              Coffee is our <span className="text-gradient italic">craft,</span>
              <br />not our product.
            </h2>
            <div className="divider-line !mx-0" />
            <p className="font-body text-cream-300/70 text-base leading-relaxed mb-5">
              BrewNoire was born from an obsession — the belief that a perfectly pulled shot of espresso 
              could be as moving as music, as complex as great literature. We opened our doors in 2019 
              in Bandra, Mumbai, with a simple mission: serve the most exceptional cup of coffee the city had ever tasted.
            </p>
            <p className="font-body text-cream-300/70 text-base leading-relaxed mb-10">
              Today, our team of seven certified baristas and two in-house roasters work daily to 
              source, roast, and serve coffee that honours the farmers who grow it and the guests 
              who drink it. Every cup is a handshake between worlds.
            </p>

            {/* Pillars */}
            <div className="grid gap-5">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-espresso-900/80 border border-espresso-700/40 flex items-center justify-center flex-shrink-0 group-hover:bg-espresso-600 transition-colors duration-300">
                    <p.icon size={16} className="text-espresso-400 group-hover:text-obsidian-900 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-cream-200 text-sm mb-1">{p.title}</h4>
                    <p className="font-body text-cream-400/60 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
