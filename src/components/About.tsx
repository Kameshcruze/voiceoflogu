import { motion } from 'motion/react';
import { FEATURE_CARDS } from '../data';
import LucideIcon from './LucideIcon';

export default function About() {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Primary About Me Card */}
      <div 
        className="bg-[#EFEFEF] rounded-3xl border border-brand-secondary/40 shadow-premium p-6 sm:p-10 md:p-12 lg:p-14"
        id="about-card-wrapper"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          {/* Heading */}
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-text mb-6">
            About Me
          </h2>

          <div className="h-0.5 w-12 bg-brand-primary mx-auto mb-8 rounded-full" />

          {/* Premium formatted text content as requested */}
          <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-text-muted mb-4 font-light">
            I'm <strong>Logu</strong> from Erode, passionate singer and content creator. I love creating inspiring content and pursuing my dreams with creativity and confidence.
          </p>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-text-muted font-light">
            Through music, lifestyle content, entertainment videos, and brand collaborations, I connect with audiences authentically and create meaningful experiences that promote positive, trusted narrative engagement.
          </p>
        </div>

        {/* Feature Cards Grid (Custom bento box) */}
        <div>
          <span className="block text-center text-[10px] font-bold uppercase tracking-widest text-[#909090] mb-8">
            Brand Attributes & creative focal points
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="about-features-grid">
            {FEATURE_CARDS.map((feature, idx) => (
              <motion.div
                key={feature.id}
                id={`about-feature-${feature.id}`}
                whileHover={{ y: -4, scale: 1.01 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-white p-6 sm:p-7 shadow-xs hover:shadow-premium-hover hover:border-brand-primary/10 transition-all duration-300 group"
              >
                {/* Micro Icon Circle */}
                <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-primary mb-5 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <LucideIcon name={feature.iconName} size={18} />
                </div>

                {/* Subtitle / Label */}
                <h3 className="font-sans text-base font-bold text-brand-text mb-3 leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed font-sans font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
