import { motion } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
      style={{
        background: 'linear-gradient(160deg, #0e0b08 0%, #1a1410 40%, #251d17 70%, #0e0b08 100%)',
      }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(14,11,8,0.85) 0%, rgba(14,11,8,0.65) 40%, rgba(14,11,8,0.92) 100%)'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-8 writing-vertical text-espresso-700/40 text-xs tracking-widest font-body hidden lg:block z-10">
        ARTISAN · COFFEE · SINCE 2019
      </div>
      <div className="absolute top-1/3 right-8 writing-vertical text-espresso-700/40 text-xs tracking-widest font-body hidden lg:block z-10">
        MUMBAI · INDIA
      </div>

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(204,125,58,0.06) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <span className="section-tag">Est. 2019 · Specialty Coffee</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={0.25}
          initial="hidden"
          animate="visible"
          className="font-display font-light leading-none mb-6"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
        >
          <span className="text-cream-100 block">Where Every</span>
          <span className="text-gradient italic block">Sip Tells</span>
          <span className="text-cream-100 block">A Story.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={0.4}
          initial="hidden"
          animate="visible"
          className="font-body font-light text-cream-300/80 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Artisan coffee crafted with intention, sourced from the world's finest
          single-origin farms, served in the heart of Mumbai.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={0.55}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary rounded-none w-full sm:w-auto"
          >
            <span>Explore Menu</span>
          </button>
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline rounded-none w-full sm:w-auto"
          >
            <MapPin size={14} />
            Visit Us
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 flex items-center justify-center gap-8 md:gap-16"
        >
          {[
            { num: "12+", label: "Single Origins" },
            { num: "50+", label: "Menu Items" },
            { num: "4.9★", label: "Rating" },
            { num: "10K+", label: "Happy Guests" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl text-espresso-400 font-semibold">{stat.num}</p>
              <p className="font-body text-xs text-cream-400/60 tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-body text-xs text-cream-500/50 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={14} className="text-espresso-500/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
