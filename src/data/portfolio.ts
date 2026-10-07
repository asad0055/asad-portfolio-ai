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
    'Software Engineer with 7+ years of experience building web applications, specializing in frontend development with Vue.js, TypeScript and JavaScript. Experienced in taking ownership of frontend features from requirements to delivery, with a focus on responsive user experiences, data-driven interfaces and performance.',
  },

  skills: {
    frontend: [
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'React',
      'Angular',
    ],

    stateManagement: [
      'Pinia',
      'Vuex',
    ],

    backend: [
      'REST APIs',
      'PHP',
      'Laravel',
      'Node.js',
    ],

    platforms: [
      'WordPress',
      'HubSpot',
    ],

    database: [
      'PostgreSQL',
    ],

    devOps: [
      'Git',
      'GitHub',
      'Docker',
      'CI/CD',
    ],

    engineering: [
      'Code Reviews',
      'Pull Requests',
      'Testing & Debugging',
      'Responsive Development',
      'Frontend Performance',
      'Agile Team Collaboration',
    ],
  },

  experience: [
    {
      company: 'Fyr Technology AS',
      role: 'Senior Frontend Developer',
      location: 'Norway',
      period: 'June 2023 – Present',
      description:
        'Working on a production SaaS marketing analytics platform, with a strong focus on building data-driven frontend experiences using Vue.js and TypeScript. I take ownership of frontend features from understanding requirements and shaping solutions through implementation, testing and delivery.',
      highlights: [
        'Built and improved data-driven dashboards, reusable widgets, interactive tables and visualization components.',
        'Developed multi-tab dashboard functionality that allows users to organize widgets across multiple configurable tabs.',
        'Improved dashboard performance through optimized data loading, lazy/infinite loading, fewer unnecessary API requests and more efficient auto-save behavior.',
        'Review pull requests and test across different scenarios to identify issues and edge cases before release.',
      ],
    },
    {
      company: 'Computan · Getgroup · Traxim Technology · Technology Wisdom',
      role: 'Web & Frontend Developer',
      location: 'Pakistan',
      period: '2017 – 2022',
      description:
        'Progressed through web and frontend development roles across multiple software companies, working on client websites, CMS platforms and larger web applications using JavaScript, Angular, React, WordPress and HubSpot.',
      highlights: [
        'Built responsive HubSpot websites from provided templates and custom designs, integrating frontend implementations with CMS functionality.',
        'Worked extensively on the SocioOn social platform, developing frontend functionality across feeds, posts, profiles, comments, settings and responsive interfaces.',
        'Built WordPress websites from scratch, including e-commerce, blog, SEO and performance-related functionality.',
        'Progressed into a team lead role at Traxim Technology, leading a four-person team and helping train junior developers.',
      ],
    },
  ],

  projects: [
    {
      name: 'Fish Farm Inventory Management System',
      location: 'Norway',
      duration: '4-month project',
      description:
        'Independently developed the complete frontend of a web-based inventory management system designed to centralize registration and operational data across 100+ fish farms.',
      highlights: [
        'Built the frontend from the ground up using Vue.js, including authentication, user registration, summary views and large data tables.',
        'Implemented CRUD workflows and REST API integrations for managing farm, feed and fish-related information.',
        'Worked directly with the client to understand requirements, explore UI layouts and adapt the solution as requirements changed.',
        'Delivered the complete frontend within four months, replacing manual data handling with a centralized digital workflow.',
      ],
      technologies: [
        'Vue.js',
        'REST APIs',
        'CRUD',
        'Data Tables',
        'Responsive UI',
      ],
    },
    {
      name: 'SocioOn — Social Media Platform',
      location: 'Pakistan',
      duration: 'Long-term product development',
      description:
        'Worked extensively on the frontend of a large social media platform, developing and improving user-facing functionality across core areas of the product.',
      highlights: [
        'Developed frontend functionality for news feeds, posts, profiles, settings, sidebars and responsive mobile interfaces.',
        'Built and improved social interactions including likes, comments and nested reply experiences.',
        'Worked within a large existing application, extending functionality while maintaining compatibility with existing features.',
        'Collaborated with backend developers to integrate frontend functionality and support feature delivery.',
      ],
      technologies: [
        'JavaScript',
        'Angular',
        'Responsive UI',
        'Frontend Development',
      ],
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