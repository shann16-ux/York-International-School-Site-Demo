import { motion } from 'motion/react';
import { Microscope, Laptop, Trophy, Waves, Music, BookOpen } from 'lucide-react';

const facilities = [
  {
    title: 'Science Laboratories',
    icon: Microscope,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756eaa589?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'ICT Centers',
    icon: Laptop,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Sports Grounds',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Swimming Facilities',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756eaa589?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Multimedia Auditorium',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Modern Library',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Facilities() {
  return (
    <section className="py-32 bg-brand-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <span className="text-white/60 font-accent font-bold uppercase tracking-[0.2em] text-xs">
            Our Infrastructure
          </span>
          <h2 className="text-4xl md:text-6xl mt-6 font-display font-medium">
            World-Class <span className="italic">Facilities</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative group">
        <div className="flex gap-8 px-6 md:px-12 overflow-x-auto no-scrollbar pb-12 cursor-grab active:cursor-grabbing">
          {facilities.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex-shrink-0 w-[450px] relative rounded-[2rem] overflow-hidden group/card shadow-2xl h-[300px]"
            >
              <img
                src={fac.image}
                alt={fac.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <fac.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display">{fac.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Scroll helper */}
        <div className="hidden lg:flex absolute top-1/2 -right-12 -translate-y-1/2 flex-col items-center gap-4 transform rotate-90">
             <span className="text-[10px] uppercase tracking-widest font-bold opacity-30">Drag to explore</span>
             <div className="w-20 h-[1px] bg-white/20" />
        </div>
      </div>
    </section>
  );
}
