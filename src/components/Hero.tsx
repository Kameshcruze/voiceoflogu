import { SyntheticEvent } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Music, Clapperboard, Sparkles, Users } from 'lucide-react';
import profileImage from '../image_1.png';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  // Graceful fallback portrait image in case image_1.jpg is missing or delayed
  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1634141639643-fc0c1dbeeffb?auto=format&fit=crop&q=80&w=600&h=600';
  };

  const statCards = [
    { label: 'Followers', value: '47K+ Followers', icon: Users, color: '#733380' },
    { label: 'Singing', value: 'Expert Vocalist', icon: Music, color: '#909090' },
    { label: 'On-Screen', value: 'Dramatic Actor', icon: Clapperboard, color: '#733380' },
    { label: 'Influence', value: 'Content Innovator', icon: Sparkles, color: '#909090' },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917812810770?text=Hi%20Logu%2C%20I%27d%20love%20to%20discuss%20a%20collaboration%20with%20you%20based%20on%20your%20portfolio.', '_blank');
  };

  return (
    <section id="home" className="pt-24 sm:pt-32 pb-12 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Large Rounded Hero Card Frame */}
      <div 
        className="relative bg-white rounded-3xl border border-white/40 shadow-premium overflow-hidden p-6 sm:p-10 md:p-14 lg:p-16"
        id="hero-main-card"
      >
        {/* Subtle grid background accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#EFEFEF_1px,transparent_1px),linear-gradient(to_bottom,#EFEFEF_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Badges/Category */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <motion.span
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-xs uppercase tracking-wider font-semibold text-brand-text-muted bg-[#EFEFEF] px-4 py-1.5 rounded-full"
                id="hero-category-label"
              >
                • Singer • Actor • Content Creator
              </motion.span>

              {/* Success Badge */}
              <motion.span
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#D7F3E3] text-[#0A8F4B]"
                id="hero-availability-badge"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A8F4B] animate-pulse" />
                Available For Collaborations
              </motion.span>
            </div>

            {/* Custom Modern Large Typography Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-sans text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-brand-text mb-6 leading-[1.1]"
              id="hero-name-heading"
            >
              I'm <span className="text-brand-primary">Logu</span>
            </motion.h1>

            {/* Structured elegant description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-brand-text-muted text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-sans"
              id="hero-description"
            >
              Singer and Content Creator from <strong>Erode, Tamil Nadu, India</strong>. 
              Creating inspiring content through music, lifestyle reflections, dramatic acting, product reviews, and authentic storytelling. Let's make something remarkable.
            </motion.p>

            {/* Core Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col ssm:flex-row items-stretch ssm:items-center gap-4 w-full ssm:w-auto"
              id="hero-actions-container"
            >
              <button
                onClick={() => onScrollToSection('contact')}
                className="group flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wide text-white bg-brand-primary rounded-full hover:bg-[#5E2469] hover:shadow-[0_8px_30px_rgba(115,51,128,0.2)] transition-all duration-300 cursor-pointer"
                id="hero-cta-collab"
              >
                Collaborate Now
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wide text-brand-text bg-[#F5F5F5] border border-brand-secondary/70 rounded-full hover:bg-[#EFEFEF] hover:border-brand-accent/50 transition-all duration-200 cursor-pointer"
                id="hero-cta-whatsapp"
              >
                <MessageCircle size={15} className="text-[#0A8F4B]" />
                WhatsApp Me
              </button>
            </motion.div>
          </div>

          {/* Right Column (Circular Image Frame + Glow Theme) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-90 lg:h-90 flex items-center justify-center"
              id="hero-image-wrapper"
            >
              {/* Purple radial glow centered behind the image */}
              <div 
                className="absolute inset-0 rounded-full premium-glow-effect opacity-85 pointer-events-none"
                style={{ filter: 'blur(30px)' }}
              />

              {/* Large Circular Frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white p-1.5 bg-gradient-to-tr from-brand-secondary/40 to-brand-primary/20 shadow-lg group">
                <img
                  src={profileImage}
                  alt="Voice of Logu - Singer and Content Creator"
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full select-none transition-transform duration-700 group-hover:scale-105"
                  id="hero-profile-pic"
                />
              </div>

              {/* Accent micro badges */}
              <div className="absolute -top-2 -right-3 animate-float bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-brand-secondary/50 shadow-xs flex items-center gap-1.5 select-none pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
                <span className="text-[10px] font-bold tracking-wider uppercase text-brand-accent">Erode, TN</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Creator Stats Row - Embedded Bento Style */}
        <div className="border-t border-brand-secondary/40 mt-12 sm:mt-16 pt-8">
          <span className="block text-center md:text-left text-[10px] font-bold uppercase tracking-widest text-[#909090] mb-6">
            Key Digital Footprint & Talent Metrics
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" id="hero-stats-grid">
            {statCards.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                className="bg-[#EFEFEF]/40 border border-brand-card rounded-2xl p-4 sm:p-5 hover:bg-white hover:shadow-premium hover:border-brand-primary/10 hover:-translate-y-0.5 transition-all duration-300"
                id={`hero-stat-card-${i}`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div 
                    className="p-1.5 rounded-lg text-white"
                    style={{ backgroundColor: stat.color }}
                  >
                    <stat.icon size={13} />
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider text-brand-accent uppercase">
                    {stat.label}
                  </span>
                </div>
                <h3 className="font-sans text-sm sm:text-base font-bold text-brand-text">
                  {stat.value}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
