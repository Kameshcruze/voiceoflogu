import { FeatureItem, PerformanceItem, CollaborationService, CreatorService, SocialProfile } from './types';

export const FEATURE_CARDS: FeatureItem[] = [
  {
    id: 'singer',
    title: 'Singer',
    description: 'A passionate vocalist delivering soul-stirring melodies across multiple genres, specializing in Tamil cinema playbacks, classical fusions, and acoustic covers.',
    iconName: 'Music'
  },
  {
    id: 'actor',
    title: 'Actor',
    description: 'Bringing versatile screen presence, emotive expressions, and authentic Tamil dialogues to short films, serial roles, commercial ads, and viral videos.',
    iconName: 'Clapperboard'
  },
  {
    id: 'creator',
    title: 'Content Creator',
    description: 'Drafting organic stories, creative reels, and lifestyle narratives that connect directly with a loyal, local, and widespread Indian demographic.',
    iconName: 'Sparkles'
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle Creator',
    description: 'Vlogging daily routines, local cuisines of Tamil Nadu, travel vlogs, and beauty regimens, highlighting comfort, aesthetics, and rich culture.',
    iconName: 'Compass'
  },
  {
    id: 'brand',
    title: 'Brand Collaborator',
    description: 'Representing premium brands through engaging visual stories, authentic unboxings, custom reviews, and organic integration.',
    iconName: 'Briefcase'
  }
];

export const PERFORMANCES: PerformanceItem[] = [
  {
    id: 'reel1',
    title: 'Senga soola kaara',
    reelUrl: 'https://www.instagram.com/reel/DVQu8AKAR3b/',
    duration: '0:58',
    views: '2.5M+ Views',
    category: 'Vocal Session'
  },
  {
    id: 'reel2',
    title: 'Ennulle ennulle',
    reelUrl: 'https://www.instagram.com/reel/DUYF9a_Acwb/',
    duration: '1:06',
    views: '2.1M+ Views',
    category: 'Acoustic Cover'
  },
  {
    id: 'reel3',
    title: 'Neelothi',
    reelUrl: 'https://www.instagram.com/reel/DUQXIy5CTGC/',
    duration: '1:15',
    views: '3.5M+ Views',
    category: 'Live Performance'
  }
];

export const COLLABORATION_SERVICES: CollaborationService[] = [
  {
    id: 'collab1',
    title: 'Lifestyle Promotions',
    description: 'Dynamic integrations of daily products and retail aesthetics into authentic, highly-engaging daily Tamil lifestyle content.',
    iconName: 'Compass',
    tags: ['Lifestyle', 'Reels']
  },
  {
    id: 'collab2',
    title: 'Beauty Promotions',
    description: 'Interactive unboxings, skincare routines, make-up transitions, and product reviews featuring premium organic skincare solutions.',
    iconName: 'Heart',
    tags: ['Beauty', 'Skincare']
  },
  {
    id: 'collab3',
    title: 'Cover Songs',
    description: 'Professional vocal recordings, collaborative music videos, background scoring, or original cinematic cover integrations.',
    iconName: 'Music4',
    tags: ['Vocal', 'Collaboration']
  },
  {
    id: 'collab4',
    title: 'Entertainment Content',
    description: 'Engaging, humorous, or dramatic native social skits, creative transitions, and high-retention viral video shorts.',
    iconName: 'Smile',
    tags: ['Acting', 'Humor']
  },
  {
    id: 'collab5',
    title: 'Vlogs',
    description: 'In-depth storytelling of Erode, Tamil Nadu local travel destinations, luxury hotel stays, regional culinary maps, and events.',
    iconName: 'Camera',
    tags: ['Travel', 'Culture']
  },
  {
    id: 'collab6',
    title: 'Product Reviews',
    description: 'Comprehensive reviews focusing on utility, high-quality close-ups, specific value propositions, and live user experiences.',
    iconName: 'Box',
    tags: ['Aesthetic', 'Review']
  },
  {
    id: 'collab7',
    title: 'Website Reviews',
    description: 'Insightful walkthroughs, application testing videos, visual-focused feature demos, and screen-sharing app reviews.',
    iconName: 'Globe',
    tags: ['Tech', 'SaaS']
  },
  {
    id: 'collab8',
    title: 'Brand Collaborations',
    description: 'Long-term strategic campaigns combining feed posts, immersive stories, digital launches, offline presence, and ambassadorship.',
    iconName: 'Award',
    tags: ['Premium', 'Strategy']
  },
  {
    id: 'collab9',
    title: 'Affiliate Marketing',
    description: 'Ongoing strategic placement, custom purchase links, conversion audits, and custom codes designed to track direct conversions.',
    iconName: 'Percent',
    tags: ['Conversion', 'Sales']
  },
  {
    id: 'collab10',
    title: 'Barter Collaborations',
    description: 'Selective premium trade integrations of luxury goods, brand styling pieces, and hospitality events for high-quality content production.',
    iconName: 'RefreshCw',
    tags: ['Trade', 'Selective']
  }
];

export const CREATOR_SERVICES: CreatorService[] = [
  {
    id: 'serv1',
    title: 'Paid Collaborations',
    description: 'Premium strategic client integrations styled to look organic, preserving artistic integrity while driving massive click-through.',
    iconName: 'DollarSign',
    badge: 'Popular'
  },
  {
    id: 'serv2',
    title: 'Affiliate Partnerships',
    description: 'Sustained conversion-focused placements via custom trackable codes, active link-in-bio highlights, and customized story funnels.',
    iconName: 'TrendingUp',
    badge: 'Growth'
  },
  {
    id: 'serv3',
    title: 'Music Collaborations',
    description: 'Professional cinema singing, custom covers, acoustic soundtracks, acoustic branding, or professional lyricist partnerships.',
    iconName: 'Headphones',
    badge: 'Artistic'
  },
  {
    id: 'serv4',
    title: 'Brand Promotions',
    description: 'Elevated multi-platform campaigns using cinematic storytelling, high aesthetic styling, and targeted viewer triggers.',
    iconName: 'Megaphone',
    badge: 'Reach'
  },
  {
    id: 'serv5',
    title: 'Content Campaigns',
    description: 'Full-funnel execution from ideation, scriptwriting, professional acting, studio staging, post-production, to active engagement.',
    iconName: 'Layers',
    badge: 'Full-Suite'
  },
  {
    id: 'serv6',
    title: 'Social Media Promotions',
    description: 'High-frequency interactive stories, carousel galleries, and dual-creator joint feed reels for maximum brand synergy.',
    iconName: 'Instagram',
    badge: 'Social'
  },
  {
    id: 'serv7',
    title: 'Website Reviews',
    description: 'Direct desktop or mobile testing videos with UI/UX reviews, live-screen walkthroughs, and genuine creator testimonials.',
    iconName: 'MonitorSnap',
    badge: 'Digital'
  },
  {
    id: 'serv8',
    title: 'Product Reviews',
    description: 'High-production value unboxings, tactile close-ups, benefit explanations, and transparent opinion reports for target buyers.',
    iconName: 'PackageCheck',
    badge: 'Aesthetic'
  }
];

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    id: 'instacard',
    platform: 'instagram',
    title: 'Instagram',
    displayName: 'Voice of Logu',
    category: 'Singer • Actor • Content Creator',
    followersCount: '47K+',
    profileUrl: 'https://www.instagram.com/voiceof_logu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    actionText: 'Follow on Instagram'
  },
  {
    id: 'ytcard',
    platform: 'youtube',
    title: 'YouTube',
    displayName: 'Voice of Logu Official',
    category: 'Performances & Music',
    followersCount: 'Coming Soon',
    profileUrl: 'https://www.youtube.com/@voiceof_logu',
    actionText: 'Subscribe on YouTube'
  },
  {
    id: 'fbcard',
    platform: 'facebook',
    title: 'Facebook',
    displayName: 'Voice of Logu',
    category: 'Artist Community',
    followersCount: 'Active Community',
    profileUrl: 'https://www.facebook.com/share/1Gv2e79cPo/',
    actionText: 'Connect on Facebook'
  },
  {
    id: 'wacard',
    platform: 'whatsapp',
    title: 'WhatsApp Business',
    displayName: '+91 78128 10770',
    category: 'Official Inquiry Hotline',
    followersCount: '24/7 Support',
    profileUrl: 'https://wa.me/917812810770?text=Hi%20Logu%21%20We%20saw%20your%20portfolio%20and%20would%20love%20to%20collaborate%20on%20a%20project.',
    actionText: 'Chat on WhatsApp'
  }
];
