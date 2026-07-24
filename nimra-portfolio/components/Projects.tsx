import { Project } from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="spec-corner border border-stitch bg-surface p-7 flex flex-col h-full hover:bg-surface2 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="font-display text-2xl text-paper">{project.title}</h3>
        {project.featured && (
          <span className="font-mono text-[10px] tracking-widest uppercase text-thread border border-thread/40 px-2 py-1 shrink-0">
            Featured
          </span>
        )}
      </div>

      <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] text-teal border border-teal/30 px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-5 font-mono text-xs uppercase tracking-wide">
        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper border-b border-stitch pb-0.5 hover:border-teal hover:text-teal transition-colors"
          >
            Code
          </a>
        )}
        {project.demo_url && (
          <a
            href={project.demo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper border-b border-stitch pb-0.5 hover:border-teal hover:text-teal transition-colors"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="px-6 md:px-16 py-28 border-t border-stitch">
      <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
        <div>
          <span className="font-mono text-xs tracking-[0.2em] text-teal uppercase">
            Selected work
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-paper mt-4">
            Projects
          </h2>
        </div>
        <p className="font-mono text-xs text-muted max-w-xs">
          A running log of what I&apos;ve shipped and studied.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
