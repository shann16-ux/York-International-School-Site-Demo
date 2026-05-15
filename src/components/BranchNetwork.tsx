import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const campuses = [
  {
    name: 'Sapugaskanda',
    type: 'Main Branch',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756eaa589?q=80&w=2070&auto=format&fit=crop',
    desc: 'Comprehensive academic and extracurricular excellence at our flagship location.'
  },
  {
    name: 'Wattala',
    type: 'Academic Hub',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1932&auto=format&fit=crop',
    desc: 'Dynamic learning focused on primary and secondary student engagement.'
  },
  {
    name: 'Kadawatha',
    type: 'Junior & Senior Branch',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
    desc: 'Modern environment supporting holistic student development.'
  },
  {
    name: 'Graduate Campus',
    type: 'Higher Learning',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop',
    desc: 'Advanced education and higher discovery opportunities for mature learners.'
  }
];

export default function BranchNetwork() {
  return (
    <section className="py-32 px-6 md:px-12 bg-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:max-w-xl"
          >
            <span className="text-brand-blue font-accent font-bold uppercase tracking-[0.2em] text-xs">
              Reach & Impact
            </span>
            <h2 className="text-4xl md:text-6xl text-brand-charcoal mt-6 font-display font-medium leading-tight">
              A Global Presence <br />
              <span className="italic">Local Roots</span>
            </h2>
            <p className="text-lg text-brand-charcoal/60 mt-8">
              Explore our strategically located campuses, each designed to provide a safe, inspiring, and technologically advanced learning environment for our students.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-3 bg-white text-brand-charcoal border border-brand-gray rounded-full font-bold hover:bg-brand-gray transition-colors">
              View All Locations
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {campuses.map((campus, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative h-[600px] overflow-hidden cursor-pointer shadow-2xl"
            >
              <img
                src={campus.image}
                alt={campus.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent opacity-60" />
              <div className="absolute inset-0 border border-white/10 m-6 transition-smooth group-hover:m-8" />
              
              <div className="absolute bottom-0 left-0 p-12 w-full flex justify-between items-end">
                <div className="flex flex-col gap-2">
                  <span className="text-brand-red font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">
                    {campus.type}
                  </span>
                  <h3 className="text-4xl text-white font-display font-light tracking-tight">{campus.name}</h3>
                  <div className="w-12 h-[1px] bg-white group-hover:w-full transition-all duration-700 mt-4" />
                  <p className="text-white/60 max-w-sm text-sm leading-relaxed mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-smooth">
                    {campus.desc}
                  </p>
                </div>
                <div className="bg-white p-5 rounded-sm shadow-2xl group-hover:bg-brand-blue group-hover:text-white transition-smooth">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
