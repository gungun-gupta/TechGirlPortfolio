export const personalInfo = {
  name: "Gungun Gupta",
  handle: "gungun.dev",
  role: "Software Engineer",
  tagline: "Full-Stack Web Architect & Applied AI Engineer",
  status: "Available for opportunities",
  pitch: "Computer Science engineer specializing in modern high-performance web applications (React, Next.js, FastAPI) and Applied AI (RAG, ChromaDB). Experienced in production ERP systems, microservices, and client platforms with top-tier SEO rankings.",
  location: "Durg / Bhilai, India",
  email: "gungungpta99@gmail.com",
  phone: "+91-8827510999",
  resumePath: "/my-resume.pdf",
  socials: {
    github: "https://github.com/gungun-gupta",
    linkedin: "https://linkedin.com/in/gungun-gupta999",
    linktree: "https://linktr.ee/gungun_gupta",
    email: "mailto:gungungpta99@gmail.com",
  },
  stats: [
    { label: "B.Tech CGPA", value: "8.2" },
    { label: "Lighthouse Score", value: "99%" },
    { label: "Query Latency", value: "<3s" },
    { label: "RAG Retrieval Boost", value: "+40%" },
  ],
};

export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: "Layout",
      skills: [
        { name: "React.js", level: "Advanced", hot: true },
        { name: "Next.js", level: "Advanced", hot: true },
        { name: "TypeScript", level: "Intermediate", hot: true },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced", hot: true },
        { name: "Vite", level: "Advanced" },
        { name: "HTML5 / CSS3", level: "Advanced" },
        { name: "Bootstrap", level: "Proficient" },
        { name: "WordPress", level: "Proficient" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Systems",
      icon: "Server",
      skills: [
        { name: "FastAPI", level: "Advanced", hot: true },
        { name: "REST API Design", level: "Advanced", hot: true },
        { name: "Microservices", level: "Intermediate" },
        { name: "SSMS SQL", level: "Advanced" },
        { name: "SQL Queries & Views", level: "Advanced" },
        { name: "Data Validation", level: "Advanced" },
        { name: "ERP Architecture", level: "Intermediate" },
      ],
    },
    {
      id: "ai",
      title: "AI & Emerging Tech",
      icon: "Cpu",
      skills: [
        { name: "Hybrid RAG", level: "Advanced", hot: true },
        { name: "ChromaDB", level: "Advanced", hot: true },
        { name: "Ollama (Llama 3/Mistral)", level: "Advanced", hot: true },
        { name: "Vector Embeddings", level: "Advanced" },
        { name: "Semantic Chunking", level: "Advanced" },
        { name: "Local LLM Deployment", level: "Advanced" },
      ],
    },
    {
      id: "languages",
      title: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "Python", level: "Advanced", hot: true },
        { name: "JavaScript", level: "Advanced", hot: true },
        { name: "C++", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "SQL", level: "Advanced" },
      ],
    },
    {
      id: "core",
      title: "Core CS & Tools",
      icon: "Terminal",
      skills: [
        { name: "Data Structures & Algos", level: "Advanced" },
        { name: "OOP (Object-Oriented)", level: "Advanced" },
        { name: "Computer Networks", level: "Intermediate" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Technical SEO & Performance", level: "Advanced", hot: true },
      ],
    },
  ],
};

export const projectsData = [
  {
    id: "internkul",
    title: "Internkul: Education Platform",
    category: "Full-Stack Web / EdTech",
    badge: "Featured Production",
    tech: ["Vite", "React.js", "TypeScript", "Tailwind CSS", "REST API Integration", "SEO"],
    description:
      "Engineered high-performance, responsive frontend interfaces for course catalogs, batch details, and student workflows. Integrated team-provided REST APIs, implemented strict client-side validation and error boundaries, and boosted search discoverability with technical SEO best practices.",
    highlights: [
      "Dynamic course catalog with high-speed client filtering",
      "Integrated 10+ REST endpoints with end-to-end type safety",
      "Optimized Core Web Vitals and meta-tags for search discovery",
    ],
    github: "https://github.com/gungun-gupta",
    live: "https://github.com/gungun-gupta",
    stats: {
      metric: "Vite + React",
      label: "Modern SPA Architecture",
    },
    featured: true,
  },
  {
    id: "sharda-medical",
    title: "Sharda Medical Store",
    category: "Client Application / SEO Showcase",
    badge: "Ranked #1-6 Google",
    tech: ["Next.js", "React.js", "Tailwind CSS", "Technical SEO", "Lighthouse"],
    description:
      "Independently developed and deployed a commercial client website with responsive inventory/product showcases and direct customer contact integration. Structured semantic metadata and assets to rank on Google search between positions 1–6 for targeted local queries.",
    highlights: [
      "99% Desktop Lighthouse Performance Score",
      "0.3s First Contentful Paint (FCP) & 0 Cumulative Layout Shift (CLS)",
      "Top 1–6 Organic Google Search Ranking achieved through technical SEO",
    ],
    github: "https://github.com/gungun-gupta",
    live: "https://github.com/gungun-gupta",
    stats: {
      metric: "99% Lighthouse",
      label: "0.3s First Contentful Paint",
    },
    featured: true,
  },
  {
    id: "hybrid-rag",
    title: "Local LLM & Hybrid RAG Application",
    category: "Applied AI / Vector Retrieval",
    badge: "Privacy First",
    tech: ["Python", "FastAPI", "Ollama", "ChromaDB", "Vector Embeddings", "Llama 3"],
    description:
      "Engineered an offline document intelligence and multi-page PDF Q&A engine powered by FastAPI and Ollama (Llama 3 / Mistral). Operates 100% locally with zero data leakage, sub-3s response latencies, and high-precision source citations.",
    highlights: [
      "+40% Semantic Retrieval Accuracy via recursive chunking (500-tokens, 50-token overlap)",
      "ChromaDB vector similarity search with automated anti-hallucination guardrails",
      "Sub-3 second average query-response latency on consumer hardware",
    ],
    github: "https://github.com/gungun-gupta",
    live: "https://github.com/gungun-gupta",
    stats: {
      metric: "<3s Latency",
      label: "40% Accuracy Improvement",
    },
    featured: true,
  },
];

export const experienceData = [
  {
    role: "Web Development Intern",
    company: "Aon Digicon LLP",
    location: "Korba, Chhattisgarh (OnSite)",
    period: "May 2025 – Jul 2025",
    type: "Internship",
    points: [
      "Developed 6+ reusable React & Tailwind CSS components for ERP inventory and requisition modules, speeding up UI feature delivery across team sprints.",
      "Integrated 12+ REST endpoints with client-side schema validation, reducing API error rates and enhancing user experience.",
      "Contributed to LIMS (Laboratory Information Management System) and microservices architecture, learning modular enterprise design patterns and business process workflows.",
    ],
    skills: ["React.js", "Tailwind CSS", "REST APIs", "ERP Systems", "Microservices", "Data Validation"],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science Engineering",
    institution: "Shri Shankaracharya Technical Campus",
    location: "Durg, Chhattisgarh",
    period: "2022 – 2026",
    grade: "8.2 CGPA",
    highlights: [
      "Core focus on Data Structures & Algorithms, Object-Oriented Programming, and Database Systems",
      "Active contributor to student tech communities and hands-on laboratory research",
    ],
  },
];

export const certificationsData = [
  {
    name: "Google Cloud Computing Foundation & GenAI",
    issuer: "Google Cloud",
    link: "https://linkedin.com/in/gungun-gupta999",
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    link: "https://linkedin.com/in/gungun-gupta999",
  },
  {
    name: "Postman Student Expert",
    issuer: "Postman",
    link: "https://linkedin.com/in/gungun-gupta999",
  },
];

export const leadershipData = [
  {
    role: "Social Media & Content Lead",
    organization: "Google Developer Groups (GDG) SSTC",
    desc: "Led digital outreach and technical content strategy for university developer workshops and community hackathons.",
  },
  {
    role: "Core Team Member",
    organization: "E-Cell SSTC",
    desc: "Collaborated on entrepreneurship bootcamps, startup pitch competitions, and student mentorship programs.",
  },
  {
    role: "Participant",
    organization: "National Youth Parliament",
    desc: "Engaged in national policy debates and public speaking forums representing collegiate youth.",
  },
];
