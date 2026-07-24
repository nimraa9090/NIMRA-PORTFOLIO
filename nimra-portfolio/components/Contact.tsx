export default function Contact() {
  const email = "your.email@example.com"; // TODO: replace with your real email

  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-28 border-t border-stitch"
    >
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 items-center">
        <div>
          <span className="font-mono text-xs tracking-[0.2em] text-teal uppercase">
            Contact
          </span>
          <h2 className="font-display text-4xl text-paper mt-4 leading-tight">
            Let&apos;s build
            <br />
            something.
          </h2>
        </div>

        <div className="max-w-xl">
          <p className="text-muted leading-relaxed mb-8">
            Open to internships, collaborations, and interesting problems.
            The fastest way to reach me is email — I read everything.
          </p>

          <a
            href={`mailto:${email}`}
            className="spec-corner inline-flex items-center gap-4 border border-stitch px-6 py-4 font-mono text-sm text-paper hover:border-teal hover:text-teal transition-colors"
          >
            {email}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
