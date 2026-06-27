import { motion, AnimatePresence } from 'motion/react';
import { useState, FormEvent } from 'react';
import { ContactMessage } from '../types';
import DynamicIcon from './DynamicIcon';

interface ContactSectionProps {
  onAddMessage: (msg: ContactMessage) => void;
  savedMessages: ContactMessage[];
  onClearMessages: () => void;
}

export default function ContactSection({ onAddMessage, savedMessages, onClearMessages }: ContactSectionProps) {
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [opportunityType, setOpportunityType] = useState('Full-time');
  const [budget, setBudget] = useState('Market Rate');
  const [urgency, setUrgency] = useState('Standard');
  const [message, setMessage] = useState('');

  // Status flow states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState(0); // 0: Idle, 1: Connecting, 2: Encrypting, 3: Completed
  const [justSent, setJustSent] = useState(false);

  // Quick fill presets
  const applyPreset = (presetType: 'faang' | 'startup' | 'techlead') => {
    if (presetType === 'faang') {
      setName('Sarah Sterling');
      setCompany('Google (Vertex AI)');
      setEmail('sterling.s@google.com');
      setOpportunityType('Full-time');
      setBudget('$160k - $210k');
      setUrgency('Urgent');
      setMessage('Hi Abhijith, we saw your profile and we are highly impressed by your practical substation training at KSEB and academic excellence at CET. We are building custom control interfaces for high-power distribution grids and would love to discuss a core systems integration role with you.');
    } else if (presetType === 'startup') {
      setName('Dave Hustle');
      setCompany('Remix.AI');
      setEmail('dave@remix.ai');
      setOpportunityType('Contract');
      setBudget('$100/hr - $140/hr');
      setUrgency('Urgent');
      setMessage('Hey Abhijith! Saw your project showcasing transformer core designs and coil winding processes from your KEL training. We are looking for an engineer to help us design tactile, physical-feeling substation control dashboards. Extremely flexible contract terms.');
    } else if (presetType === 'techlead') {
      setName('Aiden Croft');
      setCompany('Stripe Billing');
      setEmail('acroft@stripe.com');
      setOpportunityType('Full-time');
      setBudget('Market Rate');
      setUrgency('Standard');
      setMessage('Abhijith, saw your work in original design manufacturing and product engineering support at Sfo Technologies. We have an opening in our critical systems team for a full-time hardware-software interface engineer. Let me know if you’d like to chat.');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setSubmitStep(1);

    // Simulate elite transmission steps
    setTimeout(() => {
      setSubmitStep(2);
      setTimeout(() => {
        setSubmitStep(3);
        setTimeout(() => {
          // Success
          const newMessage: ContactMessage = {
            id: Math.random().toString(36).substring(2, 9),
            senderName: name,
            companyName: company || 'Independent Recruiter',
            senderEmail: email,
            roleType: opportunityType,
            budgetRange: budget,
            isUrgent: urgency === 'Urgent',
            message: message,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          };

          onAddMessage(newMessage);
          setIsSubmitting(false);
          setJustSent(true);
          setSubmitStep(0);

          // Reset fields
          setName('');
          setEmail('');
          setCompany('');
          setOpportunityType('Full-time');
          setBudget('Market Rate');
          setUrgency('Standard');
          setMessage('');
        }, 1200);
      }, 1000);
    }, 1000);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 w-full max-w-5xl mx-auto pt-28 pb-20 px-4 md:px-8"
      id="section-contact"
    >
      {/* Absolute Decorative background text */}
      <div className="absolute top-28 right-4 text-[180px] md:text-[240px] font-bold text-white/[0.015] pointer-events-none select-none font-sans tracking-tighter leading-none z-0">
        CONTACT
      </div>

      {/* Header */}
      <div className="mb-16 relative z-10" id="contact-header">
        <span className="font-mono text-[10px] text-blue-400 uppercase tracking-[0.25em] block mb-3">
          Secure Direct Link
        </span>
        <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
          Recruiter <span className="italic font-serif text-blue-500 font-normal">Desk</span>
        </h2>
        <p className="text-slate-400 text-sm mt-3 max-w-xl">
          Transmit a detailed role payload or utilize our quick-fill recruiter presets to test state dispatch synchronization.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10" id="contact-content-grid">
        
        {/* Left Side: Form Controls */}
        <div className="lg:col-span-7 bg-[#0d0d0d] border border-white/10 rounded-none p-6 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden" id="contact-form-card">
          
          <AnimatePresence mode="wait">
            {!justSent && !isSubmitting && (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {/* Presets Bar */}
                <div id="presets-selector">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.15em] block mb-3">
                    Recruiter Quick-Fill Presets
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => applyPreset('faang')}
                      className="px-3.5 py-2 rounded-none text-[10px] font-mono uppercase tracking-wider bg-black hover:bg-white hover:text-black border border-white/10 text-white flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <DynamicIcon name="Sparkles" size={11} className="text-blue-400" />
                      Google Vertex AI
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPreset('startup')}
                      className="px-3.5 py-2 rounded-none text-[10px] font-mono uppercase tracking-wider bg-black hover:bg-white hover:text-black border border-white/10 text-white flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <DynamicIcon name="Layers" size={11} className="text-blue-400" />
                      Remix.AI (Startup)
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPreset('techlead')}
                      className="px-3.5 py-2 rounded-none text-[10px] font-mono uppercase tracking-wider bg-black hover:bg-white hover:text-black border border-white/10 text-white flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <DynamicIcon name="CreditCard" size={11} className="text-blue-400" />
                      Stripe Billing
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Sterling"
                      className="bg-black border border-white/10 focus:border-blue-500 rounded-none px-4 py-3 text-xs text-white outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. ssterling@google.com"
                      className="bg-black border border-white/10 focus:border-blue-500 rounded-none px-4 py-3 text-xs text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Company / Agency Name</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Google Vertex AI"
                    className="bg-black border border-white/10 focus:border-blue-500 rounded-none px-4 py-3 text-xs text-white outline-none transition-colors"
                  />
                </div>

                {/* Sub Options in Horizontal Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Opportunity</label>
                    <select
                      value={opportunityType}
                      onChange={(e) => setOpportunityType(e.target.value)}
                      className="bg-black border border-white/10 focus:border-blue-500 rounded-none px-3 py-3 text-xs text-white outline-none cursor-pointer"
                    >
                      <option value="Full-time">Full-time Role</option>
                      <option value="Contract">Contract / Dev</option>
                      <option value="Internship">Internship Role</option>
                      <option value="Co-op">Co-op Opportunity</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Compensation</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="bg-black border border-white/10 focus:border-blue-500 rounded-none px-3 py-3 text-xs text-white outline-none cursor-pointer"
                    >
                      <option value="Market Rate">Market Rate</option>
                      <option value="$100k - $130k">$100k - $130k</option>
                      <option value="$130k - $160k">$130k - $160k</option>
                      <option value="$160k - $210k">$160k - $210k</option>
                      <option value="$100/hr - $140/hr">$100/hr - $140/hr</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Urgency</label>
                    <div className="flex bg-black border border-white/10 p-1 rounded-none h-[42px] items-center">
                      {(['Standard', 'Urgent'] as const).map((urg) => (
                        <button
                          key={urg}
                          type="button"
                          onClick={() => setUrgency(urg)}
                          className={`flex-1 h-full text-[9px] font-mono uppercase tracking-widest font-semibold rounded-none cursor-pointer transition-colors ${
                            urgency === urg
                              ? urg === 'Urgent' ? 'bg-red-950/40 text-red-400 border border-red-900/40' : 'bg-white text-black'
                              : 'text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {urg}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Transmission Payload *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the stack, reporting structure, and why you reached out..."
                    className="bg-black border border-white/10 focus:border-blue-500 rounded-none px-4 py-3 text-xs text-white outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-4 bg-white hover:bg-blue-600 hover:text-white text-black font-mono uppercase font-bold text-xs tracking-widest transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-none"
                  id="btn-submit-message"
                >
                  <DynamicIcon name="Send" size={13} />
                  Initiate Secure Transfer
                </button>
              </motion.form>
            )}

            {/* Submitting step transition overlay */}
            {isSubmitting && (
              <motion.div
                key="submitting-state"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="h-[460px] flex flex-col items-center justify-center text-center gap-6"
                id="form-submitting"
              >
                {/* Tactical visual loading sequence */}
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-none border border-white/15 border-t-blue-500 animate-spin" />
                  <div className="absolute text-[10px] font-mono text-blue-400 font-bold">1010</div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-serif font-semibold text-lg text-white">
                    {submitStep === 1 ? 'Initializing Handshake...' : 'Encrypting Core Payload...'}
                  </h3>
                  <div className="flex justify-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <span className={submitStep >= 1 ? 'text-blue-400' : ''}>[HANDSHAKE]</span>
                    <span className={submitStep >= 2 ? 'text-blue-400' : ''}>&rarr; [ENCRYPT]</span>
                    <span className={submitStep >= 3 ? 'text-blue-400' : ''}>&rarr; [TRANSIT]</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 max-w-xs font-mono leading-relaxed bg-black border border-white/10 p-4 rounded-none uppercase tracking-wider">
                  {submitStep === 1 
                    ? 'Establishing secure routing tunnel through client local ports...' 
                    : 'Applying 256-bit payload seal. Routing packet direct to local storage ledger.'}
                </p>
              </motion.div>
            )}

            {/* Success screen */}
            {justSent && (
              <motion.div
                key="success-state"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="h-[460px] flex flex-col items-center justify-center text-center gap-6"
                id="form-success"
              >
                <div className="w-16 h-16 rounded-none bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <DynamicIcon name="CheckCircle2" size={30} />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-serif font-bold text-2xl text-white">
                    Transmission Delivered
                  </h3>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mt-1">
                    SECURE PACKET REFERENCE: #{Math.floor(Math.random() * 89999 + 10000)}
                  </p>
                </div>

                <p className="text-xs text-slate-400 max-w-xs leading-relaxed bg-black border border-white/10 p-4 rounded-none font-mono text-left">
                  Thank you. The message has been parsed, sealed, and written to the local board. Inspect it on the tracking ledger in real-time.
                </p>

                <button
                  onClick={() => setJustSent(false)}
                  className="px-6 py-3 bg-transparent hover:bg-white/5 border border-white/15 text-white font-mono font-semibold text-xs uppercase tracking-widest cursor-pointer transition-colors rounded-none"
                >
                  Send another packet
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Interactive Recruiter Tracking Dashboard */}
        <div className="lg:col-span-5 flex flex-col gap-6" id="contact-sidebar">
          
          {/* Quick Stats Panel */}
          <div className="bg-[#0d0d0d] border border-white/10 rounded-none p-5 shadow-md">
            <h3 className="font-mono text-[9px] text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center justify-between">
              <span>Recruiter Log Metrics</span>
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black p-4 border border-white/5 rounded-none">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">Total Packets</span>
                <div className="text-2xl font-serif italic text-white mt-1 leading-none">{savedMessages.length}</div>
              </div>
              <div className="bg-black p-4 border border-white/5 rounded-none">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">Reply Latency</span>
                <div className="text-2xl font-serif italic text-blue-400 mt-1 leading-none">&lt;4h</div>
              </div>
            </div>
          </div>

          {/* Messages list */}
          <div className="bg-[#0d0d0d] border border-white/10 rounded-none p-6 shadow-xl flex-1 flex flex-col justify-between min-h-[300px]" id="recruiter-inbox">
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <h3 className="font-serif font-semibold text-base text-white flex items-center gap-2">
                  Tracking Ledger
                </h3>
                {savedMessages.length > 0 && (
                  <button
                    onClick={onClearMessages}
                    className="text-[9px] font-mono uppercase tracking-wider text-slate-500 hover:text-red-400 flex items-center gap-1 bg-black border border-white/10 px-2 py-1 rounded-none cursor-pointer transition-colors"
                  >
                    <DynamicIcon name="Trash2" size={10} />
                    Clear Board
                  </button>
                )}
              </div>

              {/* Saved list scrollable */}
              <div className="max-h-[320px] overflow-y-auto flex flex-col gap-4 pr-1">
                <AnimatePresence initial={false}>
                  {savedMessages.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 flex flex-col items-center gap-4 text-slate-500"
                    >
                      <div className="w-10 h-10 rounded-none bg-black border border-white/10 flex items-center justify-center">
                        <DynamicIcon name="Mail" size={15} className="text-slate-600" />
                      </div>
                      <p className="text-[10px] font-mono uppercase tracking-wider">No packet transmission history.</p>
                      <p className="text-[10px] text-slate-600 max-w-[190px] leading-relaxed mx-auto">
                        Trigger a transmission on the left to initiate the secure logging process.
                      </p>
                    </motion.div>
                  ) : (
                    savedMessages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-black border border-white/5 rounded-none p-4 relative overflow-hidden"
                      >
                        {/* Red urgency tag */}
                        {msg.isUrgent && (
                          <div className="absolute top-0 right-0 h-1 w-8 bg-red-500" />
                        )}

                        <div className="flex justify-between items-start mb-3">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-white leading-tight">{msg.senderName}</span>
                            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">{msg.companyName}</span>
                          </div>
                          <span className="text-[9px] font-mono text-blue-400">{msg.timestamp}</span>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3">
                          {msg.message}
                        </p>

                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[8px] font-mono uppercase tracking-wider">
                          <div className="flex gap-3">
                            <span className="text-slate-500">TYPE: <span className="text-slate-300 font-semibold">{msg.roleType}</span></span>
                            <span className="text-slate-500">COMP: <span className="text-slate-300 font-semibold">{msg.budgetRange}</span></span>
                          </div>
                          <span className={`px-1.5 py-0.5 border ${
                            msg.isUrgent ? 'bg-red-950/40 text-red-400 border-red-900/30' : 'bg-white/5 text-slate-400 border-white/10'
                          }`}>
                            {msg.isUrgent ? 'Urgent' : 'Active'}
                          </span>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[9px] font-mono text-slate-500 text-center uppercase tracking-widest">
              Direct Connection Sec-Key: SHA-256 Verified
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
