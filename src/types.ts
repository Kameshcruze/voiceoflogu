/**
 * Shared Type Definitions for Voice of Logu Portfolio
 */

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon selector from lucide-react
}

export interface PerformanceItem {
  id: string;
  title: string;
  reelUrl: string;
  duration: string;
  views: string;
  playbackSpeedText?: string;
  category: string;
}

export interface CollaborationService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags?: string[];
}

export interface CreatorService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface SocialProfile {
  id: string;
  platform: 'instagram' | 'youtube' | 'facebook' | 'whatsapp';
  title: string;
  displayName: string;
  category: string;
  followersCount: string;
  profileUrl: string;
  profileImage?: string;
  actionText: string;
}

export interface CollaborationRequest {
  name: string;
  brandName: string;
  email: string;
  phone: string;
  collaborationType: string;
  message: string;
}
