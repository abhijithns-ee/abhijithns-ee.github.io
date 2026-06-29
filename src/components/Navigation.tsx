import { motion } from 'motion/react';
import DynamicIcon from './DynamicIcon';

interface NavigationProps {
  activeSection: 'home' | 'internships' | 'credentials' | 'achievements' | 'contact';
  setActiveSection: (section: 'home' | 'internships' | 'credentials' | 'achievements' | 'contact') => void;
  messageCount: number;
}

export default function Navigation({ activeSection, setActiveSection, messageCount }: NavigationProps) {
  const navItems = [
    { id: 'home' as const, label: 'Resume' },
    { id: 'internships' as const, label: 'Experiences' },
    { id: 'credentials' as const, label: 'Credentials' },
    { id: 'achievements' as const, label: 'Achievements' },
    { id: 'contact' as const, label: 'Recruiter Desk' },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md flex justify-between items-center"
      id="header-nav"
    >
      {/* Brand logo in Artistic style */}
      <div 
        onClick={() => setActiveSection('home')}
        className="flex items-center gap-3 cursor-pointer group"
        id="nav-logo"
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
          <span className="text-black font-serif italic font-bold text-xs">AN</span>
        </div>
        <div className="flex flex-col">
          <span className="font-sans font-bold text-xs md:text-sm tracking-tight text-white uppercase group-hover:text-blue-400 transition-colors">
            Abhijith N S / PORTFOLIO '26
          </span>
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
            Electrical & Electronics Engineer
          </span>
        </div>
      </div>

      {/* Spaced out minimal text links matching Artistic style */}
      <nav className="flex items-center gap-6 md:gap-10" id="main-nav">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`relative py-1 font-serif text-[10px] md:text-xs uppercase tracking-widest font-semibold transition-all duration-300 outline-none cursor-pointer ${
                isActive 
                  ? 'text-white border-b-2 border-blue-500' 
                  : 'text-slate-400 hover:text-white hover:border-b hover:border-white/40'
              }`}
              id={`nav-item-${item.id}`}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {item.label}
                {item.id === 'contact' && messageCount > 0 && (
                  <span className="flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Mini status widget styled as Artistic tagline */}
      <div className="hidden lg:flex items-center gap-3 border border-white/15 px-3 py-1.5 rounded-none text-[10px] font-mono uppercase tracking-wider" id="status-widget">
        <span className="w-1.5 h-1.5 bg-blue-500 animate-pulse rounded-full"></span>
        <span className="text-slate-400">
          Available Summer &apos;26
        </span>
      </div>
    </motion.header>
  );
}
