import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import InteractiveCanvas from './components/InteractiveCanvas';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import InternshipsSection from './components/InternshipsSection';
import CredentialsSection from './components/CredentialsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import { ContactMessage } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'internships' | 'credentials' | 'achievements' | 'contact'>('home');
  const [savedMessages, setSavedMessages] = useState<ContactMessage[]>([]);

  // Load messages from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('recruiter_transmissions');
      if (stored) {
        setSavedMessages(JSON.parse(stored));
      } else {
        setSavedMessages([]);
      }
    } catch (e) {
      console.error('Failed to read localStorage:', e);
    }
  }, []);

  // Save messages to localStorage
  const handleAddMessage = (newMessage: ContactMessage) => {
    const updated = [newMessage, ...savedMessages];
    setSavedMessages(updated);
    try {
      localStorage.setItem('recruiter_transmissions', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to write localStorage:', e);
    }
  };

  const handleClearMessages = () => {
    setSavedMessages([]);
    try {
      localStorage.removeItem('recruiter_transmissions');
    } catch (e) {
      console.error('Failed to clear localStorage:', e);
    }
  };

  // Section transition variants for gorgeous slider feel
  const sectionVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  // Direction matrix to choose slide direction depending on tab sequence
  const getDirection = () => {
    const order = { home: 0, internships: 1, credentials: 2, achievements: 3, contact: 4 };
    // Just a placeholder direction value
    return 1;
  };

  return (
    <div className="relative min-h-screen text-slate-100 select-none overflow-x-hidden bg-[#0a0a0a] font-sans" id="app-root">
      {/* High-performance Interactive particle nodes on Canvas */}
      <InteractiveCanvas />

      {/* Glassmorphic floating nav bar */}
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        messageCount={savedMessages.length}
      />

      {/* Main interactive stage */}
      <main className="relative min-h-screen flex items-center justify-center pt-16 z-10" id="main-stage">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home"
              custom={getDirection()}
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <HomeSection onNavigate={setActiveSection} />
            </motion.div>
          )}

          {activeSection === 'internships' && (
            <motion.div
              key="internships"
              custom={getDirection()}
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <InternshipsSection />
            </motion.div>
          )}

          {activeSection === 'credentials' && (
            <motion.div
              key="credentials"
              custom={getDirection()}
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <CredentialsSection />
            </motion.div>
          )}

          {activeSection === 'achievements' && (
            <motion.div
              key="achievements"
              custom={getDirection()}
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <AchievementsSection />
            </motion.div>
          )}

          {activeSection === 'contact' && (
            <motion.div
              key="contact"
              custom={getDirection()}
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <ContactSection
                onAddMessage={handleAddMessage}
                savedMessages={savedMessages}
                onClearMessages={handleClearMessages}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Background radial atmosphere gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-950/5 rounded-full blur-3xl pointer-events-none z-0" />
    </div>
  );
}

