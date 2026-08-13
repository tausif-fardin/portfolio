import type { NavItem } from "./types";

/**
 * Absolute origin of the deployed site. Used for canonical URLs, the sitemap
 * and Open Graph asset resolution.
 *
 * The default is the live production origin; set NEXT_PUBLIC_SITE_URL only to
 * override it (preview deployments, a future custom domain).
 */
export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tausifsodyssey.vercel.app";

export const NAV_ITEMS: readonly NavItem[] = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Selected Work" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
];
