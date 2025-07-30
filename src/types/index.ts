export interface Skill {
    name: string
    category: "frontend" | "backend" | "tools"
  }
  
  export interface Project {
    title: string
    description: string
    tech: string[]
    github: string
    live: string
    image: string
  }
  
  export interface Experience {
    title: string
    company: string
    period: string
    description: string
    type: string
    location: string
  }
  
  export interface SocialLink {
    name: string
    href: string
    icon: any
  }
  
  export interface Stats {
    years: string
    projects: string
    clients: string
  }

  