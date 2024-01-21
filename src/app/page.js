import HeaderSection from "@/components/header-section";
import AboutMe from "@/components/about-me";
import SectionTitle from "@/components/section-title";
import Skills from "@/components/skills";
import ProjectSection from "@/components/project-section";
import Experience from "@/components/experience";
import { projects } from "../../constants/projects";
import Publications from "@/components/publications";
import Contacts from "@/components/contacts";

export default function Home() {
  const jobs = [
    {
      title: "Software Engineer",
      location: "Orbit Digital Solutions Ltd.",
      duration: "Oct 2022 - Present",
      details: [
        "Contributed in designing database of a SAAS product.",
        "Developed APIs using Node.js for multiple products such as appointment systems, ecommerce.",
        "Built cross-platform e-commerce mobile app frontend using React Native.",
        "Developed both frontend and backend components for an international ecommerce platform utilizing Next.js.",
      ],
    },
    {
      title: "Software Engineer Intern",
      location: "Entertech",
      duration: "June 2022 - Sep 2022",
      details: [
        "Developed REST API's for a finder app using Node.js and Express.js, enabling efficient data retrieval and processing.",
        "Designed and implemented database structures by writing optimized queries, contributing to data integrity and application performance",
      ],
    },
  ];
  return (
    <div className="flex flex-col p-10">
      <HeaderSection />
      <SectionTitle title="About Me" />
      <AboutMe />
      <SectionTitle title="Experience" />
      <Experience jobs={jobs} />
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
      <SectionTitle title="Publications" />
      <Publications />
      <SectionTitle title="Contacts" />

      <Contacts />
    </div>
  );
}
