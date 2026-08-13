import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { profile } from "@/lib/content";

export function About() {
    return (
        <Section id="about" label="About">
            <Reveal className="max-w-measure space-y-4">
                {profile.summary.map((paragraph, index) => (
                    <p
                        key={paragraph}
                        className={
                            index === 0
                                ? "text-lead text-foreground"
                                : "text-body text-foreground/80"
                        }
                    >
                        {paragraph}
                    </p>
                ))}
            </Reveal>
        </Section>
    );
}
