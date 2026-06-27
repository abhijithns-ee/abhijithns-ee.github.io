export interface CredentialItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  category: 'Core' | 'Fest' | 'Workshop';
  iconName: string;
  description: string;
  highlights: string[];
  credentialId?: string; // Optional license/credential verification ID
}

/**
 * EASY METHOD TO EDIT & ADD CERTIFICATES / ACTIVITIES LATER:
 * To add a new certificate or activity, simply add a new object to this array.
 * 
 * Fields explained:
 * - id: A unique string identifier (e.g. 'my-new-cert')
 * - title: The name of the certificate or activity
 * - organization: The organization or college hosting/issuing it
 * - period: The date or academic year (e.g., '2025 Jan')
 * - category: Must be either 'Core', 'Fest', or 'Workshop'
 * - iconName: Icon to display (choose from 'Award', 'Cpu', 'BookOpen', 'GraduationCap', 'Zap', 'Flame', 'Sparkles', 'Trophy', 'Activity')
 * - description: Detailed description of what you did, learned, or achieved
 * - highlights: A bullet list of key achievements or skills learned
 * - credentialId: (Optional) Any serial number or credential link
 */
export const CREDENTIALS_DATA: CredentialItem[] = [
  {
    id: 'plc-scada-automation',
    title: 'Industrial Automation with PLC & SCADA',
    organization: 'Govt. Polytechnic College Pala (In association with Pro-Tech)',
    period: '2024 Oct',
    category: 'Workshop',
    iconName: 'Cpu',
    description: 'Hands-on certified workshop covering the fundamentals of industrial automation, focusing on Allen-Bradley and Siemens PLC programming (Ladder Logic) and supervisory SCADA systems for modern power substations.',
    highlights: ['Ladder Logic programming', 'SCADA HMI design', 'Substation automation systems'],
    credentialId: 'CERT-PLC-2024-8902'
  },
  {
    id: 'drishti-cet-fest',
    title: 'Drishti National Technical Fest - Event Lead',
    organization: 'College of Engineering Trivandrum (CET)',
    period: '2025 Oct',
    category: 'Fest',
    iconName: 'Trophy',
    description: 'Served as a Core Technical Coordinator for the flagship Electrical & Electronics engineering exhibition events. Managed coordination across 15+ external colleges and co-directed budget allocation for active event stages.',
    highlights: ['Lead Event Coordination', 'Electrical Model Exhibition Coordinator', 'Directed technical workshops'],
    credentialId: 'DRISHTI-CET-COORD-7711'
  },
  {
    id: 'ieee-pes-congress',
    title: 'IEEE Power & Energy Society (PES) Congress',
    organization: 'IEEE Kerala Section',
    period: '2024 Nov',
    category: 'Core',
    iconName: 'Zap',
    description: 'Active delegate and contributor at the annual state-level Power & Energy Society congress. Participated in deep-dive technical panels regarding green power distribution grids, microgrids, and high-voltage grid protection.',
    highlights: ['Smart Grid technology panels', 'Renewable integration seminars', 'Networked with industry electrical leaders']
  },
  {
    id: 'cet-robotics-robofest',
    title: 'Robofest Line Follower Design Lead',
    organization: 'CET Robotics & Innovation Club',
    period: '2025 Nov',
    category: 'Fest',
    iconName: 'Flame',
    description: 'Coordinated the hardware architecture and circuit design for the department\'s autonomous line-following vehicle entry. Integrated advanced IR sensor arrays and tuned PID control parameters for efficient speed/turn control.',
    highlights: ['PID Tuning & Calibration', 'IR Sensor Array Integration', 'Circuit Design & Prototyping']
  },
  {
    id: 'high-voltage-safety',
    title: 'High-Voltage Safety & Grid Switchgear Seminar',
    organization: 'KSEB Power Engineers Association',
    period: '2024 May',
    category: 'Core',
    iconName: 'Award',
    description: 'Completed safe-operation training certification centered around high-voltage circuit breakers (SF6 and vacuum type), isolators, grounding equipment, and substation protection relays.',
    highlights: ['SF6 Circuit Breaker safety standards', 'Insulation resistance measurements', 'Substation grounding topologies'],
    credentialId: 'HV-SAFE-KSEB-5532'
  },
  {
    id: 'dhanak-cet-cultural',
    title: 'Dhanak Cult-Tech Fest - Creative Infrastructure',
    organization: 'Govt. Polytechnic College Pala / CET Support',
    period: '2023 Feb',
    category: 'Fest',
    iconName: 'Sparkles',
    description: 'Engineered custom LED display systems and interactive responsive illumination boards for the main stage decoration, linking microcontrollers to sound-intensity level feeds.',
    highlights: ['Sound-reactive lighting hardware', 'Microcontroller integration', 'Stage technical assistance']
  }
];
