import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
