import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '#' },
  {
    name: 'About York',
    href: '#',
    subMenu: ['Our Story', 'Vision & Mission', 'Leadership', 'Why Choose York']
  },
  {
    name: 'Academics',
    href: '#',
    subMenu: ['Early Years', 'Primary School', 'Secondary School', 'Advanced Level', 'English Programs']
  },
  {
    name: 'Admissions',
    href: '#',
    subMenu: ['Admission Process', 'Entry Requirements', 'FAQs']
  },
  {
    name: 'Branches',
    href: '#',
    subMenu: ['Sapugaskanda', 'Wattala', 'Kadawatha', 'Graduate Campus']
  },
  {
    name: 'Student Life',
    href: '#',
    subMenu: ['Sports', 'Clubs & Societies', 'Facilities', 'Events', 'Gallery']
  },
  { name: 'News & Events', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-24 flex items-center px-6 md:px-10 border-b',
        isScrolled 
          ? 'bg-white shadow-sm border-gray-100' 
          : 'bg-white/80 backdrop-blur-md border-gray-100/50'
      )}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-brand-blue flex items-center justify-center rounded-sm shadow-lg shadow-brand-blue/20">
            <span className="text-white font-display font-bold text-2xl">Y</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-blue">
              York International
            </h1>
            <p className="text-[10px] tracking-[0.1em] font-medium uppercase text-brand-charcoal/40">
              School of Excellence
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setActiveSubMenu(item.name)}
              onMouseLeave={() => setActiveSubMenu(null)}
            >
              <a
                href={item.href}
                className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 text-brand-charcoal hover:text-brand-blue transition-colors duration-300"
              >
                {item.name}
                {item.subMenu && <ChevronDown className="w-3 h-3 opacity-50" />}
              </a>

              {/* Mega Menu Dropdown */}
              {item.subMenu && (
                <AnimatePresence>
                  {activeSubMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg overflow-hidden py-2"
                    >
                      {item.subMenu.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-6 py-2.5 text-sm text-brand-charcoal hover:bg-brand-gray hover:text-brand-blue transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-7 py-2.5 bg-brand-red text-white text-[11px] font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-brand-red/20 transform hover:-translate-y-0.5">
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-md transition-colors text-brand-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col p-8 pt-24 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <a
                    href={item.href}
                    className="text-2xl font-display font-bold text-brand-charcoal"
                    onClick={() => !item.subMenu && setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.subMenu && (
                    <div className="pl-4 flex flex-col gap-3 mt-2 border-l border-brand-gray">
                      {item.subMenu.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="text-brand-charcoal/60 hover:text-brand-blue"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <button className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl shadow-lg">
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
