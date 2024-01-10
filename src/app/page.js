import HeaderSection from "@/components/header-section";
import AboutMe from "@/components/about-me";
import SectionTitle from "@/components/section-title";
import Skills from "@/components/skills";
import ProjectSection from "@/components/project-section";
import { projects } from "../../constants/projects";

export default function Home() {
  return (
    <div className="flex flex-col p-10">
      <HeaderSection />
      <SectionTitle title="About Me" />
      <AboutMe />
      <SectionTitle title="Skills" />
      <Skills />
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectSection
            key={index}
            githubLink={project.githubLink}
            description={project.description}
            thumbnail={project.thumbnail}
            i_did={project.i_did}
            techstack={project.techstack}
          />
        ))}
      </div>
    </div>
  );
}
