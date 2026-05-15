import { motion } from 'motion/react';
import { Mail, ClipboardCheck, UserPlus } from 'lucide-react';

const steps = [
  {
    icon: Mail,
    title: 'Submit Enquiry',
    desc: 'Fill out our online enquiry form to begin the process.'
  },
  {
    icon: ClipboardCheck,
    title: 'Visit & Assessment',
    desc: 'Tour our campus and complete the entry assessment.'
  },
  {
    icon: UserPlus,
    title: 'Enrolment',
    desc: 'Finalize documentation and welcome your child to York.'
  }
];

export default function AdmissionsCTA() {
  return (
    <section className="relative py-32 bg-brand-white overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto mb-24"
        >
          <span className="text-brand-red font-accent font-bold uppercase tracking-[0.3em] text-[10px]">
            Join Our Community
          </span>
          <h2 className="text-5xl md:text-7xl text-brand-charcoal mt-6 font-display font-light leading-tight tracking-tighter">
            Begin Your Child’s <br />
            <span className="italic font-medium text-brand-blue">Journey with York</span>
          </h2>
          <p className="text-lg text-brand-charcoal/50 mt-10 leading-relaxed max-w-2xl mx-auto">
            Join a learning community that inspires academic achievement, confidence, leadership, and lifelong success.
          </p>
        </motion.div>

        {/* 3-Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100 mb-20 overflow-hidden shadow-2xl">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-white p-16 flex flex-col items-center text-center group hover:bg-brand-white transition-smooth"
            >
              <div className="w-16 h-16 bg-brand-gray flex items-center justify-center mb-10 transition-smooth group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-xl group-hover:shadow-brand-blue/20">
                <step.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-4">Step 0{idx + 1}</span>
              <h3 className="text-2xl font-medium font-display text-brand-charcoal mb-4 transition-smooth group-hover:italic">
                {step.title}
              </h3>
              <p className="text-brand-charcoal/40 text-sm leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <button className="px-10 py-4 bg-brand-red text-white text-[11px] font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-brand-red/20 transform hover:-translate-y-1">
            Start Registration
          </button>
          <button className="px-10 py-4 border border-gray-200 text-brand-charcoal text-[11px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all">
            Contact Admissions
          </button>
        </div>
      </div>
    </section>
  );
}
