import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Awards } from "@/components/portfolio/Awards";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgressBar } from "@/components/portfolio/primitives";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollProgressBar />
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
