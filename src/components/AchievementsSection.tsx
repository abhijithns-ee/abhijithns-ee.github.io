import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ACHIEVEMENTS_DATA, RESUME_INFO, AchievementItem } from '../data/achievements';
import DynamicIcon from './DynamicIcon';

export default function AchievementsSection() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Academic' | 'Competition' | 'Project' | 'Leadership'>('All');
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);
  const [showCopiedText, setShowCopiedText] = useState(false);

  const filterOptions: ('All' | 'Academic' | 'Competition' | 'Project' | 'Leadership')[] = [
    'All',
    'Academic',
    'Competition',
    'Project',
    'Leadership'
  ];

  const filteredAchievements = activeFilter === 'All'
    ? ACHIEVEMENTS_DATA
    : ACHIEVEMENTS_DATA.filter(item => item.category === activeFilter);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopiedText(true);
    setTimeout(() => setShowCopiedText(false), 2500);
  };

  console.log("Raw Data:", ACHIEVEMENTS_DATA);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 w-full max-w-5xl mx-auto pt-28 pb-20 px-4 md:px-8"
      id="section-achievements"
    >
      {/* Decorative huge typography background */}
      <div className="absolute top-28 right-4 text-[180px] md:text-[240px] font-bold text-white/[0.012] pointer-events-none select-none font-sans tracking-tighter leading-none z-0 uppercase">
        MERIT
      </div>

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 relative z-10" id="achievements-header">
        <div>
          <span className="font-mono text-[10px] text-blue-400 uppercase tracking-[0.25em] block mb-3">
            ACCOMPLISHMENTS &amp; DOSSIER
          </span>
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Major <span className="italic font-serif text-blue-500 font-normal">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl">
            Review professional milestones, key skill classifications, and academic distinctions. Designed directly from verified engineering archives.
          </p>
        </div>
      </div>

      {/* 1. Resume & Skills Dossier - Bento Style Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 relative z-10" id="resume-dossier">
        {/* Profile Card & Resume Downloads */}
        <div className="lg:col-span-1 bg-[#0d0d0d] border border-white/10 p-6 md:p-8 flex flex-col justify-between relative group">
          <div className="absolute top-0 left-0 w-[2px] h-0 bg-blue-500 group-hover:h-full transition-all duration-300" />
          
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-none border border-white/10 p-1 bg-white/5">
                <img
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&auto=format&fit=crop&q=80"
                  alt="Abhijith N S"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white leading-tight">{RESUME_INFO.fullName}</h3>
                <p className="font-mono text-[9px] text-blue-400 uppercase tracking-wider mt-0.5">{RESUME_INFO.professionalTitle}</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed mb-6 font-sans">
              {RESUME_INFO.summary}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            {/* Quick action buttons */}
            <button
              onClick={() => {
                alert("Resume Download initialized. In a live environment, this downloads 'Abhijith_NS_Resume.pdf'. You can customize the download link inside /src/data/achievements.ts.");
              }}
              className="w-full py-3 bg-white text-black text-[10px] uppercase font-mono font-bold tracking-widest hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <DynamicIcon name="Download" size={12} />
              Download Resume (PDF)
            </button>
            
            <button
              onClick={handleCopyLink}
              className="w-full py-3 bg-transparent border border-white/10 text-white text-[10px] uppercase font-mono font-bold tracking-widest hover:bg-white/5 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              {showCopiedText ? (
                <>
                  <DynamicIcon name="Check" size={12} className="text-emerald-400 animate-pulse" />
                  Portfolio Link Copied!
                </>
              ) : (
                <>
                  <DynamicIcon name="ExternalLink" size={12} className="text-slate-400" />
                  Share Portfolio
                </>
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Skill Matrix classification */}
        <div className="lg:col-span-2 bg-[#0d0d0d] border border-white/10 p-6 md:p-8 flex flex-col justify-between relative group">
          <div className="absolute top-0 left-0 w-[2px] h-0 bg-blue-500 group-hover:h-full transition-all duration-300" />
          
          <div>
            <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="font-mono text-[8px] text-blue-400 uppercase tracking-widest">TECHNICAL COMPENDIUM</span>
                <h3 className="font-serif text-xl text-white mt-1">Core Competency <span className="italic font-serif text-blue-500 font-normal">Matrix</span></h3>
              </div>
              <span className="font-mono text-[9px] text-slate-500 hidden sm:inline">Skills &amp; Frameworks</span>
            </div>

            <div className="flex flex-col gap-6">
              {RESUME_INFO.skillsByCategory.map((categoryGroup, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h4 className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                    {categoryGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {categoryGroup.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 bg-black border border-white/5 hover:border-blue-500/20 text-xs font-mono text-slate-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-center sm:text-right">
            <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider italic">
              * Engineered through rigorous labs &amp; field training sessions
            </span>
          </div>
        </div>
      </div>

      {/* 2. Achievements Ledger - Vertical scroll list with filter options */}
      <div className="w-full flex flex-col gap-6" id="achievements-ledger-list">
        <div className="border-b border-white/10 pb-4 mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="font-mono text-[9px] text-blue-400 uppercase tracking-[0.25em] block mb-2">
              Competitive Ledger
            </span>
            <h2 className="font-serif font-light text-2xl md:text-3xl text-white tracking-tight">
              Major Honors &amp; <span className="italic font-serif text-blue-500 font-normal">Accolades</span>
            </h2>
          </div>

          {/* Filter selection boxes */}
          <div className="flex flex-wrap gap-1 bg-black p-1 rounded-none border border-white/10" id="achievements-filter-controls">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-none text-[9px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
                id={`ach-filter-${filter.toLowerCase()}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Smooth vertical list */}
        <div className="flex flex-col gap-6" id="achievements-scroll-container">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                onClick={() => setSelectedAchievement(item)}
                className="group relative bg-[#0d0d0d] border border-white/10 rounded-none p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer hover:border-blue-500/50 transition-colors duration-300 animate-fade-in"
                id={`ach-card-${item.id}`}
              >
                {/* Visual marker */}
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-blue-500 group-hover:h-full transition-all duration-300" />

                <div className="flex items-start gap-5 flex-1">
                  <div className="p-3 bg-white/5 border border-white/10 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300 shrink-0">
                    <DynamicIcon name={item.iconName} size={20} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 border border-white/10 px-2 py-0.5 bg-black">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-lg md:text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-400 font-medium tracking-wider mt-0.5">
                      {item.organization}
                    </p>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed mt-3 max-w-3xl line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Score badge & interactive view */}
                <div className="w-full md:w-auto border-t md:border-t-0 border-white/5 pt-4 md:pt-0 mt-2 md:mt-0 flex md:flex-col justify-between items-center md:items-end shrink-0 gap-3">
                  {item.metric ? (
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">{item.metric.label}</span>
                      <span className="text-sm font-serif font-bold text-white mt-0.5 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5">{item.metric.value}</span>
                    </div>
                  ) : (
                    <div className="font-mono text-xs text-slate-500 bg-white/5 px-2.5 py-1 border border-white/5">
                      {item.year}
                    </div>
                  )}
                  <div className="text-[10px] font-mono uppercase tracking-wider text-blue-400 group-hover:text-white flex items-center gap-1.5 transition-colors">
                    View Achievement
                    <DynamicIcon name="ChevronRight" size={12} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredAchievements.length === 0 && (
            <div className="text-center py-20 bg-[#0d0d0d] border border-white/10">
              <DynamicIcon name="AlertCircle" className="mx-auto text-slate-500 mb-4" size={32} />
              <h3 className="font-serif text-lg text-white">No achievements found</h3>
              <p className="text-slate-500 font-mono text-xs uppercase tracking-wider mt-1">Select a different category above</p>
            </div>
          )}
        </div>
      </div>

      {/* Slide-out Drawer for selected Achievements */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 z-50 flex items-center justify-end" id="achievement-drawer-overlay">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAchievement(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 240 }}
              className="relative w-full max-w-xl h-full bg-[#0d0d0d] border-l border-white/10 shadow-2xl p-6 md:p-8 flex flex-col justify-between overflow-y-auto z-10 rounded-none"
              id="achievement-drawer-panel"
            >
              <div>
                {/* Header close & tag */}
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 hover:text-white bg-black border border-white/10 px-3 py-1.5 rounded-none cursor-pointer uppercase tracking-wider"
                    id="achievement-drawer-close"
                  >
                    <DynamicIcon name="X" size={11} />
                    Close
                  </button>
                  <span className="text-[10px] font-mono bg-black border border-white/10 px-3 py-1 rounded-none text-blue-400 uppercase tracking-widest">
                    {selectedAchievement.category}
                  </span>
                </div>

                {/* Banner & Brand */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                    <DynamicIcon name={selectedAchievement.iconName} size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-2xl text-white">
                      {selectedAchievement.title}
                    </h3>
                    <p className="font-mono text-blue-400 text-xs font-medium tracking-wider mt-0.5">
                      {selectedAchievement.organization}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 bg-black/60 border border-white/10 rounded-none p-4 mb-8 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <DynamicIcon name="Calendar" size={12} className="text-slate-500" />
                    <span>TIMELINE: YEAR {selectedAchievement.year}</span>
                  </div>
                  {selectedAchievement.metric && (
                    <div className="flex items-center gap-2">
                      <DynamicIcon name="Award" size={12} className="text-slate-500" />
                      <span>METRIC KEY: {selectedAchievement.metric.label.toUpperCase()} — {selectedAchievement.metric.value}</span>
                    </div>
                  )}
                </div>

                {/* Overview & scope */}
                <div className="mb-8">
                  <h4 className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-3">
                    Milestone Details
                  </h4>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                    {selectedAchievement.description}
                  </p>
                </div>

                {/* Highlights and bullets */}
                <div className="mb-8">
                  <h4 className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-4">
                    Key Performance Indicators
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {selectedAchievement.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-xs md:text-sm text-slate-300 leading-relaxed">
                        <span className="text-blue-500 select-none font-bold">&bull;</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom footer tag */}
              <div className="pt-6 border-t border-white/10 mt-8 flex flex-col gap-2 font-mono text-[10px] text-slate-500 text-center uppercase tracking-widest">
                CERTIFIED HONORS DOSSIER &bull; CET
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
