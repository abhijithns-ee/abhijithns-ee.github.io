import { motion } from 'motion/react';
import DynamicIcon from './DynamicIcon';

interface HomeSectionProps {
  onNavigate: (section: 'home' | 'internships' | 'credentials' | 'contact') => void;
}

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  const education = [
    {
      institution: 'College of Engineering Trivandrum',
      period: '2025 — 2028',
      degree: 'BTech in Electrical & Electronics Engineering',
      logo: 'GraduationCap',
      description: 'Focusing on advanced power systems, power electronics, electrical machines, and control engineering. Actively involved in campus technical societies and hands-on laboratory research at one of India\'s most prestigious engineering institutes.',
      highlights: ['Power Systems', 'Electrical Machines', 'Control Engineering']
    },
    {
      institution: 'Govt. Polytechnic College Pala',
      period: '2022 — 2025',
      degree: 'Diploma in Electrical & Electronics Engineering',
      logo: 'BookOpen',
      description: 'Acquired a rigorous foundational knowledge in industrial electronics, electrical installations, electric circuits, and electrical machinery. Graduated at the top of the department with an outstanding academic record of 9.75 CGPA.',
      highlights: ['9.75 CGPA', 'Industrial Electronics', 'Department Topper']
    },
    {
      institution: 'St. Peters HSS Elanji',
      period: '2020 — 2022',
      degree: 'Plus-Two in Bio Science',
      logo: 'Award',
      description: 'Completed higher secondary education with major coursework in physics, chemistry, biology, and mathematics, laying a strong analytical and scientific groundwork for engineering studies.',
      highlights: ['Higher Secondary', 'Bio Science Major', 'Analytical Physics & Chemistry']
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 w-full max-w-5xl mx-auto pt-28 pb-16 px-4 md:px-8 flex flex-col items-center justify-center min-h-[90vh]"
      id="section-home"
    >
      {/* Absolute Decorative giant typography background matching Artistic Flair */}
      <div className="absolute top-24 right-0 text-[180px] md:text-[240px] font-bold text-white/[0.02] pointer-events-none select-none font-sans tracking-tighter leading-none z-0">
        ENGINEER
      </div>

      {/* Intro Hero Header */}
      <div className="text-center max-w-3xl mb-12 relative z-10" id="hero-header">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="relative inline-block mb-6"
        >
          {/* Elegant Circular Avatar frame representing the Artistic flair */}
          <div className="w-24 h-24 rounded-full border-2 border-white/20 p-1.5 shadow-2xl">
  <img
    src="/profile.jpg" 
    alt="Abhijith N S Profile"
    className="w-full h-full object-cover rounded-full"
  />
</div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border border-slate-950 rounded-full flex items-center justify-center shadow-lg">
            <DynamicIcon name="Sparkles" size={12} className="text-blue-600" />
          </div>
        </motion.div>

        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-mono text-[10px] text-blue-400 uppercase tracking-[0.25em] mb-4"
        >
          Electrical &amp; Electronics Engineering Student
        </motion.p>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-light text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-6"
        >
          Building interfaces that <span className="italic font-serif text-blue-500 font-normal">feel physical</span>.
        </motion.h1>

        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-sans text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
        >
          I am an Electrical &amp; Electronics Engineering student at the College of Engineering Trivandrum, with practical experience in original design manufacturing (ODM) at Sfo Technologies, power systems at KSEB, and industrial electrical manufacturing at KEL. I bridge core hardware engineering, industrial design, and highly tactile web interfaces.
        </motion.p>
      </div>

      {/* CTA Quick Buttons - Artistic minimal styling */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-16 relative z-10"
        id="cta-buttons"
      >
        <button
          onClick={() => onNavigate('internships')}
          className="group px-8 py-4 bg-white text-black text-xs uppercase font-bold tracking-widest hover:bg-blue-500 hover:text-white transition-colors duration-300 flex items-center gap-3 cursor-pointer"
          id="btn-goto-internships"
        >
          Explore Experiences
          <DynamicIcon name="ArrowRight" size={13} className="transition-transform group-hover:translate-x-1" />
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white text-xs uppercase font-bold tracking-widest transition-colors duration-300 flex items-center gap-3 cursor-pointer"
          id="btn-goto-contact"
        >
          <DynamicIcon name="Mail" size={13} className="text-slate-400" />
          Recruiter Desk
        </button>
      </motion.div>

      {/* Direct Communications Directory */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="w-full bg-[#0d0d0d] border border-white/10 p-6 md:p-8 mb-20 relative group overflow-hidden z-10"
        id="direct-communications"
      >
        <div className="absolute top-0 right-0 w-[4px] h-[4px] bg-blue-500 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[4px] h-[4px] bg-blue-500 animate-pulse" />

        <div className="border-b border-white/10 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="font-mono text-[9px] text-blue-400 uppercase tracking-[0.25em] block mb-1">
              Direct Channels
            </span>
            <h2 className="font-serif font-light text-xl md:text-2xl text-white tracking-tight">
              Communication <span className="italic font-serif text-blue-500 font-normal">Directory</span>
            </h2>
          </div>
          <span className="font-mono text-[8px] text-slate-500 uppercase tracking-widest bg-white/5 px-2.5 py-1 border border-white/5">
            Active & Verified
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email 1 */}
          <div className="flex items-start gap-3.5 p-3.5 bg-black/40 border border-white/5 hover:border-blue-500/30 transition-colors">
            <div className="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
              <DynamicIcon name="Mail" size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[8px] text-slate-500 uppercase tracking-wider block mb-0.5">Primary Email</span>
              <a href="mailto:abhijithnsee@gmail.com" className="text-xs md:text-sm font-mono text-slate-200 hover:text-blue-400 transition-colors break-all block">
                abhijithnsee@gmail.com
              </a>
            </div>
          </div>

          {/* Email 2 */}
          <div className="flex items-start gap-3.5 p-3.5 bg-black/40 border border-white/5 hover:border-blue-500/30 transition-colors">
            <div className="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
              <DynamicIcon name="Mail" size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[8px] text-slate-500 uppercase tracking-wider block mb-0.5">Secondary Email</span>
              <a href="mailto:abhijith777ns@gmail.com" className="text-xs md:text-sm font-mono text-slate-200 hover:text-blue-400 transition-colors break-all block">
                abhijith777ns@gmail.com
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-3.5 p-3.5 bg-black/40 border border-white/5 hover:border-blue-500/30 transition-colors">
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
              <DynamicIcon name="MessageSquare" size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[8px] text-slate-500 uppercase tracking-wider block mb-0.5">WhatsApp Chat</span>
              <a href="https://wa.me/918078531645" target="_blank" rel="noreferrer" className="text-xs md:text-sm font-mono text-slate-200 hover:text-emerald-400 transition-colors block">
                +91 8078531645
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3.5 p-3.5 bg-black/40 border border-white/5 hover:border-blue-500/30 transition-colors">
            <div className="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
              <DynamicIcon name="Phone" size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[8px] text-slate-500 uppercase tracking-wider block mb-0.5">Voice Line</span>
              <a href="tel:+919074357131" className="text-xs md:text-sm font-mono text-slate-200 hover:text-blue-400 transition-colors block">
                +91 9074357131
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start gap-3.5 p-3.5 bg-black/40 border border-white/5 hover:border-blue-500/30 transition-colors">
            <div className="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
              <DynamicIcon name="Link" size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[8px] text-slate-500 uppercase tracking-wider block mb-0.5">Professional Network</span>
              <a href="https://linkedin.com/in/abhijith-n-s" target="_blank" rel="noreferrer" className="text-xs md:text-sm font-mono text-slate-200 hover:text-blue-400 transition-colors block truncate">
                linkedin.com/in/abhijith-n-s
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3.5 p-3.5 bg-black/40 border border-white/5 hover:border-blue-500/30 transition-colors">
            <div className="p-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <DynamicIcon name="MapPin" size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[8px] text-slate-500 uppercase tracking-wider block mb-0.5">Base Operations</span>
              <span className="text-xs md:text-sm font-mono text-slate-200 block">
                Ernakulam, Kerala, India
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Education Block - Full width showcasing schools */}
      <div className="w-full flex flex-col gap-8 relative z-10" id="education-block">
        <div className="border-b border-white/10 pb-4 mb-2 flex justify-between items-end">
          <div>
            <span className="font-mono text-[9px] text-blue-400 uppercase tracking-[0.25em] block mb-2">
              Academic Path
            </span>
            <h2 className="font-serif font-light text-2xl md:text-3xl text-white tracking-tight">
              Educational <span className="italic font-serif text-blue-500 font-normal">Ledger</span>
            </h2>
          </div>
          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest hidden sm:inline">
            Chronological Order
          </span>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + idx * 0.15, duration: 0.6 }}
              className="bg-[#0d0d0d] border border-white/10 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6 hover:border-blue-500/50 transition-colors duration-300 relative group"
            >
              {/* Left Highlight Accent Line */}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-blue-500 group-hover:h-full transition-all duration-300" />
              
              <div className="flex-1 flex gap-5 items-start">
                <div className="p-3 bg-white/5 border border-white/10 rounded-none shrink-0 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300">
                  <DynamicIcon name={edu.logo} size={20} />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <h3 className="font-serif font-bold text-lg md:text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                      {edu.institution}
                    </h3>
                  </div>
                  <p className="font-mono text-xs text-blue-400 font-medium mb-4 uppercase tracking-wider">
                    {edu.degree}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                    {edu.description}
                  </p>
                  
                  {/* Highlights tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {edu.highlights.map((highlight, hIdx) => (
                      <span key={hIdx} className="px-2.5 py-1 bg-black border border-white/5 text-[9px] font-mono text-slate-400 uppercase tracking-wider rounded-none">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Date Block */}
              <div className="w-full md:w-auto shrink-0 flex md:flex-col justify-between items-end md:items-end border-t md:border-t-0 border-white/10 pt-4 md:pt-0 mt-2 md:mt-0 font-mono">
                <span className="text-xs text-slate-500 uppercase tracking-widest block md:hidden">Period</span>
                <span className="text-sm md:text-lg font-serif font-semibold text-white bg-white/5 md:bg-transparent px-3 py-1 md:p-0 border border-white/10 md:border-0">
                  {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
