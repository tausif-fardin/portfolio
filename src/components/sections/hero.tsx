import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { SocialLinks } from "@/components/social-links";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/lib/content";

export function Hero() {
    return (
        <section
            id="top"
            aria-labelledby="hero-heading"
            className="container-content pb-14 pt-14 sm:pb-20 sm:pt-24"
        >
            <Reveal>
                {/* Decorative: the name in the heading below carries the identity. */}
                <Image
                    src={profile.avatar}
                    alt=""
                    width={56}
                    height={56}
                    priority
                    className="h-14 w-14 rounded-full border border-border object-cover"
                />
            </Reveal>

            <Reveal delay={0.05}>
                <h1
                    id="hero-heading"
                    className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
                >
                    {profile.name}
                </h1>
            </Reveal>

            <Reveal delay={0.1}>
                <p className="mt-3 text-lg text-foreground/90 sm:text-xl">
                    {profile.title}
                </p>
            </Reveal>

            <Reveal delay={0.15}>
                <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted">
                    {profile.tagline}
                </p>
            </Reveal>

            <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-4">
                    <a
                        href={profile.resumeUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group inline-flex h-10 items-center gap-1.5 rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
                    >
                        View Resume
                        <ArrowUpRight
                            aria-hidden="true"
                            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            strokeWidth={2}
                        />
                    </a>
                    <SocialLinks className="-ml-1" />
                </div>
            </Reveal>
        </section>
    );
}
