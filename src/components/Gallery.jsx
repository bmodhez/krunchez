import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { galleryImages } from '../data/content';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="section-pad bg-obsidian-800" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-tag">Visual Stories</span>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream-100 mb-4">
            Life at <span className="text-gradient italic">BrewNoire</span>
          </h2>
          <div className="divider-line" />
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian-900/0 group-hover:bg-obsidian-900/50 transition-all duration-500 flex items-center justify-center">
                <span className="font-body text-xs text-cream-100/0 group-hover:text-cream-100/90 tracking-widest uppercase transition-all duration-500 delay-100 font-medium">
                  {img.alt}
                </span>
              </div>
              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-espresso-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body text-sm text-cream-400/60 hover:text-espresso-400 transition-colors duration-300 group"
          >
            <span className="w-8 h-px bg-cream-700/40 group-hover:bg-espresso-500 transition-colors" />
            Follow our story on Instagram @brewnoire
            <span className="w-8 h-px bg-cream-700/40 group-hover:bg-espresso-500 transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
