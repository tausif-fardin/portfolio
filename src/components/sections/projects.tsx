import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { projects } from "@/lib/content";

export function Projects() {
    return (
        <Section id="projects" label="Projects">
            <ul className="grid gap-4 md:grid-cols-2">
                {projects.map((project, index) => (
                    <li key={project.name}>
                        <Reveal delay={index * 0.05} className="h-full">
                            <article className="group flex h-full flex-col rounded-lg border border-border bg-surface p-5 transition-colors hover:border-muted/40">
                                <h3 className="text-[15px] font-medium tracking-tight">
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label={`${project.name} — ${project.linkLabel}`}
                                        className="inline-flex items-start gap-1"
                                    >
                                        <span>{project.name}</span>
                                        <ArrowUpRight
                                            aria-hidden="true"
                                            className="mt-[3px] h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-foreground"
                                            strokeWidth={2}
                                        />
                                    </a>
                                </h3>

                                <ul className="mt-3 flex-1 space-y-1.5">
                                    {project.highlights.map((highlight) => (
                                        <li
                                            key={highlight}
                                            className="flex gap-2.5 text-sm leading-relaxed text-muted"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="mt-[10px] h-px w-2 shrink-0 bg-border"
                                            />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <ul className="mt-5 flex flex-wrap gap-1.5">
                                    {project.stack.map((tech) => (
                                        <Tag key={tech}>{tech}</Tag>
                                    ))}
                                </ul>
                            </article>
                        </Reveal>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
