import { motion } from 'motion/react';

const stages = [
  {
    num: '01',
    title: 'Early Years',
    desc: 'A nurturing introduction to learning through creativity, social interaction, and supervised discovery.',
    label: 'Foundation Stage'
  },
  {
    num: '02',
    title: 'Primary School',
    desc: 'Building strong foundations in academics, communication, and confidence through a diverse curriculum.',
    label: 'Year 1 - Year 6'
  },
  {
    num: '03',
    title: 'Secondary School',
    desc: 'Encouraging critical thinking, leadership, and global awareness while preparing for international exams.',
    label: 'Year 7 - Year 11'
  },
  {
    num: '04',
    title: 'Advanced Level',
    desc: 'Pre-university preparation that empowers students to excel in higher education and future global careers.',
    label: 'Sixth Form'
  }
];

export default function AcademicJourney() {
  return (
    <section className="py-32 px-6 md:px-12 bg-brand-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-24"
        >
          <span className="text-brand-red font-accent font-bold uppercase tracking-[0.3em] text-[10px]">
            Pathways to Success
          </span>
          <h2 className="text-5xl md:text-7xl mt-6 font-display font-light leading-tight tracking-tighter">
            The Complete <br />
            <span className="italic font-medium text-brand-blue">Learning Journey</span>
          </h2>
        </motion.div>

        {/* Timeline Desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-px bg-white/5 border border-white/5 relative">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative z-10 bg-brand-charcoal p-12 flex flex-col gap-8 group hover:bg-white/5 transition-smooth min-h-[450px]"
            >
              <div className="flex justify-between items-start">
                <span className="font-display text-5xl font-light text-white opacity-20 group-hover:opacity-100 group-hover:text-brand-blue transition-smooth">{stage.num}</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-red opacity-0 group-hover:opacity-100 transition-smooth">{stage.label}</span>
              </div>

              <div className="mt-auto">
                <h3 className="text-2xl font-display font-medium mb-6 group-hover:italic transition-smooth">{stage.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-[240px]">
                  {stage.desc}
                </p>
              </div>
              
              <div className="h-[2px] bg-brand-blue w-0 group-hover:w-full transition-all duration-700 mt-4" />
            </motion.div>
          ))}
        </div>

        {/* Vertical Timeline for Mobile */}
        <div className="lg:hidden flex flex-col gap-12">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-display text-xl">
                  {stage.num}
                </div>
                <div className="flex-1 w-[1px] bg-white/20" />
              </div>
              <div className="pb-8">
                <span className="text-[10px] uppercase tracking-widest text-brand-red font-bold">{stage.label}</span>
                <h3 className="text-2xl font-display font-medium mt-1 mb-3">{stage.title}</h3>
                <p className="text-white/60 leading-relaxed">{stage.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="px-10 py-4 border border-white/20 rounded-full hover:bg-white hover:text-brand-charcoal font-bold transition-smooth">
            Download Prospectus
          </button>
        </div>
      </div>
    </section>
  );
}
