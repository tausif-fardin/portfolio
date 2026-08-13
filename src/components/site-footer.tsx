import { profile } from "@/lib/content";

import { SocialLinks } from "./social-links";

export function SiteFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border py-10">
            <div className="container-content flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1.5">
                    <p className="text-sm text-muted">
                        © {year} {profile.name}
                    </p>
                    <p className="font-mono text-xs text-muted">
                        Built with Next.js, TypeScript &amp; Tailwind CSS
                    </p>
                </div>
                <SocialLinks className="-ml-2 sm:ml-0" />
            </div>
        </footer>
    );
}
