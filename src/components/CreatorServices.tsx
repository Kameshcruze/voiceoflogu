import { motion } from 'motion/react';
import { CREATOR_SERVICES } from '../data';
import LucideIcon from './LucideIcon';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface CreatorServicesProps {
  onSelectCollaborationType: (type: string) => void;
}

export default function CreatorServices({ onSelectCollaborationType }: CreatorServicesProps) {
  return (
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Background Frame / Dashboard Bento Grid */}
      <div 
        className="bg-white rounded-3xl border border-brand-secondary/40 shadow-premium p-6 sm:p-10 md:p-12"
        id="creator-services-wrapper"
      >
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-brand-bg">
          <div className="text-left">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#909090] mb-2 block">
              Dashboard Overview
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-text">
              Creator Services & Booking Tiers
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-text-muted max-w-sm text-left md:text-right font-light">
            Each service tier is managed professionally with rapid turnaround, detailed campaign briefs, and transparent performance reports.
          </p>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="creator-services-grid">
          {CREATOR_SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              id={`creator-service-node-${service.id}`}
              onClick={() => onSelectCollaborationType(service.title)}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              whileHover={{ y: -3, borderColor: '#733380' }}
              className="bg-[#F5F5F5]/50 border border-brand-card rounded-2xl p-5 hover:bg-white hover:shadow-premium transition-all duration-300 cursor-pointer flex flex-col justify-between text-left group"
            >
              
              {/* Widget Top Bar */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 select-none">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#EFEFEF] flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <LucideIcon name={service.iconName} size={15} />
                  </div>
                  
                  {/* Dynamic Status Badge */}
                  {service.badge && (
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/10 tracking-wide uppercase">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-sans text-sm font-bold text-brand-text mb-2 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-[11px] sm:text-xs text-brand-text-muted leading-relaxed font-sans font-light mb-4 text-pretty">
                  {service.description}
                </p>
              </div>

              {/* Widget Feet */}
              <div className="mt-4 pt-3 border-t border-brand-bg flex items-center justify-between text-[10px] text-brand-accent">
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={10} className="text-[#0A8F4B]" />
                  <span>Interactive Tier</span>
                </div>
                <div className="flex items-center gap-0.5 font-bold group-hover:text-brand-primary transition-colors">
                  <span>Book</span>
                  <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
