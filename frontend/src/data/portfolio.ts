// Centralized portfolio content. Update this file when personal details change.
export type PersonalInfo = {
  name: string;
  displayName: string;
  title: string;
  shortTitle: string;
  company: string;
  organization: string;
  location: string;
  experience: string;
  email: string;
  githubUsername: string;
  headline: string;
  heroHeadline: string;
  summary: string;
  photoUrl: string;
  resumeUrl: string | null;
};

export const personalInfo: PersonalInfo = {
  name: "Vikas Gupta",
  displayName: "VIKAS GUPTA",
  title: "Forward Deployment Engineer I (AI Developer)",
  shortTitle: "Forward Deployment Engineer | AI Developer",
  company: "HCLTech",
  organization: "OpenAI Adoption CoE – CTO & Ecosystem",
  location: "Lucknow, Uttar Pradesh, India",
  experience: "3+ Years",
  email: "vikasgupta945431@gmail.com",
  githubUsername: "vikasgupta37",
  photoUrl: "/images/vikas-gupta.jpg",
  resumeUrl: "/Vikas_Gupta_Resume.pdf",
  headline:
    "Forward Deployment Engineer (AI Developer) | OpenAI Adoption CoE | Agentic AI | Generative AI | LLMs | RAG | AI Automation | Python | Codex | Azure AI",
  heroHeadline:
    "Building Intelligent AI Agents, Enterprise Automation & Next-Generation AI Solutions.",
  summary:
    "I am an AI Developer and Forward Deployment Engineer at HCLTech, working within the OpenAI Adoption CoE. I specialize in Agentic AI, Generative AI, Large Language Models, Retrieval-Augmented Generation (RAG), intelligent automation, multi-agent systems, and enterprise AI adoption.\n\nI have 3+ years of professional experience in software engineering, automation, application packaging, deployment, and AI-powered solution development. Currently, I focus on enterprise AI adoption, ChatGPT Enterprise, OpenAI Codex, API integrations, AI-assisted workflows, and building intelligent automation solutions.\n\nI enjoy experimenting with emerging technologies and transforming ideas into practical AI-powered applications. My goal is to build intelligent systems that solve real-world business problems and accelerate enterprise AI transformation.",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vikasgupta8924/",
    icon: "linkedin",
  },
  { name: "GitHub", url: "https://github.com/vikasgupta37", icon: "github" },
  {
    name: "Credly",
    url: "https://www.credly.com/users/vikas.gupta47",
    icon: "credly",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vikas.gupta9517",
    icon: "instagram",
  },
  { name: "X", url: "https://x.com/Vikasi37", icon: "x" },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@vikas_academy89",
    icon: "youtube",
  },
];

export const siteConfig = {
  sections: {
    showHero: true,
    showAbout: true,
    showExperience: true,
    showSkills: true,
    showProjects: true,
    showGitHub: true,
    showCertifications: true,
    showAchievements: true,
    showEducation: true,
    showTimeline: true,
    showContact: true,
  },
  navigationItems: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "recognition", label: "Recognition" },
    { id: "contact", label: "Contact" },
  ],
};

export type ExperienceItem = {
  role: string;
  company: string;
  organization?: string;
  status: string;
  period: string;
  employmentType: string;
  workMode: string;
  summary?: string;
  focus: string[];
  roleSkills?: string[];
  additionalSkills?: number;
};

export const experience: ExperienceItem[] = [
  {
    role: "Forward Deployment Engineer I (AI Developer)",
    company: "HCLTech",
    organization: "OpenAI Adoption CoE – CTO & Ecosystem",
    status: "Current role",
    period: "Nov 2026 – Present",
    employmentType: "Full-time",
    workMode: "Remote",
    summary: "Exploring Agentic AI, RAG, MCP, and multi-agent architectures to solve real-world business problems.",
    focus: [
      "Working with OpenAI technologies, ChatGPT Enterprise, Codex, and AI-powered automation.",
    ],
    roleSkills: ["Agentic AI Development", "Generative AI"],
    additionalSkills: 5,
  },
  {
    role: "AI Engineer",
    company: "HCLTech",
    status: "Previous role",
    period: "Apr 2026 – Nov 2026",
    employmentType: "Full-time",
    workMode: "Hybrid",
    summary: "Built AI Agents using LLMs, Python and enterprise APIs.",
    focus: [
      "Developed Generative AI solutions with Amazon Bedrock, Gemini, and Azure AI.",
    ],
    roleSkills: ["Prompt Engineering", "Python"],
    additionalSkills: 17,
  },
  {
    role: "Senior Software Analyst",
    company: "HCLTech",
    status: "Previous role",
    period: "Jun 2025 – Mar 2026",
    employmentType: "Full-time",
    workMode: "Hybrid",
    summary:
      "Supported Application Packaging Factory (APF) operations by developing, automating, and deploying enterprise application packages to improve deployment efficiency, standardization, and end-user experience.",
    focus: [],
    roleSkills: ["Application Packaging", "Automation"],
    additionalSkills: 8,
  },
  {
    role: "Software Analyst",
    company: "HCLTech",
    status: "Previous role",
    period: "Jan 2024 – May 2025",
    employmentType: "Full-time",
    workMode: "Hybrid",
    summary:
      "After completing my 12 months training in HCL Technologies, I started my first full-time role at HCL on 1 Jan 2024.",
    focus: [],
    roleSkills: ["Microsoft Intune", "MDM"],
    additionalSkills: 3,
  },
  {
    role: "Project Intern",
    company: "HCLTech",
    status: "Previous role",
    period: "Jul 2023 – Dec 2023",
    employmentType: "Internship",
    workMode: "Hybrid",
    focus: [],
  },
  {
    role: "Trainee",
    company: "HCLTech",
    status: "Previous role",
    period: "Jan 2023 – Jun 2023",
    employmentType: "Apprenticeship",
    workMode: "Remote",
    focus: [
      "Learned about basics and advanced concepts of Operating Systems.",
      "Learned about Office 365, Exchange Server, and SharePoint.",
    ],
    roleSkills: ["Cmd", "ADFS"],
    additionalSkills: 16,
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Amity University",
    detail: "Education dates and additional details were not provided.",
  },
];

export type SkillGroup = {
  category: string;
  icon: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Programming & Development",
    icon: "code",
    items: ["Python", "PowerShell", "TypeScript", "JavaScript", "GitHub", "Docker"],
  },
  {
    category: "Artificial Intelligence & Machine Learning",
    icon: "ai",
    items: [
      "Generative AI",
      "Large Language Models (LLMs)",
      "Agentic AI",
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases",
      "Multi-Agent Systems",
      "Model Context Protocol (MCP)",
      "Agent Development Kit (ADK)",
    ],
  },
  {
    category: "OpenAI Ecosystem",
    icon: "openai",
    items: [
      "ChatGPT Enterprise",
      "OpenAI APIs",
      "Codex",
      "AI Agents",
      "Agentic Workflows",
    ],
  },
  {
    category: "Cloud Platforms",
    icon: "cloud",
    items: [
      "Microsoft Azure",
      "Azure AI",
      "Amazon Web Services",
      "Amazon Bedrock",
      "Google Cloud Platform",
    ],
  },
  {
    category: "Automation",
    icon: "automation",
    items: ["n8n", "Zapier", "UiPath", "Automation Anywhere", "Power Automate"],
  },
  {
    category: "Microsoft Ecosystem",
    icon: "microsoft",
    items: [
      "Microsoft Intune",
      "SCCM",
      "Microsoft Graph API",
      "Power Apps",
      "Power BI",
      "Copilot Studio",
    ],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["PostgreSQL", "Vector Databases"],
  },
  {
    category: "AI Development Tools",
    icon: "tools",
    items: ["OpenAI Codex", "Antigravity", "Kiro", "GitHub Copilot"],
  },
];

export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  description: string;
  achievement?: string;
  recognition?: string;
  goal?: string;
  technologies?: string[];
  integrations?: string[];
  proposedAgents?: string[];
  features?: string[];
  repositoryUrl: string | null;
  repositoryNote: string;
};

export const projects: Project[] = [
  {
    id: "swarma",
    number: "01",
    title: "SWARMA",
    subtitle: "AI Crowd Intelligence Platform",
    category: "Agentic AI / Generative AI",
    status: "Status not specified",
    description:
      "An AI-powered crowd intelligence and crowd management platform designed to support crowd monitoring, intelligent insights, and better decision-making.",
    achievement:
      "Global Top 10 Finalist — HCLTech × OpenAI Global Agentic AI Hackathon",
    recognition:
      "Selected among the Top 10 finalists from 5,000+ participants and 500+ solution submissions.",
    technologies: ["Python", "Generative AI", "Agentic AI", "LLMs", "AI Automation"],
    repositoryUrl: null,
    repositoryNote: "Repository URL to be added",
  },
  {
    id: "apad",
    number: "02",
    title: "APAD / APDA",
    subtitle: "AI Packaging & Deployment Automation",
    category: "Enterprise AI / Intelligent Automation",
    status: "Proposed multi-agent architecture",
    description:
      "An AI-powered application packaging and deployment automation platform designed to streamline application lifecycle management.",
    goal:
      "Automate application analysis, packaging, deployment, monitoring, troubleshooting, and remediation.",
    proposedAgents: [
      "Analyzer Agent",
      "Source Validation Agent",
      "Packaging Agent",
      "Deployment Agent",
      "Monitoring Agent",
      "Troubleshooter Agent",
      "Auto-Remediation Agent",
      "Memory and Learning Engine",
    ],
    integrations: [
      "Microsoft Intune",
      "SCCM",
      "Microsoft Graph API",
      "PowerShell",
      "MCP Server",
    ],
    repositoryUrl: null,
    repositoryNote: "Repository URL to be added",
  },
  {
    id: "eventunity",
    number: "03",
    title: "EventUnity",
    subtitle: "GenAI Event Planning Assistant",
    category: "Generative AI",
    status: "Status not specified",
    description:
      "A Generative AI-powered event planning assistant designed to simplify event organization.",
    features: [
      "AI-powered event planning",
      "Intelligent recommendations",
      "Automated planning workflows",
      "Generative AI assistance",
    ],
    technologies: [],
    repositoryUrl: null,
    repositoryNote: "Repository URL to be added",
  },
  {
    id: "vikas-agent",
    number: "04",
    title: "Vikas AI Agent",
    subtitle: "Personal AI Assistant",
    category: "AI Automation",
    status: "Status not specified",
    description:
      "A personal AI assistant powered by APIs and n8n automation workflows.",
    features: [
      "AI agent development",
      "API integrations",
      "Workflow automation",
      "Intelligent task execution",
    ],
    technologies: ["APIs", "n8n"],
    repositoryUrl: null,
    repositoryNote: "Repository URL to be added",
  },
];

export type Certification = {
  id: string;
  issuer: string;
  name: string;
  code: string | null;
  category: string;
  verificationUrl: string | null;
  badgeImage: string | null;
  placeholder?: boolean;
};

export const certifications: Certification[] = [
  {
    id: "ai-103",
    issuer: "Microsoft",
    name: "Azure AI Apps and Agents Developer Associate",
    code: "AI-103",
    category: "Artificial Intelligence",
    verificationUrl: null,
    badgeImage: null,
  },
  {
    id: "gh-300",
    issuer: "Microsoft",
    name: "GitHub Copilot",
    code: "GH-300",
    category: "Developer Tools",
    verificationUrl: null,
    badgeImage: null,
  },
  {
    id: "md-102",
    issuer: "Microsoft",
    name: "Microsoft 365 Endpoint Administrator",
    code: "MD-102",
    category: "Endpoint Management",
    verificationUrl: null,
    badgeImage: null,
  },
  {
    id: "microsoft-additional-1",
    issuer: "Microsoft",
    name: "Certification details to be added",
    code: null,
    category: "Microsoft Certification",
    verificationUrl: null,
    badgeImage: null,
    placeholder: true,
  },
  {
    id: "microsoft-additional-2",
    issuer: "Microsoft",
    name: "Certification details to be added",
    code: null,
    category: "Microsoft Certification",
    verificationUrl: null,
    badgeImage: null,
    placeholder: true,
  },
  {
    id: "aws-ai-practitioner",
    issuer: "Amazon Web Services",
    name: "AWS Certified AI Practitioner",
    code: "AIF-C01",
    category: "Artificial Intelligence",
    verificationUrl: null,
    badgeImage: null,
  },
  {
    id: "google-associate-cloud-engineer",
    issuer: "Google Cloud",
    name: "Associate Cloud Engineer",
    code: null,
    category: "Cloud",
    verificationUrl: null,
    badgeImage: null,
  },
];

export const achievements = [
  {
    title: "Global Top 10 Finalist",
    organization: "HCLTech × OpenAI Global Agentic AI Hackathon",
    detail:
      "Selected among the Top 10 finalists from 5,000+ participants and 500+ solution submissions.",
    icon: "trophy",
    featured: true,
  },
  {
    title: "SWARMA Project Recognition",
    organization: "Global Agentic AI Hackathon",
    detail: "Recognition associated with the SWARMA crowd intelligence platform.",
    icon: "sparkles",
  },
  {
    title: "APL ScaleTech Hackathon",
    organization: "Participation",
    detail: null,
    icon: "code",
  },
  {
    title: "Agentic AI Hackathon",
    organization: "Participation",
    detail: null,
    icon: "bot",
  },
  {
    title: "DFS Hackathon",
    organization: "Participation",
    detail: null,
    icon: "layers",
  },
  {
    title: "Forward Deployment Engineer — AI Developer",
    organization: "Selected for the role at HCLTech",
    detail: null,
    icon: "briefcase",
  },
  {
    title: "HCLTech Supercharged Ambassador",
    organization: "HCLTech",
    detail: null,
    icon: "zap",
  },
  {
    title: "5× Microsoft Certified",
    organization: "Microsoft certifications",
    detail: "Achievement count supplied by Vikas; it is not an additional certification.",
    icon: "award",
    featured: true,
  },
];

export type CareerTimelineItem = {
  title: string;
  organization: string;
  period: string;
  detail?: string;
};

export const careerTimeline: CareerTimelineItem[] = [
  {
    title: "Forward Deployment Engineer I (AI Developer)",
    organization: "HCLTech · OpenAI Adoption CoE – CTO & Ecosystem",
    period: "Nov 2026 – Present",
    detail: "Exploring Agentic AI, RAG, MCP, and multi-agent architectures.",
  },
  {
    title: "AI Engineer",
    organization: "HCLTech",
    period: "Apr 2026 – Nov 2026",
    detail: "Built AI agents and Generative AI solutions using enterprise APIs and cloud AI platforms.",
  },
  {
    title: "Senior Software Analyst",
    organization: "HCLTech",
    period: "Jun 2025 – Mar 2026",
    detail: "Application Packaging Factory operations and enterprise application deployment.",
  },
  {
    title: "Software Analyst",
    organization: "HCLTech",
    period: "Jan 2024 – May 2025",
    detail: "Started a full-time role after completing 12 months of training.",
  },
  {
    title: "Project Intern",
    organization: "HCLTech · Internship",
    period: "Jul 2023 – Dec 2023",
  },
  {
    title: "Trainee",
    organization: "HCLTech · Apprenticeship",
    period: "Jan 2023 – Jun 2023",
    detail: "Training in Operating Systems, Office 365, Exchange Server, and SharePoint.",
  },
];

// Compatibility exports for older components; unsupported sample data is omitted.
export const openSourceRepos = [];
export const contributions = [];
export const testimonials = [];
