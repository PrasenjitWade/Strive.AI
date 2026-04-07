export interface RoadmapStep {
  title: string;
  description: string;
}

export interface CareerOption {
  id: string;
  title: string;
  description: string;
  category: '10th' | '12th' | 'College';
  roadmap: RoadmapStep[];
}

export const CAREER_OPTIONS: CareerOption[] = [
  {
    id: 'sci-pcm-10',
    title: 'Science (PCM)',
    description: 'Physics, Chemistry, and Mathematics for engineering and tech.',
    category: '10th',
    roadmap: [
      { title: 'Class 11 & 12', description: 'Choose Science stream with PCM. Focus on core concepts in Physics and Math.' },
      { title: 'Competitive Prep', description: 'Join coaching or start self-study for JEE Main & Advanced.' },
      { title: 'Entrance Exams', description: 'Appear for JEE, BITSAT, and State Engineering entrances.' },
      { title: 'Counseling', description: 'Participate in JoSAA/CSAB counseling for IITs, NITs, and IIITs.' },
      { title: 'Graduation', description: 'Join a reputed Engineering college for B.Tech/B.E.' }
    ]
  },
  {
    id: 'sci-pcb-10',
    title: 'Science (PCB)',
    description: 'Physics, Chemistry, and Biology for medical and life sciences.',
    category: '10th',
    roadmap: [
      { title: 'Class 11 & 12', description: 'Choose Science stream with PCB. Focus on Biology and Chemistry.' },
      { title: 'NEET Prep', description: 'Prepare rigorously for the National Eligibility cum Entrance Test (NEET).' },
      { title: 'Entrance Exam', description: 'Appear for NEET-UG and aim for a high rank for Government colleges.' },
      { title: 'Counseling', description: 'Participate in MCC counseling for MBBS/BDS seats.' },
      { title: 'Medical School', description: 'Complete 5.5 years of MBBS including mandatory internship.' }
    ]
  },
  {
    id: 'diploma-10',
    title: 'Polytechnic (Diploma)',
    description: 'Technical and vocational training after 10th grade.',
    category: '10th',
    roadmap: [
      { title: 'Admission', description: 'Apply for Polytechnic entrance exams (like Maharashtra MSBTE CET).' },
      { title: 'Course Selection', description: 'Choose a branch like Mechanical, Civil, CS, or Electrical Engineering.' },
      { title: 'Diploma Program', description: 'Complete 3 years of technical education with practical training.' },
      { title: 'Lateral Entry', description: 'Option to join 2nd year of B.E./B.Tech directly after Diploma.' },
      { title: 'Career/Job', description: 'Join as a Junior Engineer (JE) in Govt or Private sectors.' }
    ]
  },
  {
    id: 'comm-10',
    title: 'Commerce',
    description: 'Business, Finance, and Accountancy for future leaders.',
    category: '10th',
    roadmap: [
      { title: 'Class 11 & 12', description: 'Choose Commerce stream. Focus on Accountancy, Economics, and Business Studies.' },
      { title: 'Foundation', description: 'Register for CA Foundation or start preparing for BBA/B.Com entrances.' },
      { title: 'Entrance Exams', description: 'Appear for CUET, IPMAT, or CA Foundation exam.' },
      { title: 'Graduation', description: 'Join a top college for B.Com, BBA, or start CA Intermediate.' },
      { title: 'Professional Growth', description: 'Complete CA/CS/CMA or pursue MBA for advanced careers.' }
    ]
  },
  {
    id: 'arts-10',
    title: 'Arts / Humanities',
    description: 'Literature, History, Psychology, and Creative Arts.',
    category: '10th',
    roadmap: [
      { title: 'Class 11 & 12', description: 'Choose Arts/Humanities stream. Explore subjects like History, Pol Science, or Psychology.' },
      { title: 'Skill Building', description: 'Develop strong writing, analytical, and creative skills.' },
      { title: 'Entrance Exams', description: 'Appear for CUET for top universities or Law/Design entrances like CLAT/NID.' },
      { title: 'Graduation', description: 'Pursue B.A. in your chosen field or professional courses in Law/Design.' },
      { title: 'Career Paths', description: 'Explore careers in Civil Services, Law, Journalism, or Creative Arts.' }
    ]
  },
  {
    id: 'eng-12',
    title: 'Engineering (B.Tech)',
    description: 'The most popular path for science students in India.',
    category: '12th',
    roadmap: [
      { title: 'Entrance Exams', description: 'Appear for JEE Main, JEE Advanced, BITSAT, and State CETs.' },
      { title: 'Counseling', description: 'Participate in JoSAA/CSAB or State counseling processes.' },
      { title: 'College Selection', description: 'Choose a branch (CS, IT, Mech, etc.) based on interest and rank.' },
      { title: 'B.Tech Program', description: 'Complete 4 years of technical education with internships.' },
      { title: 'Placement/Higher Ed', description: 'Secure a job through campus placements or prepare for GATE/GRE/CAT.' }
    ]
  },
  {
    id: 'med-12',
    title: 'Medicine (MBBS)',
    description: 'A noble profession for biology enthusiasts.',
    category: '12th',
    roadmap: [
      { title: 'NEET-UG', description: 'Clear NEET-UG with a high percentile for Government medical colleges.' },
      { title: 'MBBS Course', description: 'Complete 4.5 years of academic study and 1 year of internship.' },
      { title: 'Specialization', description: 'Prepare for NEET-PG or INI-CET for MD/MS specialization.' },
      { title: 'Residency', description: 'Complete 3 years of Junior Residency in your chosen specialty.' },
      { title: 'Practice', description: 'Start your practice as a specialist doctor or join a hospital.' }
    ]
  },
  {
    id: 'ca-12',
    title: 'Chartered Accountancy',
    description: 'For those who love finance and accounting.',
    category: '12th',
    roadmap: [
      { title: 'CA Foundation', description: 'Register and clear the CA Foundation exam after 12th.' },
      { title: 'CA Intermediate', description: 'Complete both groups of CA Intermediate exams.' },
      { title: 'Articleship', description: 'Undergo 3 years of mandatory practical training (Articleship).' },
      { title: 'CA Final', description: 'Clear both groups of CA Final exams during or after articleship.' },
      { title: 'Membership', description: 'Register with ICAI as a qualified Chartered Accountant.' }
    ]
  },
  {
    id: 'upsc-coll',
    title: 'Civil Services (IAS/IPS)',
    description: 'Serve the nation through the prestigious UPSC exams.',
    category: 'College',
    roadmap: [
      { title: 'Preparation', description: 'Start early with NCERTs and daily newspaper reading (The Hindu/IE).' },
      { title: 'UPSC Prelims', description: 'Clear the General Studies and CSAT papers in the Preliminary exam.' },
      { title: 'UPSC Mains', description: 'Clear 9 descriptive papers including your chosen Optional subject.' },
      { title: 'Interview', description: 'Face the Personality Test conducted by the UPSC board.' },
      { title: 'Training', description: 'Undergo rigorous training at LBSNAA (Mussoorie) or SVPNPA (Hyderabad).' }
    ]
  },
  {
    id: 'ent-coll',
    title: 'Entrepreneurship',
    description: 'Start your own venture and solve real-world problems.',
    category: 'College',
    roadmap: [
      { title: 'Ideation', description: 'Identify a real-world problem and brainstorm a unique solution.' },
      { title: 'Market Research', description: 'Validate your idea through market research and customer feedback.' },
      { title: 'MVP Development', description: 'Build a Minimum Viable Product to test your core value proposition.' },
      { title: 'Funding/Bootstrapping', description: 'Seek seed funding from investors or bootstrap your startup.' },
      { title: 'Scaling', description: 'Focus on growth, team building, and scaling your business operations.' }
    ]
  }
];
