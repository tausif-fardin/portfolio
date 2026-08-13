import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { skillGroups } from "@/lib/content";

export function Skills() {
    return (
        <Section id="skills" label="Skills">
            <dl className="space-y-7">
                {skillGroups.map((group, index) => (
                    <Reveal
                        key={group.category}
                        delay={index * 0.04}
                        className="grid gap-2 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4"
                    >
                        <dt className="eyebrow sm:pt-1.5">{group.category}</dt>
                        <dd>
                            <ul className="flex flex-wrap gap-1.5">
                                {group.items.map((item) => (
                                    <Tag key={item}>{item}</Tag>
                                ))}
                            </ul>
                        </dd>
                    </Reveal>
                ))}
            </dl>
        </Section>
    );
}
