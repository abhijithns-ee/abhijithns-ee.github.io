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
    id: 'Embedded System , IOT Development',
    title: 'Circuitron 2026',
    organization: 'IEEE SB CEK',
    period: '2026 JUN',
    category: 'Workshop',
    iconName: 'Cpu',
    description: 'first position in Circuitron 2026, a 14-Day Technical Bootcamp focused on Embedded Systems, loT Development, and Intelligent Technology Solutions,organized by IEEE IAS SBC CE Kidangoor and IEEE RAS SBC CE Kidangoor.',
    highlights: ['Embedded Systems, loT Development, and Intelligent Technology Solutions'],
    credentialId: 'CERT-NMZNWB'
  },
  {
    id: 'MATLAB WORKSHOP',
    title: 'MATLAB WORKSHOP',
    organization: 'IEEE CSS SBC CET',
    period: '2025 DEC',
    category: 'Workshop',
    iconName: 'Trophy',
    description: '9-week online MATLAB WORKSHOP SERIES 2.0 conducted by IEEE CSS SBC CET ',
    highlights: ['9-week online MATLAB WORKSHOP SERIES 2.0', 'Directed technical workshops'],
  },
  {
    id: 'Tech-Fest',
    title: 'TEch Fest',
    organization: 'Govt. Polytechnic College Pala',
    period: '2023 OCT',
    category: 'Fest',
    iconName: 'Sparkles',
    description: 'Fire FIghting Robot.',
    highlights: ['Embedded system', 'Fire and Safety', 'Technical assistance']
  }
];
