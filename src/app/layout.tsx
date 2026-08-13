import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

import "./globals.css";

const sans = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-mono",
    weight: ["400", "500"],
});

const title = `${profile.name} — ${profile.title}`;
const description = `${profile.title}. ${profile.tagline}`;

/**
 * Static social card. Regenerate it if the name/title in `profile` changes —
 * it is a committed asset rather than a next/og route, because next/og's
 * bundled asset paths break on Windows builds.
 */
const ogImage = {
    url: "/og.png",
    width: 1200,
    height: 630,
    alt: title,
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: title,
        template: `%s — ${profile.shortName}`,
    },
    description,
    applicationName: profile.name,
    authors: [{ name: profile.name, url: SITE_URL }],
    creator: profile.name,
    keywords: [
        "Tausif Fardin Sinha",
        "Full Stack Engineer",
        "Backend Engineer",
        "System Architect",
        "NestJS",
        "Node.js",
        "TypeScript",
        "React",
        "Next.js",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Scalable API design",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        url: SITE_URL,
        siteName: profile.name,
        title,
        description,
        locale: "en_US",
        images: [ogImage],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${sans.variable} ${mono.variable}`}
        >
            <body className="font-sans">
                <noscript>
                    <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
                </noscript>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <a
                        href="#main"
                        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
                    >
                        Skip to content
                    </a>

                    <div className="flex min-h-screen flex-col">
                        <SiteHeader />
                        <main id="main" className="flex-1">
                            {children}
                        </main>
                        <SiteFooter />
                    </div>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
