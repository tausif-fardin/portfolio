import type { NavItem } from "./types";

/**
 * Absolute origin of the deployed site. Used for canonical URLs, the sitemap
 * and Open Graph asset resolution.
 *
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment — the fallback below
 * is only a placeholder for local development.
 */
export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tausif-fardin.vercel.app";

export const NAV_ITEMS: readonly NavItem[] = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
];
