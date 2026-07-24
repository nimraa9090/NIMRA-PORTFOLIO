export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-10 border-t border-stitch flex flex-wrap items-center justify-between gap-4">
      <span className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} Nimra
      </span>
      <div className="flex gap-6 font-mono text-xs uppercase tracking-wide">
        <a
          href="https://github.com/nimraa9090"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-teal transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
