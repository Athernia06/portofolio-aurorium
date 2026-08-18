export default function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 pt-24">
        <div className="max-w-3xl">
          <p className="mb-6 font-body text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Clean Engineering, Sophisticated Solutions
          </p>
          <h1 className="font-heading text-5xl font-bold leading-tight text-ink md:text-6xl">
            IT Professional &
            <br />
            Full-Stack Developer
          </h1>
          <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-primary">
            I design and build reliable, minimalist digital products — focused
            on clean architecture, performance, and measurable impact.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-lg border border-transparent bg-primary px-8 py-3.5 font-heading text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-600/90"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-400 px-8 py-3.5 font-heading text-sm font-semibold text-slate-700 transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
