import HeaderSection from "@/components/header-section";
import AboutMe from "@/components/about-me";
import SectionTitle from "@/components/section-title";
export default function Home() {
  return (
    <div className="flex flex-col p-10">
      <HeaderSection />
      <SectionTitle title="About Me" />
      <AboutMe />
    </div>
  );
}
