import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { certifications, education } from "@/lib/content";

export function Education() {
    return (
        <Section id="education" label="Education">
            <ol className="space-y-7">
                {education.map((item, index) => (
                    <li key={item.degree}>
                        <Reveal delay={index * 0.05}>
                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                <h3 className="max-w-measure text-pretty text-base font-medium tracking-tight">
                                    {item.degree}
                                </h3>
                                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                                    {item.period}
                                </p>
                            </div>
                            <p className="mt-1 text-sm text-muted">
                                {item.institution}
                            </p>
                            <p className="mt-1.5 font-mono text-xs text-muted">
                                GPA {item.gpa}
                            </p>
                        </Reveal>
                    </li>
                ))}
            </ol>

            {certifications.length > 0 && (
                <Reveal delay={0.1}>
                    <div className="mt-9 border-t border-border pt-6">
                        <p className="eyebrow">Certifications</p>
                        <ul className="mt-2.5 space-y-1.5">
                            {certifications.map((certification) => (
                                <li
                                    key={certification}
                                    className="text-body text-foreground/80"
                                >
                                    {certification}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            )}
        </Section>
    );
}
