import { motion } from 'motion/react';
import { COLLABORATION_SERVICES } from '../data';
import LucideIcon from './LucideIcon';
import { ArrowUpRight } from 'lucide-react';

interface CollaborationsProps {
  onSelectCollaborationType: (type: string) => void;
}

export default function Collaborations({ onSelectCollaborationType }: CollaborationsProps) {
  const handleServiceClick = (title: string) => {
    onSelectCollaborationType(title);
  };

  return (
    <section id="collaborations" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Title & Headline */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#909090] mb-3">
          Synergy & Partnership
        </span>
        <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-text mb-4">
          Let's Work Together
        </h2>
        <div className="h-0.5 w-12 bg-brand-primary mb-5 rounded-full" />
        <p className="font-sans text-sm sm:text-base text-brand-text-muted max-w-md font-light">
          Offering diverse collaboration packages engineered to elevate your brand presence with authentic Tamil creator integration.
        </p>
      </div>

      {/* Services Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6" id="collaborations-services-grid">
        {COLLABORATION_SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            id={`collab-service-${service.id}`}
            onClick={() => handleServiceClick(service.title)}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: idx * 0.03 }}
            whileHover={{ y: -4, scale: 1.005 }}
            className="group flex flex-col justify-between bg-white rounded-2.5xl border border-brand-secondary/40 p-6 sm:p-7 shadow-premium hover:shadow-premium-hover hover:border-brand-primary/20 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              
              {/* Luxury Icon Frame */}
              <div className="w-12 h-12 flex-shrink-0 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                <LucideIcon name={service.iconName} size={20} />
              </div>

              {/* Title and Copy */}
              <div className="flex-1 text-left">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-sans text-sm sm:text-base font-bold text-brand-text group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Decorative tag label */}
                  {service.tags && service.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-[#EFEFEF] text-brand-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="font-sans text-xs sm:text-sm text-brand-text-muted leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

            </div>

            {/* Bottom Row: CTA Indicator */}
            <div className="flex items-center justify-end gap-1.5 mt-5 pt-3 border-t border-brand-bg select-none">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent group-hover:text-brand-primary transition-colors">
                Select Service Package
              </span>
              <div className="w-6 h-6 rounded-full bg-[#F5F5F5] flex items-center justify-center text-brand-accent group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-all duration-200">
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
