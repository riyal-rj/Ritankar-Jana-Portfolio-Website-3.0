import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CursorDot } from "@/components/CursorDot";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { OtherExperiences } from "@/components/OtherExperiences";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <main className="relative">
      <CursorDot />
      <SiteHeader />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Experience />
      <Education />
      <OtherExperiences />
      <Contact />
      <SiteFooter />
    </main>
  );
}
