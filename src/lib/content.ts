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
    title: "Full Stack Engineer, Backend-Focused",
    tagline:
        "Building high-throughput SaaS platforms, e-commerce ecosystems, and AI-integrated applications - from schema to deployment.",
    summary: [
        "Full Stack Engineer with 3+ years of experience designing high-throughput SaaS platforms, e-commerce ecosystems, and AI-integrated applications. I build complete products - schema and API design, the interface on top, and the infrastructure underneath.",
        "My depth is backend: Node.js ecosystems (NestJS, Express), scalable relational and NoSQL databases, and multi-platform API integrations, with a track record leading technical teams and owning end-to-end deployments for enterprise brands.",
        "The rest of the stack comes with it - React, Next.js, and Tailwind on the front end; Docker, Nginx, PM2, and CI/CD on the way to production.",
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
        period: "Sep 2025 - Present",
        current: true,
        highlights: [
            "Spearheaded backend architecture across multiple production applications using NestJS, Express, PostgreSQL, and MongoDB, taking full ownership of API design, database schemas, and external integrations.",
            "Re-engineered a POS payments backend to ensure graceful degradation during cache outages, improving failure response times from 12.3s to a 56ms fallback.",
            "Verified system readiness at 40x projected peak load with zero ledger drift during extensive load testing.",
            "Architected and deployed a highly scalable bulk email delivery system leveraging Redis-backed queues to process and deliver large volumes of daily emails.",
        ],
    },
    {
        company: "ZAAG SYSTEMS",
        role: "Jr. Backend Developer",
        period: "Apr 2024 - Aug 2025",
        highlights: [
            "Developed scalable e-commerce backend solutions integrating SSLCommerz, Stripe, Pathao dispatch, and Firebase push notifications.",
            "Optimized a legacy PDF generation pipeline by overhauling the core processing logic, reducing generation time by 60% and improving overall system performance.",
            "Modernized deployment workflows by replacing manual release processes with automated CI/CD pipelines.",
            "Managed and monitored production infrastructure across DigitalOcean, Hetzner, and Hostinger to ensure high availability.",
        ],
    },
    {
        company: "Orbit Digital Solutions Ltd.",
        role: "Software Engineer",
        period: "Oct 2022 - Mar 2024",
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
        period: "Jun 2022 - Sep 2022",
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
            "Backend and admin platform behind a fully content-managed corporate site. Publishing runs through a multi-level, department-by-department sign-off chain layered over role- and permission-based access, so nothing reaches the live site without the right approvals. Rebuilt the image and video pipeline to transcode for native iOS playback and cut page weight.",
    },
    {
        name: "Mumuso",
        href: "https://mumuso.com.bd",
        role: "Technical Lead",
        summary:
            "Consumer e-commerce platform with virtual try-on. Owned the commerce backend - SSLCommerz and Stripe payments, Pathao dispatch, Firebase push - and integrated the third-party AR try-on SDK, mapping it to the product catalogue and serving its assets.",
    },
    {
        name: "ZaagShop",
        href: "https://zaagshop.com",
        role: "Core Contributor",
        summary:
            "Multi-tenant storefront builder - merchants create and run their own shops, Shopify-style. Shipped custom-domain provisioning that automates DNS and certificate setup through the Cloudflare and Namecheap APIs, terminating TLS at the edge in flexible mode so merchants get a branded HTTPS domain with nothing to buy or renew. Also added partial-payment gateways and per-store analytics.",
    },
    {
        name: "ZaagAI",
        href: "https://zaag.ai",
        role: "Contributor",
        summary:
            "AI customer-engagement platform that answers from a business's own content across chat and voice. Built the booking module - detecting booking intent, checking availability, and confirming appointments inside the conversation - and integrated the Meta and WhatsApp Cloud APIs so the same agent runs on the channels customers already message.",
    },
    {
        name: "Lawying",
        href: "https://lawying.es",
        role: "Backend Lead",
        summary:
            "Professional social network for Spain's legal community. Led the backend behind the social core - posts, comments, and feed assembly - plus real-time direct messaging and notifications over WebSockets.",
    },
];

export const skillGroups: readonly SkillGroup[] = [
    {
        category: "Languages & Frameworks",
        items: [
            "Node.js",
            "NestJS",
            "Express.js",
            "TypeScript",
            "JavaScript",
            "Python",
        ],
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS"],
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

export const publications: readonly Publication[] = [
    {
        title: "Enhancing Image Captioning with a Multi-Encoder Ensemble Framework",
        venue: "Big Data, IoT and Machine Learning (BIM 2025), Springer",
        // Publisher's DOI-backed chapter record, not the SpringerProfessional
        // aggregator mirror - this is the stable citation target.
        url: "https://link.springer.com/chapter/10.1007/978-3-032-15346-3_40",
    },
    {
        title: "Stock Market Comparison and Analysis in Preceding and Following Pandemic in Bangladesh using Machine Learning Approaches",
        venue: "Computing Advancements (ICCA 2022), ACM",
        date: "Aug 2022",
        url: "https://dl.acm.org/doi/10.1145/3542954.3542993",
    },
];
