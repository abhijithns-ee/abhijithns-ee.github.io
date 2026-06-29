<motion.form
  key="contact-form"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  onSubmit={handleSubmit}
  className="flex flex-col gap-4"
>
  <div className="flex flex-col gap-1">
    <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Name</label>
    <input
      type="text"
      required
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="e.g. Sarah Sterling"
      className="bg-black border border-white/10 focus:border-blue-500 rounded-none px-4 py-3 text-xs text-white outline-none"
    />
  </div>

  <div className="flex flex-col gap-1">
    <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Email</label>
    <input
      type="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="e.g. ssterling@google.com"
      className="bg-black border border-white/10 focus:border-blue-500 rounded-none px-4 py-3 text-xs text-white outline-none"
    />
  </div>

  <div className="flex flex-col gap-1">
    <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Message</label>
    <textarea
      required
      rows={5}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="What's on your mind? Reach out directly..."
      className="bg-black border border-white/10 focus:border-blue-500 rounded-none px-4 py-3 text-xs text-white outline-none resize-none"
    />
  </div>

  <button
    type="submit"
    className="w-full mt-2 py-4 bg-white hover:bg-blue-600 hover:text-white text-black font-mono uppercase font-bold text-xs tracking-widest transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-none"
  >
    <DynamicIcon name="Send" size={13} />
    Post Message
  </button>
</motion.form>