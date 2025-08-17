import HeaderSection from "@/components/header-section";
import Skills from "@/components/skills";
import ProjectSection from "@/components/project-section";
import Experience from "@/components/experience";
import PublicationsSection from "@/components/publications";
import ContactSection from "@/components/contacts";

export default function Home() {
    return (
        <>
            <HeaderSection />
            <Skills />
            <Experience />
            <ProjectSection />
            <PublicationsSection />
            <ContactSection />
        </>
    );
}
