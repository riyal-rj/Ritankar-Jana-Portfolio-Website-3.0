import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { OtherExperiences } from "@/components/OtherExperiences";
import { Projects } from "@/components/Projects";
import { Recommendations } from "@/components/Recommendations";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <About />
      <Experience />
      <Recommendations />
      <Projects />
      <Stack />
      <Education />
      <OtherExperiences />
      <Contact />
      <SiteFooter />
    </main>
  );
}
