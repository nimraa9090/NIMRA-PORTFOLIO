import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { supabase, Project } from "@/lib/supabase";
import { fallbackProjects } from "@/lib/fallback-projects";

async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return fallbackProjects;
    }
    return data as Project[];
  } catch {
    // Supabase env vars not set yet, or network issue at build time —
    // fall back so the site never renders empty.
    return fallbackProjects;
  }
}

export default async function Home() {
  const projects = await getProjects();

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
