import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
    /** Doubles as the scroll anchor target and the aria-labelledby stem. */
    id: string;
    label: string;
    children: ReactNode;
    className?: string;
}

/**
 * Section shell: a hairline rule, a sticky monospace label in the left rail
 * on large screens, and the content column beside it.
 */
export function Section({ id, label, children, className }: SectionProps) {
    const headingId = `${id}-heading`;

    return (
        <section
            id={id}
            aria-labelledby={headingId}
            className={cn(
                "scroll-mt-16 border-t border-border py-14 sm:py-20",
                className,
            )}
        >
            <div className="container-content grid gap-6 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-12">
                <h2
                    id={headingId}
                    className="eyebrow lg:sticky lg:top-24 lg:self-start lg:pt-1.5"
                >
                    {label}
                </h2>
                <div className="min-w-0">{children}</div>
            </div>
        </section>
    );
}
