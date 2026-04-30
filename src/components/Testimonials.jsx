import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/content';

function TestimonialCard({ t, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="card-hover group relative bg-obsidian-800 border border-espresso-900/40 hover:border-espresso-700/40 p-8 flex flex-col"
    >
      {/* Quote icon */}
      <Quote size={32} className="text-espresso-800 mb-6 flex-shrink-0" />

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={12} className="text-espresso-400 fill-espresso-400" />
        ))}
      </div>

      {/* Text */}
      <p className="font-body text-cream-300/75 text-base leading-relaxed flex-1 italic mb-8">
        "{t.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-espresso-900/40">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-espresso-500 to-espresso-800 flex items-center justify-center flex-shrink-0">
          <span className="font-body text-xs font-bold text-cream-50">{t.avatar}</span>
        </div>
        <div>
          <p className="font-body font-semibold text-cream-200 text-sm">{t.name}</p>
          <p className="font-body text-cream-500/50 text-xs mt-0.5">{t.role}</p>
        </div>
      </div>

      {/* Hover line */}
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-espresso-500 to-espresso-700 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="section-pad bg-obsidian-900 relative overflow-hidden" ref={ref}>
      {/* BG text */}
      <div className="absolute bottom-0 left-0 font-display text-[10rem] font-bold text-obsidian-800/40 leading-none select-none pointer-events-none hidden lg:block">
        LOVE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-tag">Testimonials</span>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream-100 mb-4">
            Guests Who <span className="text-gradient italic">Adore Us</span>
          </h2>
          <div className="divider-line" />
          <p className="font-body text-cream-400/60 max-w-md mx-auto">
            Don't just take our word for it. Here's what our regulars have to say.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-espresso-400 fill-espresso-400" />
            ))}
          </div>
          <span className="font-body text-cream-400/70 text-sm">
            <strong className="text-cream-200 font-semibold">4.9 / 5</strong> from over 2,400 verified reviews on Google & Zomato
          </span>
        </motion.div>
      </div>
    </section>
  );
}
