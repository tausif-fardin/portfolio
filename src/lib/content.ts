import { Github, Linkedin, Mail } from "lucide-react";

import type {
    EducationItem,
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
        "Building high-throughput SaaS platforms, e-commerce ecosystems, and AI-integrated applications.",
    summary: [
        "Backend Engineer and System Architect with 3+ years of experience designing high-throughput SaaS platforms, e-commerce ecosystems, and AI-integrated applications.",
        "Proven track record leading technical teams, architecting scalable relational and NoSQL databases, and managing end-to-end deployments for enterprise brands.",
        "I specialize in Node.js ecosystems (NestJS, Express), multi-platform API integrations, and applying machine learning workflows to enhance product capabilities.",
    ],
    email: "tf.sinha@gmail.com",
    location: "Dhaka, Bangladesh",
    languages: "English (Professional), Bengali (Native)",
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
            "Spearheaded backend architecture across multiple production applications using NestJS, Express, PostgreSQL, and MongoDB, taking full ownership of API design, database schemas, and external integrations.",
            "Re-engineered a POS payments backend to ensure graceful degradation during cache outages, improving failure response times from 12.3s to a 56ms fallback.",
            "Verified system readiness at 40x projected peak load with zero ledger drift during extensive load testing.",
            "Architected and deployed a highly scalable bulk email delivery system leveraging Redis-backed queues to process and deliver large volumes of daily emails.",
            "Developed a custom-domain provisioning feature for a multi-tenant SaaS platform integrating Cloudflare and Namecheap APIs, partial-payment gateways, and per-store analytics.",
            "Led backend engineering for Apex Footwear, delivering a secure role-based admin portal and optimizing a complex image and video processing pipeline for native iOS playback.",
        ],
    },
    {
        company: "ZAAG SYSTEMS",
        role: "Jr. Backend Developer",
        period: "Apr 2024 — Aug 2025",
        highlights: [
            "Developed scalable e-commerce backend solutions for clients like Mumuso Bangladesh, integrating local and global services including SSLCommerz, Stripe, Pathao dispatch, and Firebase push notifications.",
            "Optimized a legacy PDF generation pipeline by overhauling the core processing logic, reducing generation time by 60% and improving overall system performance.",
            "Modernized deployment workflows by replacing manual release processes with automated CI/CD pipelines.",
            "Managed and monitored production infrastructure across DigitalOcean, Hetzner, and Hostinger to ensure high availability.",
        ],
    },
    {
        company: "Orbit Digital Solutions Ltd.",
        role: "Software Engineer",
        period: "Oct 2022 — Mar 2024",
        highlights: [
            "Developed a computer-vision OCR pipeline to extract passport details from photographs, automating identity verification and eliminating manual data entry bottlenecks for clients.",
            "Architected and indexed MongoDB schemas for high-volume collections containing 50,000+ records, slashing heavy query response times by 90% (from 2 seconds to 200 ms).",
            "Engineered a robust scheduling API for appointment booking, streamlining operations and reducing manual scheduling efforts by 40%.",
            "Integrated third-party payment gateways and real-time notification services, creating resilient systems for transaction callbacks and delivery status updates.",
        ],
    },
    {
        company: "Orbit Digital Solutions Ltd.",
        role: "Software Engineer Intern",
        period: "Jun 2022 — Sep 2022",
        highlights: [
            "Built robust REST APIs in Node.js and Express for client-facing applications, collaborating directly with frontend teams to deliver end-to-end features.",
            "Demonstrated rapid technical growth and reliability, resulting in a fast-tracked promotion to a full-time Software Engineer role at the close of the internship.",
        ],
    },
];

/** Live production systems built at ZAAG SYSTEMS. */
export const projects: readonly Project[] = [
    {
        name: "Apex Footwear",
        href: "https://apexfootwearltd.com",
        role: "Technical Lead",
        summary:
            "Backend and admin for a fully dynamic company site — approval workflow, role- and permission-based access control, and video optimization for faster loading.",
    },
    {
        name: "Mumuso",
        href: "https://mumuso.com.bd",
        role: "Technical Lead",
        summary: "E-commerce platform with virtual try-on.",
    },
    {
        name: "ZaagShop",
        href: "https://zaagshop.com",
        role: "Maintainer",
        summary:
            "Shopify-like e-commerce site builder. Maintained the platform and shipped new features.",
    },
    {
        name: "ZaagAI",
        href: "https://zaag.ai",
        role: "Contributor",
        summary:
            "Added the booking module and integrated the Meta and WhatsApp Cloud APIs.",
    },
    {
        name: "Lawying",
        href: "https://lawying.es",
        role: "Backend Lead",
        summary: "Social platform for lawyers.",
    },
];

export const skillGroups: readonly SkillGroup[] = [
    {
        category: "Languages & Frameworks",
        items: ["Node.js", "NestJS", "Express.js", "JavaScript", "Python"],
    },
    {
        category: "Databases & ORMs",
        items: ["PostgreSQL", "MongoDB", "TypeORM", "Redis"],
    },
    {
        category: "Architecture & APIs",
        items: [
            "RESTful APIs",
            "Webhooks",
            "Socket.io",
            "Omnichannel Integrations (WhatsApp Cloud API)",
        ],
    },
    {
        category: "AI & Machine Learning",
        items: [
            "RAG Systems",
            "Computer Vision (OCR)",
            "NLP",
            "Deep Learning",
            "Agentic Workflows (Claude Code, Copilot)",
        ],
    },
    {
        category: "Tools & Infrastructure",
        items: [
            "Git",
            "Ubuntu Linux",
            "DigitalOcean VPS",
            "Nginx",
            "PM2",
            "Firebase",
            "Hetzner",
            "Hostinger",
            "Cloudflare",
        ],
    },
    {
        category: "Payments & Delivery Integrations",
        items: [
            "Stripe",
            "SSLCommerz",
            "bKash",
            "AlinmaPay",
            "Pathao",
            "Steadfast",
        ],
    },
];

export const education: readonly EducationItem[] = [
    {
        degree: "Master of Science (MS), Computer Science",
        institution: "American International University-Bangladesh",
        period: "Graduated Oct 2025",
        gpa: "3.75",
    },
    {
        degree: "Bachelor of Science (BSc), Computer Science and Engineering",
        institution: "American International University-Bangladesh",
        period: "Graduated Sep 2022",
        gpa: "3.71",
    },
];

export const certifications: readonly string[] = [
    "MongoDB Node.js Developer Path (Mar 2024)",
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
