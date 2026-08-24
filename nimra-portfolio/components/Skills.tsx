const skills = [
  "Next.js",
  "TypeScript",
  "React Native (Expo)",
  "Supabase",
  "Groq API",
  "Python",
  "PyTorch",
  "Machine Learning",
  "NLP",
  "Reinforcement Learning",
  "LLM Integration",
  "Agentic AI",
  "Vercel",
];

const certifications = [
  "Claude 101 & Claude Code 101 — Anthropic",
  "RDMA over Converged Ethernet (RoCE) — NVIDIA",
  "Google AI Studio",
  "Python for Cyber Security Automation",
  "Programming Using Python",
];

const experience = [
  {
    role: "Founder & Full-Stack Developer",
    org: "Goniaa Fashion",
    period: "Jan 2026 — Present",
    points: [
      "Solo-architected and shipped a full-stack AI fashion e-commerce ecosystem: Next.js 15 storefront, React Native (Expo) mobile app, and an 11-tab AI Brand Manager dashboard",
      "Integrated Groq's Llama 3.3 70B into the dashboard for inventory insight and brand consistency checks",
      "Owned every layer solo — architecture, auth, database design, deployment, and debugging",
    ],
  },
  {
    role: "Software Development Job Simulation",
    org: "Citi (via Forage)",
    period: "Jul 2026",
    points: [
      "Modeled a loan management process in UML and researched ML approaches for credit risk assessment",
      "Built a Java tool to visualize stock market risk in real time",
    ],
  },
  {
    role: "Information Technology Intern",
    org: "Frontier Works Organization, Pakistan",
    period: "Jul 2025 — Sep 2025",
    points: [
      "Provided IT support and network monitoring for the IT Directorate",
      "Supported database management and AI-related data preparation",
      "Assisted with software testing and technical documentation",
    ],
  },
];

export default function SkillsAndExperience() {
  return (
    <>
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

      <section className="px-6 md:px-16 py-28 border-t border-stitch">
        <span className="font-mono text-xs tracking-[0.2em] text-teal uppercase">
          Experience
        </span>
        <h2 className="font-display text-3xl text-paper mt-4 mb-12">
          Where I've worked
        </h2>
        <div className="space-y-12">
          {experience.map((job) => (
            <div key={job.role} className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="font-mono text-xs text-muted">{job.period}</p>
                <p className="font-body text-sm text-thread mt-1">{job.org}</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display text-xl text-paper mb-3">
                  {job.role}
                </h3>
                <ul className="space-y-2">
                  {job.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 text-muted font-body text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-stitch shrink-0 mt-2" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
