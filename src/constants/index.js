import {
  agencyai,
  guardiancrm,
  guardianlms,
  socialagency,
  marshal,
  pandorax,
  agencyscale,
  nmrc,
  hmip,
  placeholder,
  placeholder2,
  customerpayme,
  voices,
  sevenstar,
} from '../assets';

import Resume from '../assets/Jeremiah-Iromaka-Resume.pdf'

export const navLinks = [
  {
    id: 'profile',
    title: 'About',
    width: 24,
    height: 24,
  },
  {
    id: 'service',
    title: 'Services',
    width: 30,
    height: 30,
  },
  {
    id: 'projects',
    title: 'Projects',
    width: 24,
    height: 24,
  },
  {
    id: 'experience',
    title: 'Experience',
    width: 30,
    height: 30,
  },
  {
    id: 'skills',
    title: 'Skills',
    width: 30,
    height: 30,
  },
];

const services = [
  {
    title: 'Full Stack Development',
    icon: 'fullstack',
    width: 80,
    height: 80,
  },
  {
    title: 'API Development and Integration',
    icon: 'api',
    width: 60,
    height: 60,
  },
  {
    title: 'Cloud-Based Solutions Deployment',
    icon: 'cloud',
    width: 60,
    height: 60,
  },
  {
    title: 'Application Support & Consulting',
    icon: 'support',
    width: 60,
    height: 60,
  },
  {
    title: 'Project Management',
    icon: 'pm',
    width: 60,
    height: 60,
  },
  {
    title: 'Training & Tutoring',
    icon: 'training',
    width: 60,
    height: 60,
  },
];

const softSkills = [
  'Communcation', 'Team Collaboration','Leadership','Problem Solving','Adaptability','Creativity',
];

const techSkills = [
  {
    name: 'PHP',
    icon: 'php',
  },
  {
    name: 'TypeScript',
    icon: 'typescript',
  },
  {
    name: 'JavaScript',
    icon: 'javascript',
  },
  {
    name: 'HTML',
    icon: 'html',
  },
  {
    name: 'CSS',
    icon: 'css',
  },
  {
    name: 'GraphQL',
    icon: 'graphql',
  },
  {
    name: 'Laravel',
    icon: 'laravel',
  },
  {
    name: 'Lumen',
    icon: 'lumen',
  },
  {
    name: 'Node JS',
    icon: 'node',
  },
  {
    name: 'React JS',
    icon: 'react',
  },
  {
    name: 'Vue JS',
    icon: 'vue',
  },
  {
    name: 'Nuxt JS',
    icon: 'nuxt',
  },
  {
    name: 'jQuery',
    icon: 'jquery',
  },
  {
    name: 'Wordpress',
    icon: 'wordpress',
  },
  {
    name: 'Nginx',
    icon: 'nginx',
  },
  {
    name: 'Apache',
    icon: 'apache',
    width: 80,
  },
  {
    name: 'Postman',
    icon: 'postman',
  },
  {
    name: 'Docker',
    icon: 'docker',
  },
  {
    name: 'Git',
    icon: 'git',
  },
  {
    name: 'GitHub',
    icon: 'github',
  },
  {
    name: 'GitLab',
    icon: 'gitlab',
  },
  {
    name: 'Trello',
    icon: 'trello',
  },
  {
    name: 'Jira',
    icon: 'jira',
  },
  {
    name: 'Confluence',
    icon: 'confluence',
  },
  {
    name: 'MySQL',
    icon: 'mysql',
  },
  {
    name: 'MongoDB',
    icon: 'mongo',
    width: 120,
  },
  {
    name: 'Redis',
    icon: 'redis',
  },
  {
    name: 'Azure',
    icon: 'azure',
  },
  {
    name: 'AWS',
    icon: 'aws',
  },
  {
    name: 'GCP',
    icon: 'gcp',
    width: 70,
    height: 60,
  },
  {
    name: 'Power Apps',
    icon: 'powerapp',
  },
  {
    name: 'SharePoint ',
    icon: 'sharepoint',
  },
];

const experiences = [
  {
    title: 'Senior Full Stack Engineer (Dev Lead)',
    company_name: 'Tronweb Inc.',
    icon: 'ng',
    iconClassName: 'bg-blue-100',
    contract_type: 'Full Time',
    date: 'Nov 2020 - Present',
    website: 'https://tronweb.co',
    is_volunteer: false,
    location: 'Rivers, Nigeria (Remote)'
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Guardians Training',
    icon: 'uk',
    iconClassName: 'bg-blue-100',
    contract_type: 'Fixed-Term Contract',
    date: 'Mar 2023 - Oct 2023',
    website: 'https://guardianscorporate.co.uk',
    is_volunteer: false,
    location: 'London, UK (Hybrid)'
  },
  {
    title: 'Application Support Engineer',
    company_name: 'Techspecialist Consulting Limited',
    icon: 'ng',
    iconClassName: 'bg-blue-100',
    contract_type: 'Independent Contractor',
    date: 'Aug 2021 - Dec 2022',
    website: 'https://techspecialistlimited.com',
    is_volunteer: false,
    location: 'Abuja, Nigeria (Hybrid)'
  },
  {
    title: 'Back End Developer',
    company_name: 'Renaissance Payments, Inc.',
    icon: 'usa',
    iconClassName: 'bg-blue-100',
    contract_type: 'Independent Contractor',
    date: 'Nov 2021 - Jun 2022',
    website: 'https://renaissancepayments.com',
    is_volunteer: false,
    location: 'Dallax, Texas, United States (Remote)'
  },
  {
    title: 'Back End Developer',
    company_name: 'Bigly Sales',
    icon: 'usa',
    iconClassName: 'bg-blue-100',
    contract_type: 'Independent Contractor',
    date: 'Feb 2022 - Jul 2022',
    website: 'https://biglysales.com',
    is_volunteer: false,
    location: 'Miami, Florida, United States (Remote)'
  },
  {
    title: 'Full Stack Development and Data Structure Algorithm Tutor',
    company_name: 'Zuri Team Inc.',
    icon: 'usa',
    iconClassName: 'bg-blue-100',
    contract_type: 'Zero-Hours Contract',
    date: 'Mar 2021 - Jan 2023',
    website: 'https://zuri.team',
    is_volunteer: false,
    location: 'Dallax, Texas, United States (Remote)'
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Mesh Advertising & Design Studios',
    icon: 'ng',
    iconClassName: 'bg-blue-100',
    contract_type: 'Full Time',
    date: 'Jan 2019 - Nov 2020',
    website: 'http://meshadstudios.com',
    is_volunteer: false,
    location: 'Rivers, Nigeria (Remote)'
  },
  {
    title: 'Backend Developer',
    company_name: 'Primedsoft Limited',
    icon: 'ng',
    iconClassName: 'bg-blue-100',
    contract_type: 'Full Time',
    date: 'Jan 2018 - Dec 2018',
    website: 'https://primedsoft.com',
    is_volunteer: false,
    location: 'Rivers, Nigeria (Remote)'
  },
  {
    title: 'IT Support & Mentor',
    company_name: '100 Black Men of London',
    icon: 'uk',
    iconClassName: 'bg-blue-100',
    contract_type: 'Zero-Hours Contract',
    date: 'Mar 2023 - Present',
    website: 'https://100bmol.org.uk',
    is_volunteer: true,
    location: 'London, UK (Remote)'
  },
  {
    title: 'English Tutor',
    company_name: 'ENGin',
    icon: 'usa',
    iconClassName: 'bg-blue-100',
    contract_type: 'Zero-Hours Contract',
    date: 'Aug 2022 - Dec 2022',
    website: 'https://www.enginprogram.org',
    is_volunteer: true,
    location: 'Stamford, Connecticut, United States (Remote)'
  },
  {
    title: 'Full Stack Web Developer',
    company_name: 'OEC Foundation',
    icon: 'ng',
    iconClassName: 'bg-blue-100',
    contract_type: 'Zero-Hours Contract',
    date: 'Jan 2021 - Jun 2022',
    website: 'https://oecfoundations.org',
    is_volunteer: true,
    location: 'Abuja, Nigeria (Remote)'
  },
  {
    title: 'Media Assistant',
    company_name: 'TEDx Port Harcourt',
    icon: 'ng',
    iconClassName: 'bg-blue-100',
    contract_type: 'Zero-Hours Contract',
    date: 'Jan 2021 - Jun 2022',
    website: 'https://tedxportharcourt.com',
    is_volunteer: true,
    location: 'Abuja, Nigeria (Remote)'
  },
  {
    title: 'Jeremiah Iromaka Resume',
    company_name: 'Jeremiah-Iromaka-Resume',
    icon: 'resume',
    iconClassName: 'bg-primary',
    contract_type: 'Zero-Hours Contract',
    website: Resume,
    is_resume: true,
    location: 'View/Download My Resume'
  },
];

const projects = [
  // Agency AI
  {
    id: 'project-1',
    name: 'Agency AI',
    description: 'A 4-in-1 agency app utilizing artificial intelligence (AI) to set up and run agencies across various niches.',
    stack: ['PHP', 'Laravel', 'Vue.js', 'Nuxt.js', 'Headless UI', 'MySQL', 'OpenAI'],
    image: agencyai,
    demo: 'https://app.useagencyai.com',
    is_active: true,
  },

  // LMS - Guardians
  {
    id: 'project-2',
    name: 'LMS - Guardians Training',
    description: 'Learning Management System for delivery of educational courses and training programs.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Postman', 'Talwind', 'Alpine.js', 'Livewire'],
    image: guardianlms,
    demo: 'https://lms.guardianscorporate.co.uk',
    is_active: true,
  },

  // CRM - Guardians
  {
    id: 'project-3',
    name: 'CRM - Guardians Training',
    description: 'Customer Relationship Management Portal for managing & analyzing customer interactions.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Postman', 'Talwind', 'Alpine.js', 'Livewire'],
    image: guardiancrm,
    demo: 'https://crm.guardianscorporate.co.uk',
    is_active: true,
  },

  // SA360
  {
    id: 'project-4',
    name: 'Social Agency',
    description: 'Build and Grow digital agency business effortlessly',
    stack: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'GraphQL', 'Axios'],
    image: socialagency,
    demo: 'https://crm.guardianscorporate.co.uk',
    is_active: true,
  },

  // Marshal
  {
    id: 'project-5',
    name: 'Marshal',
    description: 'Achieve compliance in ADA, Web Accessibility, Web Securuity, Privacy, Local Business Compliance, etc.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'Axios'],
    image: marshal,
    demo: 'https://app.usemarshal.co',
    is_active: true,
  },

  // Agencyscale
  {
    id: 'project-6',
    name: 'AgencyScale',
    description: 'Agency Customer Relationship Management (CRM) Platform for managing multiple businessess.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Postman', 'Horizon', 'Echo-Server'],
    image: agencyscale,
    demo: 'https://app.getagencyscale.com',
    is_active: true,
  },

  // Pandoarx
  {
    id: 'project-7',
    name: 'PandoraX',
    description: 'Email marketing agency with loads of DFY assets & templates.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Nuxt.js', 'Axios'],
    image: pandorax,
    demo: 'https://app.getpandorax.com',
    is_active: false,
  },

  // NMRC
  {
    id: 'project-8',
    name: 'NMRC Website',
    tooltip: 'Nigeria Mortgage & Refinancing Commision (NMRC)',
    description: 'Company portfolio & blog website for Nigeria Mortgage Refinance Company.',
    stack: ['Wordpress', 'Nginx', 'MySQL'],
    image: nmrc,
    demo: 'http://nmrc.com.ng',
    is_active: true,
  },

  // HMIP
  {
    id: 'project-9',
    name: 'HMIP Website',
    tooltip: 'Housing Market Index Portal',
    description: 'Hoursing Market Index Portal for NMRC.',
    stack: ['Node.js', 'Vue.js', 'MongoDB', 'Express.js', 'jQuery', 'Ajax'],
    image: hmip,
    demo: 'https://hmip.nmrc.com.ng',
    is_active: true,
  },

  // DDRMP
  {
    id: 'project-10',
    name: 'Data Record Management Portal',
    description: 'Arrest record for the Federal Ministry of Justice (Nigeria) in partnership with British Council.',
    stack: ['Node.js', 'Vue.js', 'MongoDB'],
    image: placeholder,
    demo: 'http://fmojrecordofarrests.ng',
    is_active: false,
  },

  // Voices
  {
    id: 'project-11',
    name: 'Voices',
    description: 'A Progressive Web App for community engagement.',
    stack: ['Larave', 'PHP', 'MySQL', 'JavaScript', 'jQuery'],
    image: voices,
    demo: 'https://customerpay.me/',
    is_active: false,
  },

  // Customer Pay
  {
    id: 'project-12',
    name: 'CustomerPayMe',
    description: 'An easy to use web app that helps you record and track daily transactions, Send debt reminders and send offers to your customers.',
    stack: ['Laravel', 'PHP', 'MySQL'],
    image: customerpayme,
    demo: '',
    is_active: false,
  },

  // Seven Star Logistics
  {
    id: 'project-13',
    name: 'Sevenstar Logistics Website',
    description: 'Real-time tracking of shipments to provide customers with up-to-date information on the status and location of their packages.',
    stack: ['HTML/CSS', 'Bootstrap', 'Firebase'],
    image: sevenstar,
    demo: 'http://sevenstarlog.com.ng',
    is_active: false,
  },

  {
    id: 'project-14',
    name: 'Renaissance Innovation Labs',
    description: 'Company portfolio website.',
    stack: ['React.js', 'Docker'],
    image: placeholder,
    demo: 'https://www.renaissancelabs.org',
    is_active: false,
  },
  {
    id: 'project-15',
    name: 'Church Management Website',
    description: 'Church Management Website for member directories, online giving, event calendars, and volunteer management.',
    stack: ['Laravel', 'PHP', 'MySQL'],
    image: placeholder2,
    demo: '',
    is_active: false,
  },
];

export { services, techSkills, softSkills, experiences, projects };
