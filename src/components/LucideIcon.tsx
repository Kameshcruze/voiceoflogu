import {
  Music,
  Clapperboard,
  Sparkles,
  Compass,
  Briefcase,
  Heart,
  Music4,
  Smile,
  Camera,
  Box,
  Globe,
  Award,
  Percent,
  RefreshCw,
  DollarSign,
  TrendingUp,
  Headphones,
  Megaphone,
  Layers,
  Instagram,
  Monitor,
  Package,
  Home,
  User,
  Mail,
  Youtube,
  Facebook,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
  MessageSquare,
  Search,
} from 'lucide-react';

const iconMap = {
  Music,
  Clapperboard,
  Sparkles,
  Compass,
  Briefcase,
  Heart,
  Music4,
  Smile,
  Camera,
  Box,
  Globe,
  Award,
  Percent,
  RefreshCw,
  DollarSign,
  TrendingUp,
  Headphones,
  Megaphone,
  Layers,
  Instagram,
  Monitor,
  Package,
  Home,
  User,
  Mail,
  Youtube,
  Facebook,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
  MessageSquare,
  Search,
};

export type IconName = keyof typeof iconMap;

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 20 }: LucideIconProps) {
  // Safe matching with fallbacks
  const IconComponent = iconMap[name as IconName] || Sparkles;
  return <IconComponent className={className} size={size} />;
}
