import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Youtube, Facebook, Sparkles } from 'lucide-react';

interface FloatingNavProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function FloatingNav({ onScrollToSection }: FloatingNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active indicator update
      const sections = ['home', 'about', 'performances', 'collaborations', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'performances', label: 'Performances' },
    { id: 'collaborations', label: 'Collaborations' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4 sm:pt-6 pointer-events-none">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-5xl mx-auto pointer-events-auto"
        >
          <div
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full border border-white/40 bg-white/70 backdrop-blur-xl transition-all duration-300 ${
              isScrolled
                ? 'shadow-[0_12px_40px_rgba(0,0,0,0.06)] scale-98 sm:scale-95 border-brand-secondary/40'
                : 'shadow-[0_4px_30px_rgba(0,0,0,0.02)]'
            }`}
          >
            {/* Logo/Brand Name */}
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-1.5 cursor-pointer font-sans select-none"
              id="nav-logo"
            >
              <Sparkles className="text-brand-primary" size={16} />
              <span className="font-semibold text-sm sm:text-base tracking-tight text-brand-text">
                VOICE OF LOGU
              </span>
            </div>

            {/* Desktop Center Menu */}
            <nav className="hidden md:flex items-center gap-1 bg-[#F5F5F5]/60 p-1 rounded-full border border-white/20">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                    activeSection === item.id
                      ? 'text-brand-primary'
                      : 'text-brand-text-muted hover:text-brand-text'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-white rounded-full shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Right Side Socials & Primary Action */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Social icons - Desktop Only */}
              <div className="hidden lg:flex items-center gap-2 text-brand-text-muted pr-2">
                <a
                  href="https://www.instagram.com/voiceof_logu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 hover:text-brand-primary hover:bg-[#F5F5F5] rounded-full transition-all duration-200"
                  aria-label="Instagram"
                  id="nav-social-instagram"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href="#"
                  className="p-1.5 hover:text-brand-primary hover:bg-[#F5F5F5] rounded-full transition-all duration-200"
                  aria-label="YouTube"
                  id="nav-social-youtube"
                >
                  <Youtube size={15} />
                </a>
                <a
                  href="#"
                  className="p-1.5 hover:text-brand-primary hover:bg-[#F5F5F5] rounded-full transition-all duration-200"
                  aria-label="Facebook"
                  id="nav-social-facebook"
                >
                  <Facebook size={15} />
                </a>
              </div>

              {/* Primary Collaborate Button */}
              <button
                onClick={() => handleNavClick('contact')}
                className="px-4 ssm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wide text-white bg-brand-primary rounded-full hover:shadow-[0_4px_20px_rgba(115,51,128,0.25)] hover:bg-[#5E2469] cursor-pointer transition-all duration-300"
                id="nav-collab-btn"
              >
                Collaborate
              </button>

              {/* Hamburger Toggle - Mobile Only */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 text-brand-text hover:bg-[#EFEFEF] rounded-full transition-colors cursor-pointer"
                aria-label="Toggle menu"
                id="nav-mobile-toggle"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Floating Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 mx-4 md:hidden p-5 bg-white/95 backdrop-blur-2xl rounded-2.5xl border border-brand-secondary/40 shadow-[0_24px_50px_rgba(0,0,0,0.1)] pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent px-3">
                Navigation Menu
              </span>
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${
                      activeSection === item.id
                        ? 'bg-brand-primary/5 text-brand-primary'
                        : 'text-brand-text hover:bg-brand-bg'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    )}
                  </button>
                ))}
              </div>

              <div className="h-px bg-brand-secondary/50 my-1" />

              <div className="flex items-center justify-between px-3 py-1">
                <span className="text-xs text-brand-text-muted font-medium">Follow Social Handles</span>
                <div className="flex items-center gap-3 text-brand-text-muted">
                  <a
                    href="https://www.instagram.com/voiceof_logu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 hover:text-brand-primary transition-colors"
                    aria-label="Instagram Link"
                  >
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="p-1.5 hover:text-brand-primary transition-colors" aria-label="YouTube Link">
                    <Youtube size={18} />
                  </a>
                  <a href="#" className="p-1.5 hover:text-brand-primary transition-colors" aria-label="Facebook Link">
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
