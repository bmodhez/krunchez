import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { menuItems } from '../data/content';

const categories = ['All', 'Espresso', 'Specialty', 'Cold', 'Dessert Coffee'];

function MenuCard({ item, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-hover group relative bg-obsidian-800 border border-espresso-900/40 hover:border-espresso-700/60 overflow-hidden cursor-pointer"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-espresso-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Badge */}
      {item.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-espresso-600 text-obsidian-900 text-[10px] font-body font-bold tracking-widest uppercase px-2 py-1">
            {item.badge}
          </span>
        </div>
      )}

      {/* Color block */}
      <div className={`h-32 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)' }}
        />
        {/* Decorative ring */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border border-espresso-500/20" />
        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border border-espresso-500/10" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="font-body text-[10px] text-espresso-500 tracking-widest uppercase mb-1">{item.category}</p>
            <h3 className="font-accent text-xl text-cream-100 font-semibold leading-tight group-hover:text-espresso-300 transition-colors duration-300">
              {item.name}
            </h3>
          </div>
          <span className="font-display text-2xl text-espresso-400 font-semibold ml-4 flex-shrink-0">
            {item.price}
          </span>
        </div>
        <p className="font-body text-cream-400/60 text-sm leading-relaxed mt-3">
          {item.description}
        </p>
        <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="h-px flex-1 bg-espresso-700/50" />
          <span className="font-body text-[10px] text-espresso-500 tracking-widest uppercase">Order Now</span>
          <div className="h-px flex-1 bg-espresso-700/50" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(i => i.category === activeCategory);

  return (
    <section id="menu" className="section-pad bg-obsidian-900" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-tag">Our Offerings</span>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream-100 mb-4">
            The <span className="text-gradient italic">Menu</span>
          </h2>
          <div className="divider-line" />
          <p className="font-body text-cream-400/60 max-w-lg mx-auto">
            Every item is a considered creation. We change our seasonal specials quarterly to honour what's fresh and extraordinary.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs font-medium tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-espresso-600 border-espresso-600 text-obsidian-900'
                  : 'border-espresso-800/60 text-cream-400/60 hover:border-espresso-600 hover:text-espresso-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 font-body text-cream-400/50 text-sm"
        >
          Full menu available in-store. Seasonal items change monthly. 
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="text-espresso-400 hover:text-espresso-300 ml-1 underline underline-offset-2 transition-colors"
          >
            Ask us about today's special →
          </button>
        </motion.p>
      </div>
    </section>
  );
}
