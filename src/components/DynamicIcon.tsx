import {
  Cpu,
  CreditCard,
  Layers,
  Languages,
  MapPin,
  Calendar,
  Building2,
  Sparkles,
  Code,
  Send,
  CheckCircle2,
  Trash2,
  Plus,
  X,
  ChevronRight,
  Clock,
  Sliders,
  ShieldAlert,
  ArrowUpRight,
  Mail,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Check,
  Briefcase,
  Award,
  Terminal,
  Trophy,
  Zap,
  GraduationCap,
  BookOpen,
  Phone,
  FileText,
  Activity,
  Download,
  AlertCircle,
  LucideProps
} from 'lucide-react';

const iconMap = {
  Cpu,
  CreditCard,
  Layers,
  Languages,
  MapPin,
  Calendar,
  Building2,
  Sparkles,
  Code,
  Send,
  CheckCircle2,
  Trash2,
  Plus,
  X,
  ChevronRight,
  Clock,
  Sliders,
  ShieldAlert,
  ArrowUpRight,
  Mail,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Check,
  Briefcase,
  Award,
  Terminal,
  Trophy,
  Zap,
  GraduationCap,
  BookOpen,
  Phone,
  FileText,
  Activity,
  Download,
  AlertCircle
};

export type IconName = keyof typeof iconMap;

interface DynamicIconProps extends Omit<LucideProps, 'ref'> {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = iconMap[name as IconName] || Briefcase;
  return <IconComponent {...props} />;
}
