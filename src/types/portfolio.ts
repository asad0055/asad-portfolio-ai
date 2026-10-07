export interface Experience {
  company: string
  role: string
  location: string
  period: string
  description: string
  highlights?: string[]
}

export interface Project {
  name: string
  location: string
  duration: string
  description: string
  highlights?: string[]
  technologies: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
}

export interface Certification {
  name: string
  organization: string
  year: string
}

export interface Portfolio {
  profile: {
    name: string
    title: string
    specialization: string
    location: string
    email: string
    linkedin: string
    summary: string
  }

  skills: {
    frontend: string[]
    stateManagement: string[]
    backend: string[]
    platforms: string[]
    database: string[]
    devOps: string[]
    engineering: string[]
  }

  experience: Experience[]
  projects: Project[]
  education: Education[]
  certifications: Certification[]
}