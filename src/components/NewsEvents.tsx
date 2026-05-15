import { motion } from 'motion/react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    title: 'Top World Results in International Exams',
    date: 'Oct 15, 2025',
    category: 'Academic Achievement',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop'
  },
  {
    title: 'Inter-School Athletics Championship Winners',
    date: 'Sep 28, 2025',
    category: 'Sports Highlights',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Science & Innovation Exhibition 2025',
    date: 'Sep 12, 2025',
    category: 'School Events',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1932&auto=format&fit=crop'
  }
];

export default function NewsEvents() {
  return (
    <section className="py-32 px-6 md:px-12 bg-brand-gray/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-blue font-accent font-bold uppercase tracking-[0.2em] text-xs">
              Stay Updated
            </span>
            <h2 className="text-4xl md:text-5xl text-brand-charcoal mt-4 font-display font-medium">
              Latest <span className="italic">News & Events</span>
            </h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-brand-blue font-bold group"
          >
            View News Archive
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={item.title}
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold text-brand-blue uppercase tracking-wider flex items-center gap-2">
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex items-center gap-2 text-brand-charcoal/40 text-xs font-semibold mb-4">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal leading-tight mb-6 group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>
                <button className="text-brand-red font-bold text-sm inline-flex items-center gap-2 group/btn">
                  Read More
                  <div className="w-0 group-hover/btn:w-12 h-[1px] bg-brand-red transition-all duration-500" />
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden w-full mt-12 py-4 bg-white border border-brand-gray rounded-xl text-brand-blue font-bold flex items-center justify-center gap-2">
          View All News
        </button>
      </div>
    </section>
  );
}
