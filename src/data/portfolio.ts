import type { Portfolio } from '../types/portfolio'

export const portfolio: Portfolio = {
  profile: {
    name: 'Asad Ur Rehman',
    title: 'Software Engineer',
    specialization: 'Frontend Development',
    location: 'Norway',
    email: 'asad_0055@hotmail.com',
    linkedin: 'https://linkedin.com/in/asad-rehman-dev/',
    summary:
      'Software Engineer with 7+ years of professional experience building web applications, with a strong focus on frontend development using Vue.js, TypeScript and JavaScript. Experienced in independently delivering complex frontend solutions, from complete CRUD-based systems to data-driven SaaS dashboards with interactive tables and visualizations.',
  },

  skills: {
    frontend: [
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'React',
      'Angular',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
    stateManagement: ['Pinia', 'Vuex'],
    backend: ['REST APIs', 'PHP', 'Laravel', 'Node.js'],
    platforms: ['WordPress', 'HubSpot'],
    database: ['PostgreSQL'],
    devOps: ['Git', 'GitHub', 'Docker', 'CI/CD'],
    collaboration: [
      'Figma',
      'Code Reviews',
      'Pull Requests',
      'Agile Team Collaboration',
    ],
  },

  experience: [
    {
      company: 'Fyr Technology AS',
      role: 'Senior Software Developer',
      location: 'Norway',
      period: 'June 2023 – Present',
      description:
        'Contribute to a production SaaS marketing analytics platform that enables customers to organize, visualize and analyze marketing performance data across interactive dashboards and widgets.',
    },
    {
      company: 'Various Software & Technology Companies',
      role: 'Web & Frontend Developer',
      location: 'Pakistan',
      period: '2017 – 2022',
      description:
        'Worked in project-based software development environments, delivering web solutions using JavaScript, PHP/Laravel, WordPress and HubSpot across different industries.',
    },
  ],

  projects: [
    {
      name: 'Fish Farm Inventory Management System',
      location: 'Norway',
      duration: '4-month project',
      description:
        'Independently developed the complete frontend for a web-based inventory management solution used to manage operational and inventory data for Norwegian fish farms.',
      technologies: ['Vue.js', 'REST APIs', 'CRUD', 'Data Tables'],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      institution: 'Institute of Management Sciences',
      period: '2011 – 2016',
    },
  ],

  certifications: [
    {
      name: 'AI Literacy Fundamentals — 1 ECTS',
      organization:
        'Microsoft & Kajaani University of Applied Sciences',
      year: '2026',
    },
    {
      name: 'Microsoft Learn — AI & Azure Learning',
      organization: 'Microsoft',
      year: '2026',
    },
  ],
}