const SKILL_GROUPS = [
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    skills: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 'backend-systems',
    title: 'Backend & Systems',
    skills: ['Laravel', 'PHP'],
  },
  {
    id: 'it-infrastructure-seo',
    title: 'IT Infrastructure & SEO',
    skills: ['Web Analytics', 'CPanel & Hosting Admin'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-surface py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Capabilities
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-accent md:text-4xl">
          Skills & Expertise
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl border border-line bg-card p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <h3 className="font-heading text-lg font-bold text-accent">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-400 px-4 py-1.5 font-body text-sm font-medium text-slate-700 transition-colors duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
