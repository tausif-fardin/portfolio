import { Github, Linkedin, Mail } from "lucide-react";

import type {
    ExperienceItem,
    Profile,
    Project,
    Publication,
    SkillGroup,
    SocialLink,
} from "./types";

export const profile: Profile = {
    name: "Tausif Fardin Sinha",
    shortName: "Tausif Fardin",
    monogram: "TFS",
    title: "Backend Engineer & System Architect",
    tagline:
        "Building high-throughput SaaS platforms, scalable architectures, and AI-integrated applications.",
    summary: [
        "Backend Engineer and System Architect with 3+ years of experience designing scalable relational and NoSQL databases, managing multi-platform API integrations, and applying machine learning workflows to enhance enterprise products.",
        "I specialize in the Node.js ecosystem (NestJS, Express) and building resilient systems that handle massive scale gracefully.",
    ],
    email: "tf.sinha@gmail.com",
    location: "Dhaka, Bangladesh",
    resumeUrl: "/resume/Tausif_Resume.pdf",
    avatar: "/dp.jpg",
    github: "https://github.com/tausif-fardin",
    linkedin: "https://linkedin.com/in/tausif-fardin",
};

export const socialLinks: readonly SocialLink[] = [
    {
        label: "GitHub",
        href: profile.github,
        icon: Github,
        external: true,
    },
    {
        label: "LinkedIn",
        href: profile.linkedin,
        icon: Linkedin,
        external: true,
    },
    {
        label: "Email",
        href: `mailto:${profile.email}`,
        icon: Mail,
        external: false,
    },
];

export const experience: readonly ExperienceItem[] = [
    {
        company: "ZAAG SYSTEMS",
        role: "Software Engineer",
        period: "Sep 2025 — Present",
        current: true,
        highlights: [
            "Spearheaded backend architecture using NestJS, PostgreSQL, and MongoDB.",
            "Re-engineered a POS payments backend for graceful degradation, improving fallback from 12.3s to 56ms.",
            "Verified system readiness at 40x projected peak load with zero ledger drift.",
            "Architected a highly scalable Redis-backed queued bulk email delivery system.",
        ],
    },
    {
        company: "ZAAG SYSTEMS",
        role: "Jr. Backend Developer",
        period: "Apr 2024 — Aug 2025",
        highlights: [
            "Developed scalable e-commerce backend solutions integrating SSLCommerz, Stripe, and Firebase.",
            "Optimized a legacy PDF generation pipeline, reducing generation time by 60%.",
            "Modernized deployment workflows with automated CI/CD pipelines.",
        ],
    },
    {
        company: "Orbit Digital Solutions Ltd.",
        role: "Software Engineer",
        period: "Oct 2022 — Mar 2024",
        highlights: [
            "Developed a computer-vision OCR pipeline to extract passport details.",
            "Architected MongoDB schemas for 50,000+ records, slashing query response times by 90% (from 2s to 200ms).",
            "Engineered a robust scheduling API reducing manual scheduling efforts by 40%.",
        ],
    },
];

export const projects: readonly Project[] = [
    {
        name: "Therapy Station",
        href: "http://therapystation.org/",
        linkLabel: "Live site",
        highlights: [
            "Built the API layer on the Next.js backend.",
            "Implemented authentication with NextAuth.",
            "Wrote the complex MySQL queries behind the booking system.",
        ],
        stack: ["JavaScript", "Next.js", "MySQL", "Tailwind CSS", "NextAuth"],
    },
    {
        name: "One Piece E-commerce — Admin",
        href: "https://github.com/tausif-fardin/ecommerce-admin",
        linkLabel: "Source",
        highlights: [
            "Multi-store admin platform with Clerk authentication.",
            "Management for products, categories, and sub-categories.",
            "End-to-end order tracking.",
        ],
        stack: ["TypeScript", "Next.js", "MySQL", "Tailwind CSS", "shadcn/ui"],
    },
    {
        name: "One Piece E-commerce — Storefront",
        href: "https://github.com/tausif-fardin/ecommerce-store",
        linkLabel: "Source",
        highlights: [
            "Customer-facing storefront for the admin platform above.",
            "Email, Google, and Facebook authentication flows.",
            "Stripe integration for payment processing.",
        ],
        stack: ["TypeScript", "Next.js", "MySQL", "Tailwind CSS", "Stripe"],
    },
    {
        name: "Mitra",
        href: "https://play.google.com/store/apps/details?id=com.mitra.cygnus",
        linkLabel: "Google Play",
        highlights: [
            "Built the mobile client in React Native.",
            "Implemented UI components to design specification.",
            "Integrated backend services alongside the platform team.",
        ],
        stack: ["JavaScript", "React Native", "MySQL"],
    },
];

export const skillGroups: readonly SkillGroup[] = [
    {
        category: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "Node.js"],
    },
    {
        category: "Backend",
        items: ["NestJS", "Express.js", "WebSockets (Socket.io)"],
    },
    {
        category: "Data",
        items: ["PostgreSQL", "MongoDB", "Redis", "TypeORM"],
    },
    {
        category: "Cloud & DevOps",
        items: [
            "DigitalOcean",
            "Docker",
            "Nginx",
            "PM2",
            "Cloudflare",
            "CI/CD",
        ],
    },
    {
        category: "AI & ML",
        items: [
            "RAG Systems",
            "Computer Vision (OCR)",
            "NLP",
            "Deep Learning",
        ],
    },
];

// TODO: add `url` (DOI or publisher link) to each entry — the external-link
// affordance renders automatically once a URL is present.
export const publications: readonly Publication[] = [
    {
        title: "Enhancing Image Captioning with a Multi-Encoder Ensemble Framework",
        venue: "BIM 2025",
    },
    {
        title: "Stock Market Comparison and Analysis in Preceding and Following Pandemic in Bangladesh using Machine Learning Approaches",
        venue: "ACM Digital Library",
        date: "Aug 2022",
    },
];
