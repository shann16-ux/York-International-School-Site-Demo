import { motion } from 'motion/react';

const galleryItems = [
  {
    title: 'Sporting Excellence',
    category: 'Athletics',
    size: 'lg',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Future Innovators',
    category: 'Technology',
    size: 'sm',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Graduation Day',
    category: 'Celebration',
    size: 'sm',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function LifeAtYork() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-brand-red font-accent font-bold uppercase tracking-[0.3em] text-[10px]">
              Vibrant Campus Life
            </span>
            <h2 className="text-5xl md:text-7xl font-light text-brand-charcoal mt-6 leading-[1.1] tracking-tighter">
              Discovery <br />
              <span className="italic font-medium text-brand-blue">Every Single Day</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-lg text-brand-charcoal/40 leading-relaxed max-w-lg mb-4"
          >
            Education at York goes beyond textbooks. We offer a rich tapestry of experiences through sports, arts, leadership initiatives, and social programs.
          </motion.p>
        </div>

        {/* Asymmetrical Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 shadow-2xl">
          {/* Big Item */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 group relative h-[700px] overflow-hidden bg-white"
          >
            <img
              src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover transition-smooth duration-1000 group-hover:scale-105"
              alt="Diversity and Inclusion"
            />
            <div className="absolute inset-0 bg-brand-charcoal/30 opacity-0 group-hover:opacity-100 transition-smooth" />
            <div className="absolute bottom-16 left-16 px-2 opacity-0 group-hover:opacity-100 transition-smooth translate-y-4 group-hover:translate-y-0">
              <span className="bg-brand-red text-white text-[9px] uppercase tracking-[0.3em] font-bold px-4 py-2 rounded-sm shadow-xl">
                Legacy of Athletics
              </span>
              <h3 className="text-5xl text-white font-display font-light italic mt-6">Championing Potential</h3>
            </div>
          </motion.div>

          {/* Smaller Items */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative h-[350px] overflow-hidden bg-white"
          >
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              alt="Academic"
            />
            <div className="absolute inset-0 bg-brand-blue/60 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-smooth" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition-smooth translate-y-4 group-hover:translate-y-0">
              <h3 className="text-2xl text-white font-display font-medium">Scientific Inquiry</h3>
              <p className="text-white/60 text-[10px] uppercase tracking-widest mt-4">ICT Labs & Discovery</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative h-[350px] overflow-hidden bg-white"
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              alt="Arts"
            />
            <div className="absolute inset-0 bg-brand-red/60 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-smooth" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition-smooth translate-y-4 group-hover:translate-y-0">
              <h3 className="text-2xl text-white font-display font-medium">Creative Arts</h3>
              <p className="text-white/60 text-[10px] uppercase tracking-widest mt-4">Unleashing Talent</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 flex justify-center">
          <button className="text-brand-charcoal font-bold inline-flex items-center gap-4 group">
            <span className="text-lg">View Full Experience Gallery</span>
            <div className="w-12 h-12 rounded-full border border-brand-gray flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
