import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Publications } from "@/components/sections/publications";
import { Skills } from "@/components/sections/skills";
import { education, experience, profile, skillGroups } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default function HomePage() {
    const currentRole = experience.find((item) => item.current);

    const personJsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        jobTitle: profile.title,
        description: profile.tagline,
        url: SITE_URL,
        image: `${SITE_URL}${profile.avatar}`,
        email: `mailto:${profile.email}`,
        sameAs: [profile.github, profile.linkedin],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Dhaka",
            addressCountry: "BD",
        },
        knowsAbout: skillGroups.flatMap((group) => group.items),
        // Deduplicated: both degrees are from the same institution.
        alumniOf: [
            ...new Set(education.map((item) => item.institution)),
        ].map((name) => ({
            "@type": "CollegeOrUniversity",
            name,
        })),
        ...(currentRole
            ? {
                  worksFor: {
                      "@type": "Organization",
                      name: currentRole.company,
                  },
              }
            : {}),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personJsonLd),
                }}
            />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Publications />
            <Contact />
        </>
    );
}
