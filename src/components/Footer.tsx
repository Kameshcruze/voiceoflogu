import { Instagram, Youtube, Facebook, MessageCircle, Sparkles } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'performances', label: 'Performances' },
    { id: 'collaborations', label: 'Collaborations' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-white border-t border-brand-secondary/40 py-12 px-6" id="footer-section">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">
        
        {/* Brand Header */}
        <div className="space-y-2">
          <div 
            onClick={() => onScrollToSection('home')}
            className="flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="text-brand-primary" size={16} />
            <span className="font-sans text-lg font-bold tracking-tight text-brand-text">
              VOICE OF LOGU
            </span>
          </div>
          <p className="text-xs uppercase tracking-widest font-semibold text-brand-text-muted">
            Singer • Actor • Content Creator
          </p>
        </div>

        {/* Quick Links Nav */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3" id="footer-links">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onScrollToSection(link.id)}
              className="text-xs sm:text-sm font-medium text-brand-text-muted hover:text-brand-primary transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Social Icons Row */}
        <div className="flex items-center gap-4 text-brand-text-muted" id="footer-socials">
          <a
            href="https://www.instagram.com/voiceof_logu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#F5F5F5] hover:bg-brand-primary hover:text-white rounded-full transition-all duration-300"
            aria-label="Instagram Profile"
          >
            <Instagram size={16} />
          </a>
          <a
            href="#"
            className="p-2 bg-[#F5F5F5] hover:bg-brand-primary hover:text-white rounded-full transition-all duration-300"
            aria-label="YouTube Channel"
          >
            <Youtube size={16} />
          </a>
          <a
            href="#"
            className="p-2 bg-[#F5F5F5] hover:bg-brand-primary hover:text-white rounded-full transition-all duration-300"
            aria-label="Facebook Page"
          >
            <Facebook size={16} />
          </a>
          <a
            href="https://wa.me/917812810770?text=Hi%20Logu,%20greeting%20from%20your%20website!"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#F5F5F5] hover:bg-brand-primary hover:text-white rounded-full transition-all duration-300"
            aria-label="WhatsApp Contact"
          >
            <MessageCircle size={16} />
          </a>
        </div>

        {/* Divider line */}
        <div className="w-full max-w-md h-px bg-brand-bg" />

        {/* Copyright notice */}
        <p className="text-[11px] text-brand-text-muted font-sans font-light">
          © 2026 Voice of Logu. All Rights Reserved. • Developed by <a href="https://elitewebdevelopers.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">Elite</a>
        </p>

      </div>
    </footer>
  );
}
