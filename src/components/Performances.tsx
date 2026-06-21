import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERFORMANCES } from '../data';
import { Play, X, ExternalLink, Instagram, Music } from 'lucide-react';
import per1Image from '../per_1.png';
import per2Image from '../per_2.png';
import per3Image from '../per_3.png';

export default function Performances() {
  const [playingReel, setPlayingReel] = useState<string | null>(null);

  useEffect(() => {
    if (playingReel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [playingReel]);

  // Custom high-quality musical/performance thumbnails to represent the performance cards safely and beautifully
  const thumbnailMap: Record<string, string> = {
    reel1: per1Image, // Concert blue lights
    reel2: per2Image, // Close up mic studio
    reel3: per3Image, // Guitarist singer warm session
  };

  const handlePlayToggle = (id: string) => {
    if (playingReel === id) {
      setPlayingReel(null);
    } else {
      setPlayingReel(id);
    }
  };

  return (
    <>
      <section id="performances" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Header Container */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#909090] mb-3">
          Voice & Acoustic Samples
        </span>
        <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-text mb-4">
          My Vocal Performances
        </h2>
        <div className="h-0.5 w-12 bg-brand-primary mb-5 rounded-full" />
        <p className="font-sans text-sm sm:text-base text-brand-text-muted max-w-md font-light">
          Experience acoustic covers, cinematic playback recordings, and theatrical vocal content delivered across Instagram.
        </p>
      </div>

      {/* Grid of Performances */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="performances-grid">
        {PERFORMANCES.map((reel) => {
          return (
            <motion.div
              key={reel.id}
              id={`performance-card-${reel.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-brand-secondary/40 shadow-premium overflow-hidden hover:shadow-premium-hover transition-all duration-300 group flex flex-col h-full"
            >
              
              {/* Video Player Display Container */}
              <div className="relative aspect-video bg-black overflow-hidden group/player">
                
                {/* Thumbnail Image */}
                <img
                  src={thumbnailMap[reel.id]}
                  alt={reel.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none transition-all duration-700 scale-100 group-hover/player:scale-103"
                />

                {/* Dark Vignette Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Category Pin */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-xs flex items-center gap-1.5 select-none z-10">
                  <Music className="text-brand-primary" size={10} />
                  <span className="text-[9px] font-bold tracking-wider uppercase text-brand-text">
                    {reel.category}
                  </span>
                </div>

                {/* Dynamic View Counter */}
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[9px] font-semibold tracking-wider uppercase z-10">
                  {reel.views}
                </div>

                {/* Interactive Overlay & Iframe */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  {/* Standard Play Button state */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePlayToggle(reel.id)}
                    className="w-12 h-12 rounded-full bg-white/95 text-brand-primary flex items-center justify-center shadow-md hover:bg-brand-primary hover:text-white transition-all duration-300 cursor-pointer z-10"
                    aria-label="Play performance reel"
                  >
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  </motion.button>
                </div>

                {/* Left/Bottom Duration badge */}
                <div className="absolute bottom-3 left-3 text-white text-[10px] font-mono tracking-wider z-10">
                  {reel.duration}
                </div>

              </div>

              {/* Bottom Card Copy details */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow text-left justify-between">
                <div className="mb-4">
                  <h3 className="font-sans text-sm sm:text-base font-bold text-brand-text mb-1 tracking-tight leading-snug">
                    {reel.title}
                  </h3>
                  <p className="text-[11px] text-brand-text-muted leading-relaxed font-sans font-light">
                    Tamil cinematic audio styling. Recorded and stylized natively for reels performance catalog.
                  </p>
                </div>

                {/* CTA Redirect Buttons */}
                <div className="flex items-center gap-2.5">
                  <a
                    href={reel.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-brand-secondary/60 text-[11px] font-bold text-brand-text bg-[#F5F5F5] hover:bg-[#EFEFEF] hover:border-brand-accent/50 transition-colors"
                  >
                    <Instagram size={12} className="text-brand-primary" />
                    View Reel
                  </a>
                  <a
                    href={reel.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-brand-primary/5 border border-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
                    title="Launch Original Reel Link"
                  >
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
      </section>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {playingReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md bg-black/90"
          >
            {/* Close button */}
            <button
              onClick={() => handlePlayToggle(playingReel)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white cursor-pointer transition-colors z-[60]"
              aria-label="Close fullscreen reel display"
            >
              <X size={24} />
            </button>

            {/* Iframe Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="w-full h-full max-w-sm max-h-[85vh] bg-black rounded-xl overflow-hidden shadow-2xl relative border border-white/10"
            >
              <iframe
                src={`${PERFORMANCES.find(r => r.id === playingReel)?.reelUrl}embed/?autoplay=1`}
                className="w-full h-full border-0 absolute inset-0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media; autoplay; fullscreen"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
