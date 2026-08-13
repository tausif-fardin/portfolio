import HeaderSection from "@/components/header-section";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import ProjectSection from "@/components/project-section";
import ContactSection from "@/components/contacts";

export default function Home() {
    return (
        <>
            <HeaderSection />
            <Skills />
            <Experience />
            <ProjectSection />
            <ContactSection />
        </>
    );
}
