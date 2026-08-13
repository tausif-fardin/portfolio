import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { projects } from "@/lib/content";

/** Display host for a project URL — derived so it can never drift from `href`. */
function displayDomain(href: string): string {
    return new URL(href).hostname.replace(/^www\./, "");
}

export function Projects() {
    return (
        <Section id="projects" label="Selected Work">
            <Reveal>
                <p className="text-[15px] leading-relaxed text-muted">
                    Production systems built at ZAAG SYSTEMS.
                </p>

                <ol className="mt-6 divide-y divide-border border-y border-border">
                    {projects.map((project) => (
                        <li key={project.name}>
                            <a
                                href={project.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="group -mx-3 block rounded-md px-3 py-5 transition-colors hover:bg-surface"
                            >
                                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                    <h3 className="text-[15px] font-medium tracking-tight">
                                        {project.name}
                                    </h3>
                                    <p className="eyebrow shrink-0">
                                        {project.role}
                                    </p>
                                </div>

                                <p className="mt-1.5 flex items-center gap-1 font-mono text-xs text-muted">
                                    {displayDomain(project.href)}
                                    <ArrowUpRight
                                        aria-hidden="true"
                                        className="h-3 w-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                                        strokeWidth={2}
                                    />
                                </p>

                                <p className="mt-2.5 text-pretty text-[15px] leading-relaxed text-muted">
                                    {project.summary}
                                </p>
                            </a>
                        </li>
                    ))}
                </ol>
            </Reveal>
        </Section>
    );
}
