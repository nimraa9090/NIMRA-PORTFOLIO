const facts = [
  { label: "Program", value: "BS Artificial Intelligence" },
  { label: "University", value: "Hazara University" },
  { label: "Graduating", value: "June 2027" },
  { label: "Base", value: "Pakistan · Remote" },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-28 border-t border-stitch">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-14">
        <div>
          <span className="font-mono text-xs tracking-[0.2em] text-teal uppercase">
            About
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-paper mt-4 leading-tight">
            Learning AI in the
            <br />
            classroom, shipping it
            <br />
            in production.
          </h2>
        </div>

        <div className="space-y-10">
          <p className="text-lg text-muted leading-relaxed max-w-xl">
            I&apos;m an AI student who prefers to learn by building real
            things. Alongside coursework — reinforcement learning, NLP,
            computer vision — I design and build Goniaa, a full fashion
            e-commerce ecosystem, solo: the storefront, an AI brand-manager
            dashboard, and a mobile app, all wired together with Supabase and
            Groq.
          </p>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-xl">
            {facts.map((f) => (
              <div key={f.label} className="border-l border-stitch pl-4">
                <dt className="font-mono text-xs text-muted uppercase tracking-wide">
                  {f.label}
                </dt>
                <dd className="font-body text-paper mt-1">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
