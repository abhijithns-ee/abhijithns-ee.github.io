import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { CREDENTIALS_DATA, CredentialItem } from '../data/credentials';
import DynamicIcon from './DynamicIcon';

export default function CredentialsSection() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Core' | 'Fest' | 'Workshop'>('All');
  const [selectedItem, setSelectedItem] = useState<CredentialItem | null>(null);

  const filterOptions: ('All' | 'Core' | 'Fest' | 'Workshop')[] = ['All', 'Core', 'Workshop', 'Fest'];

  const filteredItems = activeFilter === 'All'
    ? CREDENTIALS_DATA
    : CREDENTIALS_DATA.filter(item => item.category === activeFilter);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 w-full max-w-5xl mx-auto pt-28 pb-20 px-4 md:px-8"
      id="section-credentials"
    >
      {/* Absolute Decorative background text */}
      <div className="absolute top-28 right-4 text-[180px] md:text-[240px] font-bold text-white/[0.015] pointer-events-none select-none font-sans tracking-tighter leading-none z-0 uppercase">
        HONORS
      </div>

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 relative z-10" id="credentials-header">
        <div>
          <span className="font-mono text-[10px] text-blue-400 uppercase tracking-[0.25em] block mb-3">
            ACCREDITATIONS &amp; ENGAGEMENTS
          </span>
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Credentials &amp; <span className="italic font-serif text-blue-500 font-normal">Activities</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl">
            A comprehensive tracking registry of engineering workshops, certified professional credentials, and leadership roles in prominent college technical fests.
          </p>
        </div>

        {/* Filter controls - sharp minimalist rectangular boxes */}
        <div className="flex flex-wrap gap-1 bg-black p-1 rounded-none border border-white/10" id="credentials-filter-controls">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-none text-[10px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
              id={`cred-filter-${filter.toLowerCase()}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical List of Credentials - Full Screen Width styled as elegant receipts / certificate ledgers */}
      <div className="flex flex-col gap-6 relative z-10" id="credentials-list">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-[#0d0d0d] border border-white/10 rounded-none p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer hover:border-blue-500/50 transition-colors duration-300"
              id={`cred-card-${item.id}`}
            >
              {/* Colored tag line left side */}
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
                    {item.credentialId && (
                      <span className="text-[8px] font-mono text-slate-500">
                        ID: {item.credentialId}
                      </span>
                    )}
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

              {/* Date & Interactive CTA block */}
              <div className="w-full md:w-auto border-t md:border-t-0 border-white/5 pt-4 md:pt-0 mt-2 md:mt-0 flex md:flex-col justify-between items-center md:items-end shrink-0 gap-3">
                <div className="font-mono text-sm font-semibold text-white bg-white/5 px-3 py-1 border border-white/5">
                  {item.period}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-blue-400 group-hover:text-white flex items-center gap-1.5 transition-colors">
                  View Specs
                  <DynamicIcon name="ChevronRight" size={12} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-[#0d0d0d] border border-white/10">
            <DynamicIcon name="AlertCircle" className="mx-auto text-slate-500 mb-4" size={32} />
            <h3 className="font-serif text-lg text-white">No items found</h3>
            <p className="text-slate-500 font-mono text-xs uppercase tracking-wider mt-1">Select a different filter above</p>
          </div>
        )}
      </div>

      {/* Slide-out Ledger Drawer for selected Credentials */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-end" id="credential-drawer-overlay">
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
            />

            {/* Sliding Content Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 240 }}
              className="relative w-full max-w-xl h-full bg-[#0d0d0d] border-l border-white/10 shadow-2xl p-6 md:p-8 flex flex-col justify-between overflow-y-auto z-10 rounded-none"
              id="credential-drawer-panel"
            >
              <div>
                {/* Header controls inside drawer */}
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 hover:text-white bg-black border border-white/10 px-3 py-1.5 rounded-none cursor-pointer uppercase tracking-wider"
                    id="credential-drawer-close"
                  >
                    <DynamicIcon name="X" size={11} />
                    Close
                  </button>
                  <span className="text-[10px] font-mono bg-black border border-white/10 px-3 py-1 rounded-none text-blue-400 uppercase tracking-widest">
                    {selectedItem.category}
                  </span>
                </div>

                {/* Main branding */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                    <DynamicIcon name={selectedItem.iconName} size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-2xl text-white">
                      {selectedItem.title}
                    </h3>
                    <p className="font-mono text-blue-400 text-xs font-medium tracking-wider mt-0.5">
                      {selectedItem.organization}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 bg-black/60 border border-white/10 rounded-none p-4 mb-8 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <DynamicIcon name="Calendar" size={12} className="text-slate-500" />
                    <span>TIMELINE: {selectedItem.period}</span>
                  </div>
                  {selectedItem.credentialId && (
                    <div className="flex items-center gap-2">
                      <DynamicIcon name="Award" size={12} className="text-slate-500" />
                      <span>CREDENTIAL SERIAL: {selectedItem.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* Core description */}
                <div className="mb-8">
                  <h4 className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-3">
                    Overview &amp; Scope
                  </h4>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Major highlights list */}
                <div className="mb-8">
                  <h4 className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-4">
                    Key Highlights &amp; Learned Competencies
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {selectedItem.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-xs md:text-sm text-slate-300 leading-relaxed">
                        <span className="text-blue-500 select-none font-bold">&bull;</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom drawer action buttons */}
              <div className="pt-6 border-t border-white/10 mt-8 flex flex-col gap-2 font-mono text-[10px] text-slate-500 text-center uppercase tracking-widest">
                VERIFIABLE RECORD OF ACHIEVEMENT
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
