import { Hero } from "@/components/Hero";
import { SkillStrip } from "@/components/SkillStrip";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillStrip />
      <main>
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
