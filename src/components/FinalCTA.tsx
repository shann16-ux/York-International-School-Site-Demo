import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-brand-charcoal">
      <img
        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        alt="Graduation Celebration"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/60 to-brand-red/40 mix-blend-overlay" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl text-white font-display font-medium leading-tight mb-12"
        >
          Empowering Students to Thrive in a <span className="italic">Global Future</span>
        </motion.h2>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-white text-brand-charcoal font-bold rounded-full text-lg shadow-2xl hover:bg-brand-gray transition-all flex items-center gap-4 mx-auto"
        >
          Book a School Visit
          <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </motion.button>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute top-20 left-20 w-40 h-[1px] bg-white/20 rotate-45" />
      <div className="absolute bottom-20 right-20 w-40 h-[1px] bg-white/20 rotate-45" />
    </section>
  );
}
