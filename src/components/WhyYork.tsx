import { motion } from 'motion/react';
import { Users, MapPin, GraduationCap, Trophy, ArrowRight } from 'lucide-react';

const cards = [
  {
    title: '2½ to 18 Years',
    desc: 'Supporting students through every stage of learning, from early discovery to global readiness.',
    icon: Users,
    color: 'bg-brand-blue'
  },
  {
    title: 'Multiple Campuses',
    desc: 'Strategically located branches offering modern facilities and a consistent standard of excellence.',
    icon: MapPin,
    color: 'bg-brand-red'
  },
  {
    title: 'Academic Excellence',
    desc: 'Balanced international-standard education pathways that inspire curiosity and critical thinking.',
    icon: GraduationCap,
    color: 'bg-brand-blue'
  },
  {
    title: 'Student Development',
    desc: 'Leadership, creativity, sports, and character-building opportunities for a holistic education.',
    icon: Trophy,
    color: 'bg-brand-red'
  }
];

export default function WhyYork() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left: Text Content */}
        <div className="w-full lg:w-2/5 sticky top-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-red font-accent font-bold uppercase tracking-[0.3em] text-[10px]">
              Why York International
            </span>
            <h2 className="text-5xl md:text-6xl font-light text-brand-charcoal mt-6 leading-[1.1] tracking-tighter">
              Education <br />
              <span className="italic text-brand-blue font-medium">Beyond the Classroom</span>
            </h2>
            <div className="w-12 h-1 bg-brand-blue mt-8 mb-8" />
            <p className="text-lg text-brand-charcoal/60 leading-relaxed max-w-sm">
              York International School nurtures students to become confident, compassionate, and globally minded individuals through academic excellence and character building.
            </p>
            
            <div className="mt-12">
              <button className="text-[11px] font-bold uppercase tracking-widest text-brand-charcoal flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-smooth">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <span>Discover Our Philosophy</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: Cards Grid */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100 overflow-hidden shadow-2xl shadow-gray-200/50">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-12 flex flex-col items-start gap-8 group hover:bg-brand-white transition-smooth"
            >
              <div className={`w-12 h-12 ${card.color} flex items-center justify-center rounded-sm shadow-xl shadow-brand-blue/10`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-display font-medium text-brand-charcoal">
                  {card.title}
                </h3>
                <p className="text-brand-charcoal/50 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <div className="w-6 h-px bg-gray-200 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
