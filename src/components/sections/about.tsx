import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { profile } from "@/lib/content";

export function About() {
    return (
        <Section id="about" label="About">
            <Reveal className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
                {profile.summary.map((paragraph, index) => (
                    <p
                        key={paragraph}
                        className={index === 0 ? "text-foreground/90" : undefined}
                    >
                        {paragraph}
                    </p>
                ))}
            </Reveal>
        </Section>
    );
}
