import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { cn } from '../lib/utils';

const footerLinks = [
  {
    title: 'Quick Links',
    links: ['About', 'Academics', 'Admissions', 'Student Life', 'Contact']
  },
  {
    title: 'Branches',
    links: ['Sapugaskanda', 'Wattala', 'Kadawatha', 'Graduate Campus']
  }
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      {/* Bottom Feature Bar (Campuses) */}
      <div className="bg-brand-blue flex flex-wrap lg:flex-nowrap items-center min-h-[128px]">
        {[
          { name: 'Sapugaskanda', label: 'Campus 01', sub: 'Flagship Academic Hub' },
          { name: 'Wattala', label: 'Campus 02', sub: 'Creative & Sports Excellence' },
          { name: 'Kadawatha', label: 'Campus 03', sub: 'Modern Holistic Learning' },
          { name: 'Graduate Campus', label: 'Campus 04', sub: 'Higher Education Path' },
        ].map((campus, idx) => (
          <div key={idx} className={cn(
            "flex-1 px-8 py-8 flex flex-col justify-center min-w-[250px]",
            idx < 3 ? "lg:border-r border-white/10" : ""
          )}>
            <span className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold mb-1">{campus.label}</span>
            <h3 className="text-white font-display font-medium text-lg tracking-tight">{campus.name}</h3>
            <p className="text-white/60 text-[10px] mt-1 uppercase tracking-widest">{campus.sub}</p>
          </div>
        ))}
      </div>

      <div className="pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Col */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm">
                <span className="text-white font-display font-bold text-2xl">Y</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xs font-bold tracking-[0.2em] uppercase">York International</h1>
                <p className="text-[10px] tracking-[0.1em] text-white/40 uppercase">School of Excellence</p>
              </div>
            </div>
            <p className="text-white/30 leading-relaxed text-sm max-w-xs italic">
              "Shaping confident learners for a global future through academic prestige and moral integrity."
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-smooth">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          {footerLinks.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-8">
              <h4 className="text-lg font-bold font-display">{group.title}</h4>
              <nav className="flex flex-col gap-4">
                {group.links.map((link) => (
                  <a key={link} href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          ))}

          {/* Contact Col */}
          <div className="flex flex-col gap-8">
            <h4 className="text-lg font-bold font-display">Contact Us</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-brand-red mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs text-white/40 uppercase tracking-widest font-bold mb-1">Call Us</span>
                  <span className="text-sm">+94 11 292 2333</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-brand-blue mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs text-white/40 uppercase tracking-widest font-bold mb-1">Email Us</span>
                  <span className="text-sm">info@yorkinternational.com</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white/60 mt-1" />
                <div className="flex flex-col">
                   <span className="text-xs text-white/40 uppercase tracking-widest font-bold mb-1">Main Head Office</span>
                   <span className="text-sm leading-relaxed">No. 123, Sapugaskanda, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} York International School. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/30 text-[10px] uppercase tracking-widest font-medium hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 text-[10px] uppercase tracking-widest font-medium hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
