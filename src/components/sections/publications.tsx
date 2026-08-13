import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { publications } from "@/lib/content";
import type { Publication } from "@/lib/types";

function Entry({ publication }: { publication: Publication }) {
    const meta = publication.date
        ? `${publication.venue} · ${publication.date}`
        : publication.venue;

    const body = (
        <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
                <h3 className="text-pretty text-[15px] font-medium leading-snug tracking-tight">
                    {publication.title}
                </h3>
                <p className="mt-1.5 font-mono text-xs uppercase tracking-wider text-muted">
                    {meta}
                </p>
            </div>
            {publication.url ? (
                <ArrowUpRight
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent"
                    strokeWidth={2}
                />
            ) : null}
        </div>
    );

    if (!publication.url) {
        return <div className="py-5">{body}</div>;
    }

    return (
        <a
            href={publication.url}
            target="_blank"
            rel="noreferrer noopener"
            // Square, full-row highlight: matches the divider width exactly so
            // corners meet the rules flush.
            className="group block py-5 transition-colors hover:bg-surface"
        >
            {body}
        </a>
    );
}

export function Publications() {
    return (
        <Section id="publications" label="Publications">
            <Reveal>
                <ol className="divide-y divide-border border-y border-border">
                    {publications.map((publication) => (
                        <li key={publication.title}>
                            <Entry publication={publication} />
                        </li>
                    ))}
                </ol>
            </Reveal>
        </Section>
    );
}
