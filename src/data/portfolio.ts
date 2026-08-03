import {
  Code,
  Database,
  BrainCircuit,
  TestTube,
  Briefcase,
  Layers,
  Server,
  Network,
  LayoutTemplate,
  MonitorSmartphone,
  Bot,
  PenTool,
  Users,
  MapPin
} from "lucide-react";

export const personalInfo = {
  name: "Mohammed Shakib",
  logoText: "Mohammed Shakib",
  monogram: "MS",
  primaryTitle: "Junior Developer & Software Engineering Student",
  shortTitle: "Full-Stack Developer | AI-Enabled Product Builder",
  heroHeading: "Building AI-Enabled Web Products\nand Scalable Full-Stack Solutions",
  heroSupportingText:
    "I am a Software Engineering student at United International University and a Junior Developer at Royal Bengal AI. I build and maintain full-stack web applications, automation platforms and AI-enabled products using React.js, Express.js, Redis, Supabase, Firebase, Railway and GitHub.",
  location: "Dhaka, Bangladesh",
  availability: "",
  workPreference: "",
  email: "mohammedshakib5320@gmail.com",
  phone: "+880 1874-126156",
  github: "https://github.com/MohammedShakib",
  linkedin: "https://linkedin.com/in/mohammed-shakib-omee",
  cvLink: "/Mohammed_Shakib_CV.pdf",
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
    title: "Core Stack",
    description: "React.js, Express.js, Redis and Supabase",
    icon: Layers,
  },
  {
    title: "Location",
    description: "Dhaka, Bangladesh",
    icon: MapPin,
  },
];

export const aboutMeInfo = {
  intro:
    "I am a motivated Software Engineering student at United International University with professional experience as a Junior Developer at Royal Bengal AI. I have hands-on experience building, testing, deploying and maintaining full-stack web applications and AI-enabled products.",
  additional:
    "My work includes feature implementation, API integration, debugging, testing and deployment. I am particularly interested in scalable web systems, automation and user-focused digital product development.",
  blocks: [
    { label: "Current Position", value: "Junior Developer at Royal Bengal AI" },
    { label: "Education", value: "B.Sc. in Software Engineering at UIU" },
    { label: "Technical Focus", value: "Full-Stack Web Development and AI Products" },
    { label: "Expected Graduation", value: "June 2026" },
  ],
};

export const whatIDo = [
  {
    title: "Full-Stack Web Development",
    description: "Build responsive web applications using React.js, JavaScript, Tailwind CSS, Node.js and Express.js.",
    icon: MonitorSmartphone,
  },
  {
    title: "AI-Enabled Product Development",
    description: "Contribute to intelligent web products featuring automated workflows, dashboards, content generation and user-focused AI functionality.",
    icon: BrainCircuit,
  },
  {
    title: "Automation and Bot Development",
    description: "Develop automated systems and Telegram bot-based workflows for content management, marketing and product-image generation.",
    icon: Bot,
  },
  {
    title: "Testing and Deployment",
    description: "Work on API integration, debugging, functional testing, deployment and production maintenance using GitHub, Railway, Supabase and Firebase.",
    icon: TestTube,
  },
];

export const professionalStats = [
  { label: "Projects", value: "9" },
  { label: "AI-Enabled Projects", value: "5" },
  { label: "Professional Roles", value: "3" },
  { label: "Awards & Certifications", value: "4" },
];

export const technicalExpertise = [
  {
    title: "Programming Languages",
    description: "Python, Java, JavaScript, C, SQL and NoSQL",
    icon: Code,
  },
  {
    title: "Frontend Development",
    description: "React.js, HTML5, CSS3 and Tailwind CSS",
    icon: LayoutTemplate,
  },
  {
    title: "Backend Development",
    description: "Node.js, Express.js, Spring Boot and REST APIs",
    icon: Server,
  },
  {
    title: "Automation and APIs",
    description: "Telegram Bot API, API integration and automated workflows",
    icon: Network,
  },
  {
    title: "Databases and Services",
    description: "Supabase, Google Firebase and Redis",
    icon: Database,
  },
  {
    title: "Deployment and DevOps Tools",
    description: "Railway, Docker, Git and GitHub",
    icon: Layers,
  },
  {
    title: "Software Testing",
    description: "Debugging, feature testing and workflow validation",
    icon: TestTube,
  },
  {
    title: "Design and Documentation",
    description: "Canva, Microsoft Word, PowerPoint and Excel",
    icon: PenTool,
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
    description: "A social media automation platform that helps teams generate, organise, schedule and manage content across connected channels.",
    tags: ["React.js", "Express.js", "Redis", "Supabase", "Railway"],
    image: "/projects/prachar.jpg",
    githubLink: "", // Hidden if not available
    liveLink: "",
  },
  {
    title: "AdReady",
    category: "Telegram-Based Product Image Creation",
    description: "A Telegram bot-based product image creation workflow that converts product information into marketing-ready visual assets.",
    tags: ["React.js", "Express.js", "Telegram Bot API", "Supabase"],
    image: "/projects/adready.jpg",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "Campus Twin",
    category: "Real-Time Smart Campus Digital Twin",
    description: "A real-time smart campus platform for monitoring classrooms, attendance, transportation, events, parking and emergency activities.",
    tags: ["React.js", "Express.js", "Redis", "Supabase", "Railway"],
    image: "/projects/smart-campus.jpg",
    githubLink: "",
    liveLink: "",
  },
];

export const otherProjects = [
  {
    title: "The Multimodal Track",
    description: "A unified web platform for managing text, image and related multimodal workflows.",
    tags: ["React.js", "Express.js", "Firebase", "Railway"],
  },
  {
    title: "MindSense AI",
    description: "An AI-powered web application featuring interactive dashboards, structured workflows and user-focused intelligent insights.",
    tags: ["React.js", "Express.js", "Redis", "Supabase"],
  },
  {
    title: "Parking Lagbe",
    description: "A responsive web application for finding and booking available parking spaces.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React.js"],
  },
  {
    title: "CGPA Calculator",
    description: "A responsive client-side application that allows students to calculate their CGPA accurately through a simple interface.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Book Management System",
    description: "A full-stack inventory management application featuring RESTful APIs and a structured Java backend.",
    tags: ["Java", "Spring Boot"],
  },
  {
    title: "Bara Koto?",
    description: "A React-based real-time bus fare estimation tool designed to simplify public transportation planning.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React.js"],
  }
];

export const learningJourney = [
  {
    period: "October 2025 – Present",
    title: "Junior Developer",
    company: "Royal Bengal AI",
    description: "Develop and maintain AI-enabled web applications using React.js, Express.js, Redis, Supabase, Firebase, Railway and GitHub.\n\n• Contribute to Prachar AI, AdReady, The Multimodal Track, MindSense AI and Campus Twin.\n• Work with the product team on feature implementation, API integration, debugging, testing and deployment.",
  },
  {
    period: "May 2025 – September 2025",
    title: "Content Writer Intern",
    company: "Privatune",
    description: "Designed book layouts and diagrams for readers and created engaging academic content for students and general audiences.\n\n• Contributed to an 11% improvement in design quality.",
  },
  {
    period: "March 2023 – May 2025",
    title: "Content Writer",
    company: "B For Binary",
    description: "Developed educational assessment materials, including multiple-choice and short-answer questions, to evaluate reader comprehension.",
  },
];

export const educationList = [
  {
    degree: "B.Sc. in Software Engineering",
    institution: "United International University",
    location: "Dhaka, Bangladesh",
    date: "February 2022 – Present",
    expectedGraduation: "June 2026",
    cgpa: "2.40 / 4.00",
    status: "Undergraduate",
  },
  {
    degree: "Higher Secondary Certificate – HSC",
    institution: "Shaheed Police Smrity College",
    batch: "2020",
    cgpa: "5.00 / 5.00",
    status: "Completed",
  },
  {
    degree: "Secondary School Certificate – SSC",
    institution: "Monipur High School",
    batch: "2018",
    cgpa: "5.00 / 5.00",
    status: "Completed",
  }
];

export const certifications = [
  {
    title: "Champion Award",
    description: "Champion in the Electronics Lab at CSE Project Show, 2024",
  },
  {
    title: "CSE Project Show",
    description: "Participant, 2025",
  },
  {
    title: "Speak with Impact",
    description: "Completed “Speak with Impact: Mastering Professional Communication,” 2025",
  },
  {
    title: "Entreprenexus",
    description: "Participated in “Entreprenexus – Turning People Management into Business Strategy,” 2025",
  }
];

export const leadershipAndExtracurricular = [
  {
    role: "Member",
    organisation: "UIU Photography Club",
    date: "December 2022 – Present",
    description: "Participate in photography workshops, club events and group discussions.",
  }
];

export const professionalStatement = {
  heading: "My Approach",
  statement:
    "I enjoy transforming ideas into functional, user-focused digital products. My development approach combines clean interfaces, structured backend logic, reliable API integration, testing and continuous improvement.",
  secondaryLine:
    "Through my work at Royal Bengal AI, I have gained practical experience contributing to AI-enabled applications, automation systems and production-focused web platforms.\n\nMy goal is to continue developing scalable web products that solve practical problems and provide a clear user experience.",
};

export const techStripLogos = [
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Java",
  "Spring Boot",
  "Python",
  "Tailwind CSS",
  "Supabase",
  "Firebase",
  "Redis",
  "Docker",
  "Railway",
  "GitHub",
];

export const contactOptions = [
  "Junior Developer Opportunity",
  "Software Engineering Internship",
  "Full-Stack Development",
  "Project Collaboration",
  "Freelance Project",
  "General Message",
];
