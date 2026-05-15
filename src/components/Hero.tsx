import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[900px] w-full overflow-hidden bg-brand-white flex flex-col lg:flex-row">
      {/* Left Editorial Content */}
      <div className="w-full lg:w-7/12 p-8 md:p-16 lg:p-24 flex flex-col justify-center gap-12 relative z-10">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">
              Est. 2000 — Academic Prestige
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tighter text-brand-charcoal"
          >
            Shaping <span className="font-medium italic text-brand-blue">Confident</span> <br />
            Learners for a <br />
            Global Future
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-brand-charcoal/60 leading-relaxed max-w-lg"
        >
          A leading co-educational international school empowering students from Early Years to Advanced Level through academic excellence, creativity, and character development.
        </motion.p>

        {/* Academic Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center gap-12 py-10 border-y border-gray-100"
        >
          <div className="flex flex-col">
            <span className="text-4xl font-light text-brand-blue">100%</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Exam Success</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
          <div className="flex flex-col">
            <span className="text-4xl font-light text-brand-blue">4</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Premium Campuses</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
          <div className="flex flex-col">
            <span className="text-4xl font-light text-brand-blue">25+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Global Partners</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-8"
        >
          <button className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-smooth shadow-lg hover:shadow-brand-blue/20">
              <ArrowRight className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-charcoal">Explore Journey</span>
          </button>
          
          <button className="hidden sm:flex items-center gap-3 text-brand-charcoal/40 hover:text-brand-blue transition-colors group">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
               <Play className="w-4 h-4 fill-current" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Watch Story</span>
          </button>
        </motion.div>
      </div>

      {/* Right Visual Stack */}
      <div className="w-full lg:w-5/12 relative min-h-[500px] lg:min-h-full bg-brand-charcoal">
        <img
          src="https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/e64bd51b-cff2-4ae6-cf4a-6beda57a1900/public"
          alt="School Campus"
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[10s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-white" />
        
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-24 left-0 -translate-x-1/2 bg-white p-8 shadow-2xl border border-gray-50 z-20 hidden lg:block"
        >
          <p className="text-brand-blue font-display font-bold text-5xl leading-none">A*</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">Curriculum Standard</p>
        </motion.div>

        {/* Layered Composition */}
        <div className="absolute bottom-24 right-0 w-full lg:w-[120%] flex items-center justify-end pr-12 pointer-events-none">
          <div className="grid grid-cols-2 gap-4 w-full h-[400px]">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.2 }}
               className="bg-brand-gray rounded-sm relative overflow-hidden shadow-2xl"
            >
               <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Students" />
               <div className="absolute inset-0 bg-brand-blue/60 mix-blend-multiply" />
               <div className="absolute inset-0 flex items-center justify-center p-6">
                 <span className="text-white font-display italic text-2xl text-center">Sapugaskanda Campus</span>
               </div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, y: 60 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.4 }}
               className="bg-brand-gray rounded-sm mt-12 overflow-hidden shadow-2xl border-t-8 border-brand-red h-full relative"
            >
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Collaboration" />
               <div className="absolute inset-0 bg-brand-charcoal/40" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-white font-display italic text-2xl">Student Life</span>
               </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-10 flex flex-col items-center gap-2 z-30"
      >
        <span className="text-brand-charcoal/40 text-[9px] uppercase tracking-[0.3em] font-bold">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-charcoal/20 to-transparent" />
      </motion.div>
    </section>
  );
}
