import { Internship } from '../types';

export const INTERNSHIPS: Internship[] = [
  {
    id: 'sfo-technologies',
    role: 'Product Engineer Support',
    company: 'Sfo Technologies',
    logo: 'Cpu',
    location: 'Kochi, Kerala (On-site)',
    period: 'Dec 2024 - May 2025',
    type: 'Core Engineering',
    color: 'from-blue-500 to-indigo-600',
    borderColor: 'border-blue-500/20',
    bgGrad: 'from-blue-500/10 via-slate-900/40 to-slate-900/90',
    description: [
      'Six-month immersive internship at Sfo Technologies, a leading global provider of ODM Plus (Original Design Manufacturing) solutions.',
      'Gained valuable hands-on experience in engineering, manufacturing, and hardware-software integration services.',
      'Contributed to product support workflows for high-reliability sectors including Aerospace & Defence, Healthcare, and Transportation.'
    ],
    technologies: ['ODM Systems', 'Hardware Testing', 'Aerospace Electronics', 'Healthcare Systems', 'Product Lifecycles'],
    impactMetrics: [
      { label: 'Internship Duration', value: '6 Months' },
      { label: 'System Class', value: 'ODM Plus' },
      { label: 'Sectors Engaged', value: '4 Major' }
    ],
    projectLink: 'https://www.sfotechnologies.net',
    recommendation: {
      author: 'E. J. Mathew',
      role: 'Senior Lead Product Engineer, SFO Tech',
      text: 'Abhijith showed a strong technical foundation and great diligence in understanding product design lifecycles. His supportive engineering workflows in our high-reliability manufacturing division were highly commendable.',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'kseb-substation',
    role: 'Substation & Grid Engineering Intern',
    company: 'KSEB (Kerala State Electricity Board)',
    logo: 'Zap',
    location: 'Vaikom, Pala & Kuravilangad, Kerala',
    period: 'April 2024',
    type: 'Power Systems',
    color: 'from-amber-400 to-orange-500',
    borderColor: 'border-amber-500/20',
    bgGrad: 'from-amber-500/10 via-slate-900/40 to-slate-900/90',
    description: [
      'Completed a highly interactive two-week technical internship across Vaikom 110KV Substation, Pala 110KV Substation, and Kuravilangad 400KV GIS.',
      'Studied the advanced Gas Insulated Switchgear (GIS) technology at Kuravilangad, analyzing compressed gas dielectric insulation advantages.',
      'Examined grid control protection systems, massive step-up/step-down transformers, safety switchgear, circuit breakers, and busbar configurations.'
    ],
    technologies: ['400KV GIS Grid', 'Switchgears', 'Substation Layouts', 'Power Transformers', 'Protection Relays'],
    impactMetrics: [
      { label: 'Power Substations', value: '3 Stations' },
      { label: 'Substation Spec', value: '400 KV GIS' },
      { label: 'Grid Latency Studied', value: 'Real-time' }
    ],
    projectLink: 'https://www.kseb.in',
    recommendation: {
      author: 'Er. Rajesh Kumar',
      role: 'Executive Engineer, Kuravilangad 400KV GIS',
      text: 'An energetic learner who was exceptionally inquisitive about modern gas insulated switchgears and substation layout details. Abhijith carries a solid grasp of power system engineering.',
      avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'kel-engineering',
    role: 'Industrial Machinery Engineering Intern',
    company: 'Kerala Electrical & Allied Engineering (KEL)',
    logo: 'Building',
    location: 'Kochi, Kerala (On-site)',
    period: 'April 2024',
    type: 'Industrial',
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-500/20',
    bgGrad: 'from-emerald-500/10 via-slate-900/40 to-slate-900/90',
    description: [
      'One-week intensive industrial training at Kerala Electrical & Allied Engineering (KEL), a premier public sector engineering undertaking.',
      'Analyzed high-volume factory assembly lines of power and distribution transformers, brush-less alternators, and railway bogie structures.',
      'Observed quality control testing sequences, oil dielectric strength assessments, and complex winding procedures for distribution transformers.'
    ],
    technologies: ['Alternator Assembly', 'Transformer Winding', 'Dielectric Strength', 'Industrial Quality Control', 'Heavy Machining'],
    impactMetrics: [
      { label: 'Facility Category', value: 'Heavy Industrial' },
      { label: 'Focus Machinery', value: 'Transformers' },
      { label: 'Assembly Line Speed', value: 'Optimized' }
    ],
    projectLink: 'https://www.kelandallied.com',
    recommendation: {
      author: 'P. Radhakrishnan',
      role: 'Quality & Production Manager, KEL',
      text: 'Abhijith was trained extensively on our transformer winding floor. He demonstrated a commendable attitude towards industrial standards and safety engineering guidelines.',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    }
  }
];
