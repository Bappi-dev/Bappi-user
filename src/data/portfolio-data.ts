export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full Stack" | "Frontend" | "API & Auth";
  tags: string[];
  metrics: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  accentColor: string;
  architecture: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    highlight?: boolean;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const PERSONAL_INFO = {
  name: "Imamul Hasan Bappi",
  monogram: "IHB",
  title: "Full-Stack & Creative Engineer",
  tagline: "Architecting high-performance MERN & Next.js systems with obsessive attention to craft, micro-interactions, and distributed scale.",
  status: "Available for select freelance & full-time roles",
  location: "Dhaka, Bangladesh (UTC+6) • Global Remote",
  email: "brbappi090@gmail.com",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  yearsOfExperience: "5+",
  projectsCompleted: "38+",
  codeCommits: "2,400+",
  uptimeRate: "99.99%",
};

export const PROJECTS: Project[] = [
  {
    id: "nexus-cloud",
    title: "NexusCloud AI Engine",
    tagline: "Enterprise MERN & Next.js AI observability platform",
    description:
      "A distributed telemetry and LLM observability engine featuring real-time stream processing, JWT session rotation, role-based access control, and dynamic aggregation pipelines.",
    category: "Full Stack",
    tags: ["Next.js 16", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Redis"],
    metrics: "120k req/min • <35ms latency",
    githubUrl: "https://github.com",
    liveUrl: "https://nexuscloud.vercel.app",
    featured: true,
    accentColor: "from-blue-500 to-indigo-600",
    architecture: [
      "Custom Express REST API with modular MVC architecture",
      "Mongoose multi-tenant schemas with optimized indexing",
      "Next.js App Router streaming dashboard with Server Actions",
      "Stateless JWT access tokens with Redis-backed refresh token blacklisting",
    ],
  },
  {
    id: "cryptapay-gateway",
    title: "CryptaPay Core API",
    tagline: "High-throughput financial checkout & webhook processor",
    description:
      "Resilient payment routing microservice built with Node.js cluster, Express, and MongoDB replica sets. Implements idempotent webhooks, rate limiting, and cryptographic signature verification.",
    category: "API & Auth",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "REST API", "Docker"],
    metrics: "99.999% uptime • \$4.2M transacted",
    githubUrl: "https://github.com",
    liveUrl: "https://cryptapay.dev",
    featured: true,
    accentColor: "from-emerald-500 to-cyan-600",
    architecture: [
      "Zero-downtime distributed token validation with HMAC-SHA256",
      "Atomic transaction isolation via MongoDB 2-phase commits",
      "Express middleware pipeline with sliding-window rate limiting",
      "Automated OpenAPI / Postman spec generation & E2E test suites",
    ],
  },
  {
    id: "aurora-design-system",
    title: "Aurora Headless UI",
    tagline: "Accessible Framer Motion component library for design engineers",
    description:
      "A next-generation design system featuring fluid physics, glassmorphic themes, keyboard navigation hooks, and zero layout shift. Used across 15+ production applications.",
    category: "Frontend",
    tags: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HeroUI"],
    metrics: "14k+ weekly npm downloads",
    githubUrl: "https://github.com",
    liveUrl: "https://aurora-ui.dev",
    featured: true,
    accentColor: "from-violet-500 to-fuchsia-600",
    architecture: [
      "Strict TypeScript generics for polymorphic component props",
      "Framer Motion spring physics with hardware-accelerated transforms",
      "Automated WAI-ARIA accessibility compliance testing",
      "Tailwind theme tokens synchronized across dark/light palettes",
    ],
  },
  {
    id: "pulse-metrics",
    title: "PulseMetrics Real-Time Analytics",
    tagline: "Full-stack time-series monitoring & WebSocket push server",
    description:
      "Full-stack telemetry hub tracking web performance, user interactions, and server vitals. Features server-sent events, MongoDB timeseries collections, and interactive SVG charts.",
    category: "Full Stack",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "DaisyUI"],
    metrics: "Sub-50ms dashboard sync",
    githubUrl: "https://github.com",
    liveUrl: "https://pulsemetrics.io",
    featured: false,
    accentColor: "from-cyan-500 to-blue-600",
    architecture: [
      "WebSocket bi-directional event bus with cluster fallback",
      "Time-series bucketing with MongoDB aggregate pipelines",
      "Client-side optimistic UI updates and data smoothing",
    ],
  },
  {
    id: "auth-guard-suite",
    title: "AuthGuard Identity Provider",
    tagline: "Turnkey OAuth2, JWT & Passkey authentication microservice",
    description:
      "Production-ready authentication server supporting OAuth2.0, biometric WebAuthn / Passkeys, multi-factor TOTP, and strict session revocation protocols.",
    category: "API & Auth",
    tags: ["Node.js", "Express.js", "JWT", "MongoDB", "Security", "REST APIs"],
    metrics: "Zero CVE vulnerabilities • OWASP compliant",
    githubUrl: "https://github.com",
    liveUrl: "https://authguard.dev",
    featured: false,
    accentColor: "from-amber-500 to-rose-600",
    architecture: [
      "Triple-layer JWT token security (HTTP-only cookies + CSRF protection)",
      "Bcrypt password hashing with adaptive work factor",
      "Rate-limited brute-force deterrence via Redis exponential backoff",
    ],
  },
  {
    id: "veloce-commerce",
    title: "Veloce Hyper-Store",
    tagline: "Ultra-fast headless e-commerce with optimistic cart state",
    description:
      "Modern e-commerce storefront delivering sub-second page transitions, dynamic currency conversion, server-side caching, and frictionless one-click checkout.",
    category: "Frontend",
    tags: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Framer Motion", "HeroUI"],
    metrics: "100/100 Lighthouse performance score",
    githubUrl: "https://github.com",
    liveUrl: "https://veloce-store.vercel.app",
    featured: false,
    accentColor: "from-blue-600 to-cyan-500",
    architecture: [
      "Full ISR & partial pre-rendering on product catalog pages",
      "Optimistic UI state machine for instant cart mutations",
      "IntersectionObserver lazy hydration of below-the-fold media",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Lead Full-Stack Architect",
    company: "Synthetix Labs",
    period: "2023 — Present",
    location: "San Francisco, CA (Remote)",
    type: "Full-Time",
    description: [
      "Architected and deployed high-traffic Next.js 16 App Router web applications serving 250,000+ monthly active developers.",
      "Engineered high-throughput REST APIs and WebSocket notification services in Node.js & Express, cutting server response times by 42%.",
      "Spearheaded MongoDB database indexing, sharding, and aggregation pipelines, boosting query performance under peak load.",
      "Established hardened JWT authorization pipelines with token rotation, IP fingerprinting, and OWASP security compliance.",
    ],
    technologies: ["Next.js 16", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "exp-2",
    role: "Senior Full-Stack Developer",
    company: "Aether Dynamics",
    period: "2021 — 2023",
    location: "New York, NY (Remote)",
    type: "Full-Time",
    description: [
      "Developed end-to-end MERN stack SaaS applications with role-based access control, billing subscriptions, and real-time dashboards.",
      "Designed clean RESTful API contracts documented with Postman & Swagger, facilitating seamless integrations with 12 external client platforms.",
      "Engineered reusable component libraries with Tailwind CSS, HeroUI, and Framer Motion, elevating design consistency across 4 separate engineering squads.",
      "Implemented automated CI/CD pipelines with GitHub Actions, reducing deployment error rates by 70%.",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Tailwind CSS"],
  },
  {
    id: "exp-3",
    role: "Frontend & UI/UX Engineer",
    company: "Vortex Digital Agency",
    period: "2019 — 2021",
    location: "Austin, TX (Remote)",
    type: "Contract",
    description: [
      "Crafted bespoke, award-winning interactive websites for tech startups with fluid scroll animations, 3D Canvas elements, and responsive layouts.",
      "Optimized Core Web Vitals across 20+ client websites, achieving consecutive 98+ Google Lighthouse scores for Performance and Accessibility.",
      "Collaborated directly with product designers to bridge the gap between Figma mockups and production-ready React code.",
    ],
    technologies: ["JavaScript ES6+", "TypeScript", "React", "CSS3 / Sass", "Tailwind CSS", "Framer Motion", "Git"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, hyper-responsive, and pixel-perfect digital interfaces with fluid motion.",
    skills: [
      { name: "React 19 / 18", level: "Expert", icon: "react", highlight: true },
      { name: "Next.js (App Router)", level: "Expert", icon: "nextjs", highlight: true },
      { name: "TypeScript", level: "Expert", icon: "typescript", highlight: true },
      { name: "JavaScript (ES6+)", level: "Master", icon: "javascript" },
      { name: "Tailwind CSS", level: "Expert", icon: "tailwind", highlight: true },
      { name: "Framer Motion", level: "Expert", icon: "framer", highlight: true },
      { name: "HeroUI & Shadcn", level: "Advanced", icon: "heroui" },
      { name: "DaisyUI Accents", level: "Advanced", icon: "daisyui" },
      { name: "HTML5 / CSS3", level: "Master", icon: "html" },
    ],
  },
  {
    title: "Backend & Database",
    description: "Designing scalable microservices, authenticated REST APIs, and resilient data models.",
    skills: [
      { name: "Node.js Runtime", level: "Expert", icon: "nodejs", highlight: true },
      { name: "Express.js", level: "Expert", icon: "express", highlight: true },
      { name: "RESTful API Design", level: "Expert", icon: "api", highlight: true },
      { name: "JWT Authentication", level: "Expert", icon: "jwt", highlight: true },
      { name: "MongoDB & Atlas", level: "Expert", icon: "mongodb", highlight: true },
      { name: "Mongoose ODM", level: "Expert", icon: "mongoose", highlight: true },
      { name: "Redis Caching", level: "Advanced", icon: "redis" },
      { name: "WebSockets & SSE", level: "Advanced", icon: "socket" },
    ],
  },
  {
    title: "Architecture & Workflow",
    description: "Version control, automated pipelines, testing standards, and developer productivity tooling.",
    skills: [
      { name: "Git & GitHub", level: "Expert", icon: "git", highlight: true },
      { name: "Postman & API Testing", level: "Expert", icon: "postman", highlight: true },
      { name: "Vercel & Cloud Deploy", level: "Expert", icon: "vercel", highlight: true },
      { name: "Docker & Containers", level: "Intermediate", icon: "docker" },
      { name: "npm / pnpm tooling", level: "Expert", icon: "npm" },
      { name: "Zod Schema Validation", level: "Expert", icon: "zod" },
      { name: "Linux & Bash", level: "Advanced", icon: "terminal" },
      { name: "CI / CD Pipelines", level: "Advanced", icon: "cicd" },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Marcus Sterling",
    role: "VP of Engineering",
    company: "Synthetix Labs",
    content:
      "Bappi is that rare 1% engineer who bridges the gap between deep backend infrastructure and world-class visual craft. His Express & MongoDB architectures run like clockwork, and his Next.js implementations are some of the fastest we've ever benchmarked.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: "Founder & CEO",
    company: "Aura Creative",
    content:
      "Working with Bappi was effortlessly seamless. He transformed our entire product interface into a responsive, Awwwards-caliber masterpiece with buttery smooth Framer Motion transitions. Our user retention jumped by 34% within the first month.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "test-3",
    name: "David Chen",
    role: "Principal Architect",
    company: "FinScale Payments",
    content:
      "Bappi designed our JWT authentication protocol and Mongoose schema models under intense deadlines. The code was exceptionally well-documented, strictly typed, and fortified against security vulnerabilities. Outstanding talent.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
];

