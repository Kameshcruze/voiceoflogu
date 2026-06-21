import { useState } from 'react';
import { motion } from 'motion/react';
import FloatingNav from './components/FloatingNav';
import Hero from './components/Hero';
import About from './components/About';
import Performances from './components/Performances';
import Collaborations from './components/Collaborations';
import CreatorServices from './components/CreatorServices';
import SocialJourney from './components/SocialJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedCollabType, setSelectedCollabType] = useState('Brand Collaboration');

  // Smooth scroll handler targeting components by ID
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset slightly to account for floating nav height
      const yOffset = -90; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Pre-select form dropdown and scroll to form when clicking services
  const handleSelectCollaborationType = (type: string) => {
    // Basic formatting to match form options
    let mappedType = 'Brand Collaboration';
    
    if (type.includes('Lifestyle') || type.includes('Beauty') || type.includes('Promotions') || type.includes('Reviews')) {
      mappedType = 'Paid Promotion';
    } else if (type.includes('Affiliate') || type.includes('Partnerships')) {
      mappedType = 'Affiliate Partnership';
    } else if (type.includes('Cover') || type.includes('Music') || type.includes('Songs')) {
      mappedType = 'Music Collaboration';
    } else if (type.includes('Content') || type.includes('Creator') || type.includes('Campaigns') || type.includes('Entertainment') || type.includes('Vlogs')) {
      mappedType = 'Content Creation';
    } else if (type.includes('Barter')) {
      mappedType = 'Barter Collaboration';
    } else {
      mappedType = 'Brand Collaboration';
    }

    setSelectedCollabType(mappedType);
    handleScrollToSection('contact');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between"
      id="app-root-container"
    >
      {/* Floating Sticky Navigation */}
      <FloatingNav onScrollToSection={handleScrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-grow space-y-4">
        {/* Section 02 - Hero Frame */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Section 03 - About Card */}
        <About />

        {/* Section 04 - Vocals Performance Reels */}
        <Performances />

        {/* Section 05 - Collaborations */}
        <Collaborations onSelectCollaborationType={handleSelectCollaborationType} />

        {/* Section 06 - Creator Services (Dashboard Layout) */}
        <CreatorServices onSelectCollaborationType={handleSelectCollaborationType} />

        {/* Section 07 - Social Follow Grid */}
        <SocialJourney />

        {/* Section 08 - Detailed Inquiry Form */}
        <Contact 
          selectedCollaborationType={selectedCollabType}
          onCollaborationTypeChange={setSelectedCollabType}
        />
      </main>

      {/* Footer Section */}
      <Footer onScrollToSection={handleScrollToSection} />
    </motion.div>
  );
}

