import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "12, Linking Road, Bandra West, Mumbai 400050",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri: 7am – 10pm\nSat – Sun: 8am – 11pm",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@brewnoire.in",
    href: "mailto:hello@brewnoire.in",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad bg-obsidian-800" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-tag">Find Us</span>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream-100 mb-4">
            Come <span className="text-gradient italic">Say Hello</span>
          </h2>
          <div className="divider-line" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact info */}
            <div className="grid sm:grid-cols-2 gap-5">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="bg-obsidian-900/60 border border-espresso-900/40 p-5 group hover:border-espresso-700/50 transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-full bg-espresso-900/50 border border-espresso-800/40 flex items-center justify-center mb-4 group-hover:bg-espresso-700 transition-colors duration-300">
                    <info.icon size={14} className="text-espresso-400 group-hover:text-obsidian-900 transition-colors duration-300" />
                  </div>
                  <p className="font-body text-[10px] text-espresso-500 tracking-widest uppercase mb-1">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="font-body text-sm text-cream-300 hover:text-espresso-400 transition-colors whitespace-pre-line">
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-body text-sm text-cream-300 whitespace-pre-line">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Google Maps embed */}
            <div className="relative overflow-hidden h-64 border border-espresso-900/40">
              <iframe
                title="BrewNoire Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.418!2d72.836!3d19.059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzMyLjAiTiA3MsKwNTAnMDkuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.7)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border border-espresso-700/20" />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-obsidian-900/60 border border-espresso-900/40 p-8 md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-16"
              >
                <CheckCircle size={48} className="text-espresso-400 mb-6" />
                <h3 className="font-display text-3xl text-cream-100 mb-3">Message Received</h3>
                <p className="font-body text-cream-400/60 text-sm max-w-xs leading-relaxed">
                  Thank you for reaching out. We'll get back to you within 24 hours over a cup of coffee.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                  className="mt-8 btn-outline rounded-none text-xs"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="font-display text-3xl text-cream-100 mb-2">Send us a message</h3>
                <p className="font-body text-cream-400/60 text-sm mb-8">
                  For reservations, events, collaborations, or just to say hi.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Ananya Krishnan' },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'ananya@example.com' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block font-body text-[10px] text-espresso-500 tracking-widest uppercase mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="w-full bg-obsidian-800 border border-espresso-900/60 focus:border-espresso-600 text-cream-200 placeholder-cream-600/30 font-body text-sm px-4 py-3 outline-none transition-colors duration-300"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block font-body text-[10px] text-espresso-500 tracking-widest uppercase mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your reservation, event, or inquiry..."
                      required
                      className="w-full bg-obsidian-800 border border-espresso-900/60 focus:border-espresso-600 text-cream-200 placeholder-cream-600/30 font-body text-sm px-4 py-3 outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full rounded-none justify-center"
                  >
                    <span className="flex items-center gap-2">
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-obsidian-900/30 border-t-obsidian-900 rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
