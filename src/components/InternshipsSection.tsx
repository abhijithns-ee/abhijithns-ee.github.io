import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { INTERNSHIPS } from '../data/internships';
import { Internship, InternshipType } from '../types';
import DynamicIcon from './DynamicIcon';

export default function InternshipsSection() {
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);

  const filteredInternships = INTERNSHIPS;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 w-full max-w-5xl mx-auto pt-28 pb-20 px-4 md:px-8"
      id="section-internships"
    >
      {/* Absolute Decorative background text */}
      <div className="absolute top-28 left-4 text-[180px] md:text-[240px] font-bold text-white/[0.015] pointer-events-none select-none font-sans tracking-tighter leading-none z-0">
        ARCHIVE
      </div>

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 relative z-10" id="internships-header">
        <div>
          <span className="font-mono text-[10px] text-blue-400 uppercase tracking-[0.25em] block mb-3">
            Chronology of Impact
          </span>
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Internship <span className="italic font-serif text-blue-500 font-normal">Experiences</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl">
            A documented history of prototyping intelligent technology solutions, improving hardware-software latency, and deploying micro-architecture
          </p>
        </div>
      </div>

      {/* Vertical List of Internships - full width one-by-one ledger style */}
      <motion.div 
        layout 
        className="flex flex-col gap-6 relative z-10"
        id="internships-list"
      >
        <AnimatePresence mode="popLayout">
          {filteredInternships.map((intern, index) => (
            <motion.div
              key={intern.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              onClick={() => setSelectedInternship(intern)}
              className="relative overflow-hidden cursor-pointer bg-[#0d0d0d] border border-white/10 rounded-none p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl group transition-all hover:border-blue-500/50"
              id={`intern-card-${intern.id}`}
            >
              {/* Colored tag line left side */}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-blue-500 group-hover:h-full transition-all duration-300" />

              <div className="flex items-start gap-5 flex-1">
                <div className="p-3 bg-white/5 border border-white/10 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300 shrink-0">
                  <DynamicIcon name={intern.logo} size={20} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 border border-white/10 px-2 py-0.5 bg-black">
                      {intern.type}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg md:text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                    {intern.company}
                  </h3>
                  <p className="text-xs font-mono text-blue-400 font-medium tracking-wider mt-0.5">
                    {intern.role}
                  </p>
                  
                  {/* First accomplishment highlighted */}
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed mt-3 max-w-3xl line-clamp-2">
                    &ldquo;{intern.description[0]}&rdquo;
                  </p>

                  {/* Tech stack inline tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {intern.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-black border border-white/5 text-[9px] font-mono text-slate-400 uppercase tracking-wider rounded-none">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Date & Interactive CTA block */}
              <div className="w-full md:w-auto border-t md:border-t-0 border-white/5 pt-4 md:pt-0 mt-2 md:mt-0 flex md:flex-col justify-between items-center md:items-end shrink-0 gap-3">
                <div className="font-mono text-sm font-semibold text-white bg-white/5 px-3 py-1 border border-white/5">
                  {intern.period}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-blue-400 group-hover:text-white flex items-center gap-1.5 transition-colors">
                  Deep Dive
                  <DynamicIcon name="ChevronRight" size={12} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Expandable Internship Detail Drawer */}
      <AnimatePresence>
        {selectedInternship && (
          <div className="fixed inset-0 z-50 flex items-center justify-end" id="drawer-overlay">
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInternship(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
            />

            {/* Sliding Content Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 240 }}
              className="relative w-full max-w-xl h-full bg-[#0d0d0d] border-l border-white/10 shadow-2xl p-6 md:p-8 flex flex-col justify-between overflow-y-auto z-10 rounded-none"
              id="drawer-panel"
            >
              <div>
                {/* Header controls inside drawer */}
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={() => setSelectedInternship(null)}
                    className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 hover:text-white bg-black border border-white/10 px-3 py-1.5 rounded-none cursor-pointer uppercase tracking-wider"
                    id="drawer-close"
                  >
                    <DynamicIcon name="X" size={11} />
                    Close
                  </button>
                  <span className="text-[10px] font-mono bg-black border border-white/10 px-3 py-1 rounded-none text-blue-400 uppercase tracking-widest">
                    {selectedInternship.type}
                  </span>
                </div>

                {/* Main branding */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center">
                    <DynamicIcon name={selectedInternship.logo} className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-2xl text-white">
                      {selectedInternship.company}
                    </h3>
                    <p className="font-sans text-slate-300 text-sm font-medium">
                      {selectedInternship.role}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 bg-black/60 border border-white/10 rounded-none p-4 mb-8 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <DynamicIcon name="MapPin" size={12} className="text-slate-500" />
                    <span>{selectedInternship.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DynamicIcon name="Calendar" size={12} className="text-slate-500" />
                    <span>{selectedInternship.period}</span>
                  </div>
                </div>

                {/* Major accomplishments list */}
                <div className="mb-8">
                  <h4 className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-4">
                    Core Accomplishments
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {selectedInternship.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-xs md:text-sm text-slate-300 leading-relaxed">
                        <span className="text-blue-500 select-none font-bold">&bull;</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* High contrast key impact metrics */}
                <div className="mb-8">
                  <h4 className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-4">
                    Key Performance Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedInternship.impactMetrics.map((metric) => (
                      <div key={metric.label} className="bg-black/60 border border-white/10 rounded-none p-4 text-center">
                        <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">{metric.label}</div>
                        <div className="text-lg font-serif italic font-bold text-white mt-1.5">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended quote if available */}
                {selectedInternship.recommendation && (
                  <div className="bg-[#141414] border border-white/10 rounded-none p-6 mb-8 relative overflow-hidden">
                    <div className="absolute top-2 right-3 text-6xl font-serif text-white/[0.03] select-none pointer-events-none">&ldquo;</div>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed italic font-serif relative z-10">
                      &ldquo;{selectedInternship.recommendation.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 mt-5 border-t border-white/5 pt-4 relative z-10">
                      {selectedInternship.recommendation.avatarUrl && (
                        <img
                          src={selectedInternship.recommendation.avatarUrl}
                          alt={selectedInternship.recommendation.author}
                          className="w-8 h-8 rounded-full object-cover border border-white/10"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      <div>
                        <div className="text-[11px] font-sans font-bold text-white leading-tight">
                          {selectedInternship.recommendation.author}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                          {selectedInternship.recommendation.role}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Technologies tags list */}
                <div className="mb-4">
                  <h4 className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-4">
                    Technologies Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedInternship.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-none bg-black border border-white/10 text-xs font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom drawer action buttons */}
              <div className="pt-6 border-t border-white/10 mt-8 flex gap-3">
                {selectedInternship.projectLink && (
                  <a
                    href={selectedInternship.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-3 bg-white text-black hover:bg-blue-600 hover:text-white text-xs uppercase tracking-wider font-bold transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-none"
                  >
                    <DynamicIcon name="ExternalLink" size={12} />
                    Inspect Project Source
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
