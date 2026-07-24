const skills = [
  "Next.js",
  "TypeScript",
  "React Native (Expo)",
  "Supabase",
  "Groq API",
  "Python",
  "PyTorch",
  "Vercel",
];

const certifications = [
  "Graphic Design",
  "Cybersecurity",
  "Python",
  "Freelancing",
  "Google AI Studio"
  "claude 101 & claude code 101 by anthropic"
  "RDMA (roce) by Nvidia",
];

export default function Skills() {
  return (
    <section className="px-6 md:px-16 py-28 border-t border-stitch">
      <div className="grid md:grid-cols-2 gap-14">
        <div>
          <span className="font-mono text-xs tracking-[0.2em] text-teal uppercase">
            Stack
          </span>
          <h2 className="font-display text-3xl text-paper mt-4 mb-8">
            Tools I build with
          </h2>
          <ul className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <li
                key={s}
                className="font-mono text-xs text-paper border border-stitch px-3 py-2"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="font-mono text-xs tracking-[0.2em] text-thread uppercase">
            Certifications
          </span>
          <h2 className="font-display text-3xl text-paper mt-4 mb-8">
            Credentials
          </h2>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 text-muted font-body text-sm"
              >
                <span className="w-1.5 h-1.5 bg-thread shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
