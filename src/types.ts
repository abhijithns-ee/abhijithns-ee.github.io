export interface ImpactMetric {
  label: string;
  value: string;
}

export interface Recommendation {
  author: string;
  role: string;
  text: string;
  avatarUrl?: string;
}

export type InternshipType = 'Frontend' | 'Fullstack' | 'Mobile' | 'AI & Data' | 'Product Design' | 'Core Engineering' | 'Power Systems' | 'Industrial';

export interface Internship {
  id: string;
  role: string;
  company: string;
  logo: string; // Tailwind icon name or character
  location: string;
  period: string;
  type: InternshipType;
  description: string[];
  technologies: string[];
  impactMetrics: ImpactMetric[];
  color: string; // Tailwind tint class or hex
  borderColor: string;
  bgGrad: string;
  projectLink?: string;
  recommendation?: Recommendation;
}

export interface ContactMessage {
  id: string;
  senderName: string;
  companyName: string;
  senderEmail: string;
  roleType: string;
  budgetRange?: string;
  isUrgent: boolean;
  message: string;
  timestamp: string;
}
