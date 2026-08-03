import {
  Award,
  Bot,
  BrainCircuit,
  Briefcase,
  Building2,
  CheckCircle2,
  Cloud,
  Code,
  Database,
  FileText,
  GraduationCap,
  Layers,
  MapPin,
  Mic,
  MonitorSmartphone,
  Network,
  Sparkles,
  Trophy,
  Users,
  Workflow,
} from "lucide-react";

export const personalInfo = {
  name: "Mohammed Shakib",
  logoText: "Mohammed Shakib",
  monogram: "MS",
  primaryTitle: "Junior Developer & Software Engineering Student",
  shortTitle: "Junior Full-Stack Developer | Software Engineering Student",
  heroEyebrow: "JUNIOR DEVELOPER · SOFTWARE ENGINEERING STUDENT",
  heroHeading: "Hi, I’m Mohammed Shakib —\na Junior Full-Stack Developer",
  heroSupportingText:
    "I’m a Software Engineering student at United International University and a Junior Developer at Royal Bengal AI. I work with React.js, Express.js, APIs, databases, testing, and deployment across real-world web and AI-enabled projects.",
  location: "Dhaka, Bangladesh",
  availability: "Available for junior developer roles and internship opportunities",
  workPreference: "Hybrid or remote collaboration",
  email: "mohammedshakib5320@gmail.com",
  phone: "+880 1874-126156",
  github: "https://github.com/MohammedShakib",
  linkedin: "https://linkedin.com/in/mohammed-shakib-omee",
  cvLink: "/assets/documents/Mohammed_Shakib_CV.pdf",
};

export const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroFeatures = [
  {
    title: "Current Role",
    description: "Junior Developer at Royal Bengal AI",
    icon: Briefcase,
  },
  {
    title: "Main Stack",
    description: "React.js · Express.js · Supabase",
    icon: Layers,
  },
  {
    title: "Based In",
    description: "Dhaka, Bangladesh",
    icon: MapPin,
  },
];

export const aboutMeInfo = {
  intro:
    "I am a motivated Software Engineering student at United International University with professional experience as a Junior Developer at Royal Bengal AI. I have hands-on experience building, testing, deploying and maintaining full-stack web applications and AI-enabled products.",
  additional:
    "My work includes feature implementation, API integration, debugging, testing and deployment. I am particularly interested in full-stack development, automation and user-focused AI-enabled product work.",
  blocks: [
    { label: "Current Position", value: "Junior Developer at Royal Bengal AI", icon: Briefcase },
    {
      label: "Education",
      value: "B.Sc. in Software Engineering at United International University",
      icon: GraduationCap,
    },
    { label: "Technical Focus", value: "Full-Stack Development and AI-Enabled Products", icon: Code },
    { label: "Current Practice", value: "APIs, databases, testing and deployment", icon: Sparkles },
  ],
};

export const whatIDo = [
  {
    title: "Full-Stack Web Development",
    description:
      "Build responsive web applications using React.js, JavaScript, Tailwind CSS, Node.js and Express.js.",
    icon: MonitorSmartphone,
  },
  {
    title: "AI-Enabled Product Development",
    description:
      "Contribute to intelligent web products featuring automated workflows, dashboards, content generation and user-focused AI functionality.",
    icon: BrainCircuit,
  },
  {
    title: "Automation and Bot Development",
    description:
      "Develop automated systems and bot-based workflows for content management, marketing and product-image generation.",
    icon: Bot,
  },
  {
    title: "Testing and Deployment",
    description:
      "Work on API integration, debugging, functional testing, deployment and production maintenance using GitHub, Railway, Supabase and Firebase.",
    icon: CheckCircle2,
  },
];

export const professionalStats = [
  { label: "Portfolio Projects", value: "9" },
  { label: "AI-Enabled Projects", value: "5" },
  { label: "Professional Roles", value: "3" },
  { label: "Awards & Activities", value: "4" },
];

export const technicalExpertise = [
  {
    title: "Programming Languages",
    description: "Python, Java, JavaScript, C, SQL and NoSQL",
    icon: Code,
    logos: ["javascript", "python", "java"],
  },
  {
    title: "Frontend Development",
    description: "React.js, HTML5, CSS3 and Tailwind CSS",
    icon: MonitorSmartphone,
    logos: ["react", "tailwindcss"],
  },
  {
    title: "Backend Development",
    description: "Node.js, Express.js, Spring Boot and REST APIs",
    icon: Cloud,
    logos: ["nodejs", "express", "springboot"],
  },
  {
    title: "Automation and APIs",
    description: "Telegram Bot API, API integration and automated workflows",
    icon: Workflow,
  },
  {
    title: "Databases and Services",
    description: "Supabase, Google Firebase and Redis",
    icon: Database,
    logos: ["supabase", "firebase", "redis"],
  },
  {
    title: "Deployment and DevOps Tools",
    description: "Railway, Docker, Git and GitHub",
    icon: Network,
    logos: ["railway", "docker", "github"],
  },
  {
    title: "Software Testing",
    description: "Debugging, feature testing and workflow validation",
    icon: CheckCircle2,
  },
  {
    title: "Design and Documentation",
    description: "Canva, Microsoft Word, PowerPoint and Excel",
    icon: FileText,
  },
  {
    title: "Professional Skills",
    description: "Leadership, communication, presentation, teamwork, problem-solving and time management",
    icon: Users,
  },
];

export const featuredProjects = [
  {
    title: "Prachar AI",
    category: "AI-Powered Social Media Automation",
    description:
      "A social media automation platform that helps teams generate, organise, schedule and manage content across connected channels.",
    tags: ["React.js", "Express.js", "Redis", "Supabase", "Railway"],
    image: "/assets/projects/prachar-ai-preview.svg",
    logo: "/assets/logos/prachar-ai.svg",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "AdReady",
    category: "Telegram-Based Product Image Creation",
    description:
      "A Telegram bot-based product image creation workflow that converts product information into marketing-ready visual assets.",
    tags: ["React.js", "Express.js", "Telegram Bot API", "Supabase"],
    image: "/assets/projects/adready-preview.svg",
    logo: "/assets/logos/adready.svg",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "Campus Twin",
    category: "Real-Time Smart Campus Digital Twin",
    description:
      "A real-time smart campus platform for monitoring classrooms, attendance, transportation, events, parking and emergency activities.",
    tags: ["React.js", "Express.js", "Redis", "Supabase", "Railway"],
    image: "/assets/projects/campus-twin-preview.svg",
    logo: "/assets/logos/campus-twin.svg",
    githubLink: "",
    liveLink: "",
  },
];

export const otherProjects = [
  {
    title: "The Multimodal Track",
    description: "A unified web platform for managing text, image and related multimodal workflows.",
    tags: ["React.js", "Express.js", "Firebase", "Railway"],
    logo: "/assets/logos/multimodal-track.svg",
  },
  {
    title: "MindSense AI",
    description:
      "An AI-powered web application featuring interactive dashboards, structured workflows and user-focused intelligent insights.",
    tags: ["React.js", "Express.js", "Redis", "Supabase"],
    logo: "/assets/logos/mindsense-ai.svg",
  },
  {
    title: "Parking Lagbe",
    description: "A responsive web application for finding and booking available parking spaces.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React.js"],
    logo: "/assets/logos/parking-lagbe.svg",
  },
  {
    title: "CGPA Calculator",
    description:
      "A responsive client-side application that allows students to calculate their CGPA accurately through a simple interface.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    logo: "/assets/logos/cgpa-calculator.svg",
  },
  {
    title: "Book Management System",
    description: "A full-stack inventory management application featuring RESTful APIs and a structured Java backend.",
    tags: ["Java", "Spring Boot"],
    logo: "/assets/logos/book-management.svg",
  },
  {
    title: "Bara Koto?",
    description:
      "A React-based real-time bus fare estimation tool designed to simplify public transportation planning.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React.js"],
    logo: "/assets/logos/bara-koto.svg",
  },
];

export const learningJourney = [
  {
    period: "October 2025 - Present",
    title: "Junior Developer",
    company: "Royal Bengal AI",
    logo: "/assets/logos/royal-bengal-ai.svg",
    bullets: [
      "Develop and maintain AI-enabled web applications using React.js, Express.js, Redis, Supabase, Firebase and Railway.",
      "Contribute to Prachar AI, AdReady, The Multimodal Track, MindSense AI and Campus Twin.",
      "Work with the product team on implementation, API integration, debugging, testing and deployment.",
    ],
  },
  {
    period: "May 2025 - September 2025",
    title: "Content Writer Intern",
    company: "Privatune",
    logo: "/assets/logos/privatune.svg",
    bullets: [
      "Designed book layouts and diagrams for readers.",
      "Created academic content for students and general audiences.",
      "Contributed to improved content presentation and design quality.",
    ],
  },
  {
    period: "March 2023 - May 2025",
    title: "Content Writer",
    company: "B For Binary",
    logo: "/assets/logos/b-for-binary.svg",
    bullets: [
      "Developed educational assessment materials.",
      "Prepared multiple-choice and short-answer question sets.",
      "Supported reader comprehension through structured academic content.",
    ],
  },
];

export const educationList = [
  {
    degree: "B.Sc. in Software Engineering",
    institution: "United International University",
    logo: "/assets/logos/uiu.svg",
    location: "Dhaka, Bangladesh",
    date: "February 2022 - Present",
    expectedGraduation: "June 2026",
    cgpa: "2.40 / 4.00",
    status: "Undergraduate",
  },
  {
    degree: "Higher Secondary Certificate - HSC",
    institution: "Shaheed Police Smrity College",
    logo: "/assets/logos/spsc.svg",
    batch: "2020",
    cgpa: "5.00 / 5.00",
    status: "Completed",
  },
  {
    degree: "Secondary School Certificate - SSC",
    institution: "Monipur High School",
    logo: "/assets/logos/mhs.svg",
    batch: "2018",
    cgpa: "5.00 / 5.00",
    status: "Completed",
  },
];

export const certifications = [
  {
    title: "Champion Award",
    description: "Champion in the Electronics Lab at CSE Project Show, 2024",
    icon: Trophy,
  },
  {
    title: "CSE Project Show",
    description: "Participant, 2025",
    icon: Award,
  },
  {
    title: "Speak with Impact",
    description: "Completed Speak with Impact: Mastering Professional Communication, 2025",
    icon: Mic,
  },
  {
    title: "Entreprenexus",
    description: "Participated in Entreprenexus - Turning People Management into Business Strategy, 2025",
    icon: Building2,
  },
];

export const leadershipAndExtracurricular = [
  {
    role: "Member",
    organisation: "UIU Photography Club",
    logo: "/assets/logos/uiu-photography-club.svg",
    date: "December 2022 - Present",
    description: "Participate in photography workshops, club events and group discussions.",
  },
];

export const professionalStatement = {
  heading: "My Development Approach",
  statement:
    "I approach development by first understanding the user’s problem, then translating it into a clear workflow and maintainable product structure. My work involves interface implementation, API integration, testing, debugging, and continuous product improvement.",
  secondaryLine:
    "Through my work at Royal Bengal AI, I have gained practical experience contributing to AI-enabled applications, automation systems and production-focused web platforms.",
};

export const techStripLogos = [
  { name: "React.js", logo: "react" },
  { name: "JavaScript", logo: "javascript" },
  { name: "Node.js", logo: "nodejs" },
  { name: "Express.js", logo: "express" },
  { name: "Spring Boot", logo: "springboot" },
  { name: "Python", logo: "python" },
  { name: "Supabase", logo: "supabase" },
  { name: "Firebase", logo: "firebase" },
  { name: "Redis", logo: "redis" },
  { name: "Docker", logo: "docker" },
  { name: "Railway", logo: "railway" },
  { name: "GitHub", logo: "github" },
];

export const contactOptions = [
  "Junior Developer Opportunity",
  "Software Engineering Internship",
  "Full-Stack Development",
  "Project Collaboration",
  "Freelance Project",
  "General Message",
];
