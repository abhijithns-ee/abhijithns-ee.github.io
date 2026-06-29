export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: 'Academic' | 'Competition' | 'Project' | 'Leadership';
  iconName: string;
  description: string;
  highlights: string[];
  metric?: {
    value: string;
    label: string;
  };
}

export interface ResumeInfo {
  fullName: string;
  professionalTitle: string;
  summary: string;
  downloadUrl: string; // Placeholder or customizable link
  viewUrl: string; // Standard PDF viewer link or customizable
  skillsByCategory: {
    category: string;
    items: string[];
  }[];
}

/**
 * EASY METHOD TO EDIT & ADD ACHIEVEMENTS & RESUME DETAILS LATER:
 * To add a new achievement, simply add a new object to the ACHIEVEMENTS_DATA array.
 * To update resume details or skill categories, edit the RESUME_INFO object below.
 */

export const RESUME_INFO: ResumeInfo = {
  fullName: 'Abhijith N S',
  professionalTitle: 'Electrical & Electronics Engineer',
  summary: 'Detail-oriented Electrical and Electronics Engineering student with a robust background in industrial systems, ODM solutions, and modern software-hardware interfaces. Proven track record of high academic performance and active leadership in engineering societies.',
  downloadUrl: '#', // Replace with actual Google Drive / Dropbox link when available
  viewUrl: '#', // Replace with actual PDF viewer link when available
  skillsByCategory: [
    {
      category: 'Power Systems & Core',
      items: ['Gas Insulated Switchgear (GIS)', 'Substation Layout Design', 'Power Transformers', 'Safety Switchgears', 'Relay Protection']
    },
    {
      category: 'Industrial & Hardware',
      items: ['Original Design Manufacturing (ODM)', 'Transformer Winding Floors', 'PLC Programming (Ladder Logic)', 'SCADA HMI Systems', 'PCB Layout Design']
    },
    {
      category: 'Software & Tools',
      items: ['C / C++', 'Python', 'MATLAB', 'HTML5 Canvas', 'React / TypeScript', 'Tailwind CSS', 'AutoCAD Electrical']
    }
  ]
};

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'academic-topper-poly',
    title: 'Department Topper - Diploma in EEE',
    organization: 'Govt. Polytechnic College Pala',
    year: '2025',
    category: 'Academic',
    iconName: 'Trophy',
    description: 'Secured the 1st Rank in the Electrical and Electronics Engineering branch across the entire department, graduating with a near-perfect CGPA of 9.75/10.00.',
    highlights: [
      'Graduated with an outstanding academic CGPA of 9.75',
      'Awarded Best Outstanding Outgoing Student of EEE division',
      'Perfect 10/10 scores in advanced electrical machinery and power electronics labs'
    ],
    metric: {
      value: '9.75 CGPA',
      label: 'Academic Rank 1'
    }
  },
  {
    id: 'cet-admission-merit',
    title: 'BTech Lateral Entry Selection on Pure Merit',
    organization: 'College of Engineering Trivandrum (CET)',
    year: '2025',
    category: 'Academic',
    iconName: 'GraduationCap',
    description: 'Secured highly competitive merit-based state-level admission into CET, widely regarded as the premier engineering institute in Kerala, for the Bachelor of Technology (BTech) in Electrical & Electronics Engineering program.',
    highlights: [
      'Admitted to top-tier state government college',
      'Selected based on elite ranks in state-wide EEE selection list',
      'Active researcher in college power system development labs'
    ],
    metric: {
      value: 'Top Tier',
      label: 'Merit Selection'
    }
  },
{
    id: 'tata-elxsi-scholarship',
    title: 'Tata Elxsi Scholar',
    organization: 'Tata Elxsi',
    year: '2024',
    category: 'Academic',
    iconName: 'Award', // Ensure 'Award' matches your icon library (e.g., Lucide, FontAwesome)
    description: 'Selected as one of the top 100 students across all polytechnic colleges through a rigorous multi-stage interview process. Received sustained financial, technical, and mentorship support to advance academic excellence.',
    highlights: [
      'Top 100 selection among polytechnic students state-wide',
      'Received comprehensive technical training and industry-grade mentorship',
      'Leveraged scholarship support to transition successfully into higher engineering studies'
    ],
    metric: {
      value: 'Top 100',
      label: 'Scholarship Merit'
    }
  },
  
  {
    id: 'prof-pi-varghese-award',
    title: 'Best Student in Engineering Graphics',
    organization: 'Prof. P. I. Varghese Endowment',
    year: '2023',
    category: 'Academic',
    iconName: 'Award', 
    description: 'Awarded for securing the top position in Engineering Graphics among polytechnic students across Kerala, based on the State Board of Technical Examinations results.',
    highlights: [
      'Ranked among the top 15 students state-wide in Engineering Graphics',
      'Recognized for exceptional precision and technical drafting proficiency',
      'Endowment award presented by the State Board of Technical Education'
    ],
    metric: {
      value: 'Top 15',
      label: 'State Ranking'
    }
  },

  {
    id: 'yip-campus-ambassador',
    title: 'Campus Ambassador - Young Innovators Programme',
    organization: 'K-DISC, Government of Kerala',
    year: '2023',
    category: 'Leadership',
    iconName: 'Users', // Use 'Users' or 'Megaphone' to reflect advocacy
    description: 'Selected as a campus ambassador for the Government of Kerala’s YIP initiative, fostering a culture of innovation and collaborative problem-solving among students.',
    highlights: [
      'Facilitated workshops to bridge the gap between academic theory and real-world problem solving',
      'Acted as a liaison between student innovators and the K-DISC state-level platform',
      'Promoted collaborative design thinking and social innovation projects on campus'
    ],
    metric: {
      value: 'Ambassador',
      label: 'K-DISC Initiative'
    }
  },

  {
    id: 'technical-seminar-distinction',
    title: 'Distinctive Merit for Seminar on Gas Insulated Substations',
    organization: 'State Technical Board',
    year: '2024',
    category: 'Project',
    iconName: 'BookOpen',
    description: 'Authored and presented a comprehensive technical analysis on compressed SF6 gas dielectric advantages in GIS environments compared to conventional Air Insulated Substations (AIS).',
    highlights: [
      'Comprehensive layout research validated by senior KSEB engineers',
      'Published visual diagrams explaining substation safety zones',
      'Received 100% evaluation scores from academic committee'
    ]
  },

  {
    id: 'robotic-club-liaison',
    title: 'Liaison Lead & Innovation Officer',
    organization: 'CET Robotics Society',
    year: '2025',
    category: 'Leadership',
    iconName: 'Sparkles',
    description: 'Elected to represent the society in coordination with industrial research partners. Spearheaded logistics for inter-collegiate robotics competitions and technical symposiums.',
    highlights: [
      'Organized three high-impact robotics training sessions for 200+ students',
      'Secured sponsorship deals from local engineering firms',
      'Directed cross-departmental development projects'
    ],
    metric: {
      value: '200+ Students',
      label: 'Engagement Lead'
    }
  }
];
