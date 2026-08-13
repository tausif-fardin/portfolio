import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { experience } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Experience() {
    return (
        <Section id="experience" label="Experience">
            <ol>
                {experience.map((item, index) => (
                    <li
                        key={`${item.company}-${item.role}`}
                        className="relative pb-10 pl-7 last:pb-0"
                    >
                        {/* Timeline marker — the accent dot flags the current role. */}
                        <span
                            aria-hidden="true"
                            className={cn(
                                "absolute left-0 top-[7px] h-2 w-2 -translate-x-1/2 rounded-full ring-4 ring-background",
                                item.current ? "bg-accent" : "bg-border",
                            )}
                        />
                        {index < experience.length - 1 && (
                            <span
                                aria-hidden="true"
                                className="absolute bottom-0 left-0 top-5 w-px -translate-x-1/2 bg-border"
                            />
                        )}

                        <Reveal>
                            <article>
                                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                    <h3 className="text-base font-medium tracking-tight">
                                        {item.role}
                                    </h3>
                                    <p className="font-mono text-xs uppercase tracking-wider text-muted">
                                        {item.period}
                                    </p>
                                </div>
                                <p className="mt-1 text-sm text-muted">
                                    {item.company}
                                </p>

                                <ul className="mt-4 space-y-2.5">
                                    {item.highlights.map((highlight) => (
                                        <li
                                            key={highlight}
                                            className="flex gap-3 text-[15px] leading-relaxed text-muted"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="mt-[11px] h-px w-3 shrink-0 bg-border"
                                            />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </Reveal>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
