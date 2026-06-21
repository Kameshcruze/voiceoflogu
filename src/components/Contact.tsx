import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2, MessageSquare, Sparkles, Send } from 'lucide-react';
import { CollaborationRequest } from '../types';

interface ContactProps {
  selectedCollaborationType: string;
  onCollaborationTypeChange: (type: string) => void;
}

export default function Contact({ selectedCollaborationType, onCollaborationTypeChange }: ContactProps) {
  const [formData, setFormData] = useState<CollaborationRequest>({
    name: '',
    brandName: '',
    email: '',
    phone: '',
    collaborationType: selectedCollaborationType || 'Brand Collaboration',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [errorText, setErrorText] = useState('');

  // Sync state if selected type changes from outside
  useState(() => {
    if (selectedCollaborationType) {
      setFormData(prev => ({ ...prev, collaborationType: selectedCollaborationType }));
    }
  });

  const collabTypes = [
    'Paid Promotion',
    'Affiliate Partnership',
    'Brand Collaboration',
    'Barter Collaboration',
    'Music Collaboration',
    'Content Creation'
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorText('');

    // Verification check
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorText('Please fill out all required fields (Name, Email, Phone, Message) to send request.');
      return;
    }

    setIsSubmitting(true);

    // Simulate swift server-side reception
    setTimeout(() => {
      // Save to local storage for local preview validation
      const existingInquiries = JSON.parse(localStorage.getItem('voiceoflogu_inquiries') || '[]');
      existingInquiries.push({
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('voiceoflogu_inquiries', JSON.stringify(existingInquiries));

      setIsSubmitting(false);
      setShowSuccessToast(true);

      // Cleanse initial input
      setFormData({
        name: '',
        brandName: '',
        email: '',
        phone: '',
        collaborationType: 'Brand Collaboration',
        message: ''
      });

      // Clear outside selected types
      onCollaborationTypeChange('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Large Premium Rounded Card */}
      <div 
        className="bg-white rounded-3xl border border-brand-secondary/40 shadow-premium p-6 sm:p-10 md:p-12 lg:p-14 overflow-hidden relative"
        id="contact-main-frame"
      >
        {/* Abstract glowing bubble accent inside card */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Context Details */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-primary mb-3 block">
                Partner with Logu
              </span>
              
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-text mb-6 leading-tight">
                Let's Create<br />Something Amazing Together
              </h2>

              <p className="font-sans text-xs sm:text-sm text-brand-text-muted leading-relaxed font-light mb-10 max-w-sm">
                Interested in collaborating, promoting your brand, reviewing your product, or creating engaging acoustic content together? Let's connect and make it happen.
              </p>
            </div>

            {/* Business Contact Cards */}
            <div className="space-y-6 mb-10 lg:mb-0">
              
              {/* Creator details card */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-primary flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-text mb-1 inline-flex items-center gap-1.5 uppercase tracking-wider">
                    Location & Base
                  </h4>
                  <p className="text-sm font-semibold text-brand-text">
                    Voice of Logu (Logammal)
                  </p>
                  <p className="text-xs text-brand-text-muted">
                    Erode, Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Booking Hotline */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-text mb-1 inline-flex items-center gap-1.5 uppercase tracking-wider">
                    WhatsApp Inquiry Hotline
                  </h4>
                  <a 
                    href="https://wa.me/917812810770?text=Hi%20Logu,%20we'd%20love%20to%20discuss%20a%20commercial%20booking!"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-brand-primary hover:underline block"
                  >
                    +91 78128 10770
                  </a>
                  <p className="text-xs text-brand-text-muted">
                    Instant Business Dispatch Support
                  </p>
                </div>
              </div>

              {/* Supported Collaborations Checklist */}
              <div className="pt-4 border-t border-brand-bg">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-brand-accent mb-3">
                  Aura of Collabs Supported
                </span>
                <div className="flex flex-wrap gap-2">
                  {collabTypes.map((type, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-medium px-3 py-1 bg-brand-bg text-brand-text rounded-lg border border-brand-secondary/30"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Inquiry Input Form */}
          <div className="lg:col-span-7 bg-brand-bg/40 p-6 sm:p-8 rounded-2.5xl border border-brand-secondary/30">
            
            <form onSubmit={handleFormSubmit} className="space-y-5 text-left" id="collaboration-form">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wide text-brand-text">
                    Your Name <span className="text-[#0A8F4B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-white border border-brand-secondary/50 rounded-xl px-4 py-3 placeholder-brand-accent/60 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all font-sans"
                  />
                </div>

                {/* Brand Name */}
                <div className="space-y-1.5">
                  <label htmlFor="brandName" className="text-xs font-bold uppercase tracking-wide text-brand-text">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    id="brandName"
                    name="brandName"
                    placeholder="E.g., Beauty Inc"
                    value={formData.brandName}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-white border border-brand-secondary/50 rounded-xl px-4 py-3 placeholder-brand-accent/60 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-brand-text">
                    Email Address <span className="text-[#0A8F4B]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-white border border-brand-secondary/50 rounded-xl px-4 py-3 placeholder-brand-accent/60 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all font-sans"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wide text-brand-text">
                    Phone Number <span className="text-[#0A8F4B]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-white border border-brand-secondary/50 rounded-xl px-4 py-3 placeholder-brand-accent/60 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all font-sans"
                  />
                </div>
              </div>

              {/* Collab Type Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="collaborationType" className="text-xs font-bold uppercase tracking-wide text-brand-text">
                  Collaboration Type
                </label>
                <select
                  id="collaborationType"
                  name="collaborationType"
                  value={formData.collaborationType}
                  onChange={handleInputChange}
                  className="w-full text-sm bg-white border border-[#EFEFEF] rounded-xl px-4 py-3 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all font-sans cursor-pointer"
                >
                  <option value="Paid Promotion">Paid Promotion</option>
                  <option value="Affiliate Partnership">Affiliate Partnership</option>
                  <option value="Brand Collaboration">Brand Collaboration</option>
                  <option value="Barter Collaboration">Barter Collaboration</option>
                  <option value="Music Collaboration">Music Collaboration</option>
                  <option value="Content Creation">Content Creation</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5 font-sans">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-brand-text">
                  Campaign Message <span className="text-[#0A8F4B]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell, ask, or describe your vision or campaign specifications..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full text-sm bg-white border border-brand-secondary/50 rounded-xl px-4 py-3 placeholder-brand-accent/60 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all resize-none"
                />
              </div>

              {/* Error warning text block if values are omitted */}
              {errorText && (
                <div className="text-xs font-semibold text-red-500 bg-red-50 p-3 rounded-lg border border-red-100">
                  {errorText}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-primary text-white text-xs font-bold tracking-wide hover:bg-[#5E2469] disabled:bg-neutral-300 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
                    Sending Request...
                  </span>
                ) : (
                  <>
                    <Send size={13} />
                    Send Collaboration Request
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* Luxury success toast layout on request acknowledgment */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-md bg-white border border-[#0A8F4B]/20 rounded-2.5xl p-5 shadow-[0_24px_50px_rgba(0,0,0,0.15)] flex gap-4 text-left items-start"
            id="collaboration-success-toast"
          >
            {/* Success color text circle */}
            <div className="w-10 h-10 rounded-full bg-[#D7F3E3] flex items-center justify-center text-[#0A8F4B] flex-shrink-0">
              <CheckCircle2 size={18} />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <h4 className="font-sans text-sm font-bold text-brand-text">
                  Inquiry Dispatched Successfully!
                </h4>
                <Sparkles size={14} className="text-brand-primary" />
              </div>
              
              <p className="font-sans text-xs text-brand-text-muted leading-relaxed font-light">
                Your partnership proposal has been captured securely. Voice of Logu or her management coordinates will follow up with your phone or email channel within 12 hours.
              </p>

              <button
                onClick={() => setShowSuccessToast(false)}
                className="text-[10px] uppercase font-bold tracking-wider text-[#0A8F4B] block pt-1 hover:underline cursor-pointer"
              >
                Dismiss notification
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
