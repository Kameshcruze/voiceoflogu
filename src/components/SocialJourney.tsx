import { SyntheticEvent } from 'react';
import { motion } from 'motion/react';
import { SOCIAL_PROFILES } from '../data';
import { Instagram, Youtube, Facebook, MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import profileImage from '../profile_1.webp';

export default function SocialJourney() {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1634141639643-fc0c1dbeeffb?auto=format&fit=crop&q=80&w=600&h=600';
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <Instagram size={22} className="text-[#E1306C]" />;
      case 'youtube':
        return <Youtube size={22} className="text-[#FF0000]" />;
      case 'facebook':
        return <Facebook size={22} className="text-[#1877F2]" />;
      case 'whatsapp':
        return <MessageCircle size={22} className="text-[#25D366]" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#909090] mb-3">
          Community & Channels
        </span>
        <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-text mb-4">
          Follow My Journey
        </h2>
        <div className="h-0.5 w-12 bg-brand-primary mb-5 rounded-full" />
        <p className="font-sans text-sm sm:text-base text-brand-text-muted max-w-sm font-light">
          Stay updated with my daily routines, vocal sessions, acting snippets, and exclusive live performance events.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="social-cards-grid">
        
        {/* Left Side: Premium Main Instagram Card (Large Span) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-6 bg-[#EFEFEF] rounded-3xl border border-brand-secondary/40 p-6 sm:p-8 shadow-premium hover:shadow-premium-hover transition-shadow flex flex-col justify-between"
          id="social-instagram-main-card"
        >
          <div>
            {/* Header: Platform Logo */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#909090]">
                Featured Social Handle
              </span>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs">
                <Instagram size={18} className="text-brand-primary" />
              </div>
            </div>

            {/* Profile Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 text-left mb-6">
              
              {/* Profile Image Frame */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 border-2 border-brand-primary bg-white flex-shrink-0">
                <img
                  src={profileImage}
                  alt="Voice of Logu"
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
                
                {/* Instagram Live Indicator Frame */}
                <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#E1306C] border-2 border-white flex items-center justify-center text-white text-[8px] font-bold">
                  ✓
                </span>
              </div>

              {/* Profile Copy Details */}
              <div className="space-y-1 sm:space-y-1.5 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-brand-text leading-tight tracking-tight">
                    Voice of Logu
                  </h3>
                  
                  {/* Verified look-alike Badge as requested for luxury feeling */}
                  <ShieldCheck size={18} className="text-brand-primary fill-brand-primary/10" />
                </div>

                <p className="text-xs sm:text-sm font-semibold text-brand-primary">
                  Singer • Actor • Content Creator
                </p>

                <p className="text-xs text-brand-text-muted">
                  Erode, Tamil Nadu, India
                </p>
              </div>

            </div>

            {/* Middle Stats Description Block */}
            <div className="bg-white/80 rounded-2xl p-4 sm:p-5 border border-white mb-6 text-left space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-brand-text-muted font-medium">Audience Footprint</span>
                <span className="text-sm font-mono font-bold text-brand-primary bg-brand-primary/5 px-2.5 py-1 rounded-md">
                  47K+ Followers
                </span>
              </div>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed font-sans font-light">
                Creating luxury creator marketing integrations, music covers, acting reels, and beauty walkthroughs. Building an organic community.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <a
            href="https://www.instagram.com/voiceof_logu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-brand-primary text-white text-xs font-bold tracking-wide hover:bg-[#5E2469] shadow-[0_4px_20px_rgba(115,51,128,0.2)] transition-all duration-300"
            id="social-insta-follow-btn"
          >
            <Instagram size={14} />
            Follow on Instagram
          </a>

        </motion.div>

        {/* Right Side: Secondary Social handles (Span 6, grid layout) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4" id="social-secondary-grid">
          {SOCIAL_PROFILES.filter(prof => prof.platform !== 'instagram').map((profile, index) => (
            <motion.div
              key={profile.id}
              id={`social-secondary-card-${profile.id}`}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-3xl border border-brand-secondary/40 p-5 sm:p-6 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Header Platform */}
                <div className="flex items-center justify-between mb-4">
                  {getPlatformIcon(profile.platform)}
                  <div className="w-5 h-5 rounded-full bg-brand-bg flex items-center justify-center text-brand-accent">
                    <ArrowUpRight size={10} />
                  </div>
                </div>

                {/* Profile Display */}
                <h4 className="font-sans text-base font-bold text-brand-text leading-tight truncate">
                  {profile.displayName}
                </h4>
                
                <p className="text-[11px] font-semibold text-brand-primary uppercase tracking-wider mb-2 mt-1">
                  {profile.category}
                </p>

                {/* Status metrics display */}
                <span className="inline-block text-[10px] font-mono font-medium tracking-wide bg-brand-bg text-brand-text-muted px-2.5 py-1 rounded-md mb-6">
                  {profile.followersCount}
                </span>
              </div>

              {/* Interaction button link */}
              <a
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (profile.profileUrl === '#') {
                    e.preventDefault();
                    // Alert or dynamic floating prompt if coming soon
                  }
                }}
                className={`w-full flex items-center justify-center gap-1.5 py-3 rounded-xl border text-[11px] font-bold tracking-wide transition-colors ${
                  profile.profileUrl === '#' 
                    ? 'bg-neutral-100 border-neutral-200 text-neutral-400 cursor-not-allowed'
                    : 'bg-[#F5F5F5] hover:bg-[#EFEFEF] text-brand-text border-brand-secondary/80'
                }`}
              >
                {profile.actionText}
              </a>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
