export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-16 py-24 overflow-hidden">
      {/* faint pattern-paper grid, ambient only */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#4FA8A0 1px, transparent 1px), linear-gradient(90deg, #4FA8A0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-4xl">
        <div className="spec-corner inline-flex items-center gap-3 border border-stitch px-4 py-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-thread" />
          <span className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
            Spec — Nimra / AI Developer
          </span>
        </div>

        <h1 className="font-display text-[13vw] leading-[0.95] md:text-8xl text-paper mb-8">
          Building where
          <br />
          <span className="italic text-teal">AI</span> meets{" "}
          <span className="italic text-thread">fashion</span>.
        </h1>

        <p className="max-w-xl text-lg text-muted font-body mb-12">
          BS Artificial Intelligence student and solo developer. Currently
          building Goniaa, an AI-powered fashion e-commerce ecosystem — from
          storefront to brand-manager dashboard to mobile app.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#projects"
            className="font-mono text-sm tracking-wide uppercase bg-paper text-ink px-6 py-3 hover:bg-teal transition-colors"
          >
            View work
          </a>
          <a
            href="#contact"
            className="font-mono text-sm tracking-wide uppercase text-paper border-b border-stitch pb-1 hover:border-thread hover:text-thread transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="stitch-divider absolute bottom-10 left-6 right-6 md:left-16 md:right-16" />
    </section>
  );
}
