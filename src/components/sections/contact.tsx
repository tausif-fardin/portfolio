import { SocialLinks } from "@/components/social-links";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { profile } from "@/lib/content";

export function Contact() {
    return (
        <Section id="contact" label="Contact">
            <Reveal>
                <p className="max-w-measure text-body text-foreground/80">
                    Email is the best way to reach me — for roles,
                    collaborations, or a question about backend architecture.
                </p>

                <dl className="mt-7 space-y-5">
                    <div>
                        <dt className="eyebrow">Email</dt>
                        <dd className="mt-1.5">
                            <a
                                href={`mailto:${profile.email}`}
                                className="text-body underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                            >
                                {profile.email}
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt className="eyebrow">Location</dt>
                        <dd className="mt-1.5 text-body text-muted">
                            {profile.location}
                        </dd>
                    </div>
                    <div>
                        <dt className="eyebrow">Languages</dt>
                        <dd className="mt-1.5 text-body text-muted">
                            {profile.languages}
                        </dd>
                    </div>
                </dl>

                <SocialLinks className="mt-7 -ml-2" />
            </Reveal>
        </Section>
    );
}
