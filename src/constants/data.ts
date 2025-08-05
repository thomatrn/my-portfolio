import { Github, Linkedin, Mail } from "lucide-react"
import type { Project, Experience, SocialLink, Stats } from "@/types"

export const stats: Stats = {
  years: "5+",
  projects: "20+",
  clients: "10+",
}

export const skills = {
  frontend: ["React", "Next.js", "Angular", "React Native", "Tailwind CSS"],
  backend: ["Express", "NestJS", "Django", "Springboot", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Github Actions", "Jenkins", "Docker", "AWS", "Kubernetes", "Ansible"],
}

export const projects: Project[] = [
  {
    title: "Pentest AI",
    description: "Automatic tool for pentester",
    tech: ["C++", "ReactTS","Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/PentestAI",
    live: "https://pentest-ai.fr",
    image: "/pentest-ai.png",
  },
  {
    title: "Area",
    description: "Web & Mobile application that automates tasks like Zappier. Compatible with Google, Discord, X, Github, etc.",
    tech: ["VueJS", "React Natvie", "Go", "PostgreSQL", "GRPC"],
    github: "#",
    live: "",
    image: "/area.png",
  },
]

export const experience: Experience[] = [
  {
    title: "Full Stack & DevOPS Enginner",
    company: "Freelance",
    period: "sept 2024 - feb 2025",
    description:
      "I have assisted several clients in the design, development, and deployment of robust and scalable web solutions. My role covered the entire application lifecycle: from software architecture to frontend/backend development, including the implementation of CI/CD pipelines."
,    type: "Full-time",
    location: "Remote",
  },
  {
    title: "Technical Assistant",
    company: "Epitech PARIS",
    period: "sept 2023 - jun 2024",
    description:
      "Assist lower-year students with their projects and technical concepts in C and C++. Also supervise various activities, oral presentations, and project grading.",
    type: "Part-Time",
    location: "Le Kremlin-Bicêtre, FR",
  },
  {
    title: "Full Stack Developer",
    company: "Banque de France",
    period: "july 2022 - dec 2022",
    description: "Develop and maintain the bank's software factory's in-house applications. Implement unit tests, Ansible deployment scripts, and Kubernetes.",
    type: "Internship",
    location: "Paris, FR",
  },
]

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/thomatrn",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tran-thomas-dev/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:contact@thomas-tran.fr",
    icon: Mail,
  },
]

export const currentTech = ["React", "Next.js", "NestJS", "TypeScript", "Java", "Springboot", "Docker", "Kubernetes"]
