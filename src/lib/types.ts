import type { LucideIcon } from "lucide-react";

export interface NavItem {
    /** Matches the `id` of the rendered <section>. */
    id: string;
    label: string;
}

export interface Profile {
    name: string;
    shortName: string;
    monogram: string;
    title: string;
    tagline: string;
    /** Rendered as separate <p> elements in the About section. */
    summary: readonly string[];
    email: string;
    location: string;
    /** Spoken languages, with proficiency. */
    languages: string;
    resumeUrl: string;
    avatar: string;
    github: string;
    linkedin: string;
}

export interface SocialLink {
    label: string;
    href: string;
    icon: LucideIcon;
    /** mailto: links must not get target="_blank"/rel. */
    external: boolean;
}

export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    /** Marks the present role - drives the accent timeline marker. */
    current?: boolean;
    highlights: readonly string[];
}

export interface Project {
    name: string;
    href: string;
    /** Displayed as a monospace badge, e.g. "Technical Lead". */
    role: string;
    summary: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
    period: string;
    gpa: string;
}

export interface SkillGroup {
    category: string;
    items: readonly string[];
}

export interface Publication {
    title: string;
    venue: string;
    date?: string;
    /** Optional: the link icon and hover affordance render only when set. */
    url?: string;
}
