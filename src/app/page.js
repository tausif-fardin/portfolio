import HeaderSection from "@/components/header-section";
import AboutMe from "@/components/about-me";

export default function Home() {
  return (
    <div className="flex flex-col p-10">
      <HeaderSection />
      <AboutMe />
    </div>
  );
}
