import { useState } from 'react';
import projects from '../data/projects';

function BrowserMockup() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6 transition-transform duration-300 ease-out group-hover:scale-105">
      <div className="flex aspect-[16/10] w-full max-w-sm flex-col overflow-hidden rounded-lg border border-line bg-card shadow-sm shadow-accent/10">
        <div className="flex items-center gap-2 border-b border-line bg-surface px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-accent/30" />
          <span className="h-2 w-2 rounded-full bg-primary/40" />
          <span className="h-2 w-2 rounded-full bg-primary/20" />
          <span className="ml-2 h-3 flex-1 rounded-full bg-accent/5" />
        </div>
        <div className="flex flex-1 gap-2 p-3">
          <div className="flex w-1/4 flex-col gap-1.5">
            <span className="h-2 w-full rounded-full bg-accent/20" />
            <span className="h-2 w-3/4 rounded-full bg-primary/15" />
            <span className="h-2 w-3/4 rounded-full bg-primary/15" />
            <span className="h-2 w-1/2 rounded-full bg-primary/15" />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <span className="h-2.5 w-1/2 rounded-full bg-accent/25" />
            <div className="grid flex-1 grid-cols-2 gap-2">
              <span className="rounded-md bg-primary/10" />
              <span className="rounded-md bg-accent/10" />
              <span className="rounded-md bg-accent/10" />
              <span className="rounded-md bg-primary/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const hasLiveUrl = Boolean(project.liveUrl) && project.liveUrl !== '#';

  return (
    <article
      className={`group flex flex-col rounded-2xl border border-line bg-card p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-accent/5 ${
        project.featured ? 'md:col-span-2 md:row-span-2 md:p-8' : ''
      }`}
    >
      {hasLiveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View live demo of ${project.title}`}
          className={`relative block w-full cursor-pointer overflow-hidden rounded-xl border border-primary/15 bg-surface transition-shadow duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/15 ${
            project.featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
          }`}
        >
          <div
            aria-hidden="true"
            className={`absolute inset-0 animate-pulse bg-ink/10 transition-opacity duration-500 ${
              isLoaded ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={`https://api.microlink.io/?url=${encodeURIComponent(
              project.liveUrl
            )}&screenshot=true&embed=screenshot.url`}
            alt={`${project.title} live screenshot`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </a>
      ) : (
        <div
          className={`w-full overflow-hidden rounded-xl border border-primary/15 bg-surface ${
            project.featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
          }`}
        >
          <BrowserMockup />
        </div>
      )}

      <div className="mt-6 flex flex-1 flex-col">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {project.category}
        </span>
        <h3
          className={`mt-3 font-heading font-bold text-accent ${
            project.featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-primary">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-6">
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              className="font-heading text-sm font-semibold text-accent transition-colors duration-300 hover:text-primary"
            >
              View Case Study{' '}
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer font-body text-sm font-medium text-primary underline-offset-4 transition-colors duration-300 hover:text-accent hover:underline"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium text-primary underline-offset-4 transition-colors duration-300 hover:text-accent hover:underline"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

const FILTER_TABS = [
  { label: 'All', category: null },
  { label: 'Web Applications', category: 'Web Application & Micro-Frontend' },
  { label: 'Backend Systems', category: 'Web & Backend Engineering' },
  { label: 'Technical SEO', category: 'Technical SEO & Analytics' },
];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const activeTab = FILTER_TABS.find((tab) => tab.label === activeCategory);
  const query = searchQuery.trim().toLowerCase();

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      !activeTab?.category || project.category === activeTab.category;
    const matchesQuery =
      !query ||
      [project.title, project.description, project.category].some((field) =>
        field.toLowerCase().includes(query)
      );
    return matchesCategory && matchesQuery;
  });

  const resetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  return (
    <section id="projects" className="bg-surface py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Selected Work
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-accent md:text-4xl">
          Project Grid
        </h2>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveCategory(tab.label)}
                aria-pressed={activeCategory === tab.label}
                className={`cursor-pointer rounded-full border px-5 py-2 font-heading text-sm font-semibold transition-all duration-300 ease-in-out active:scale-95 ${
                  activeCategory === tab.label
                    ? 'border-transparent bg-primary text-white dark:bg-blue-600'
                    : 'border-slate-400 bg-transparent text-slate-700 hover:border-primary hover:text-primary dark:border-slate-600 dark:text-slate-300 dark:hover:border-accent dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/60"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or tech stack..."
              aria-label="Search projects"
              className="w-full rounded-lg border border-gray-300 bg-card py-2.5 pl-11 pr-4 font-body text-sm text-gray-700 placeholder:text-gray-400 transition-colors duration-300 focus:border-primary focus:outline-none dark:border-slate-600 dark:text-slate-300 dark:placeholder:text-slate-500 dark:focus:border-accent"
            />
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-line bg-card px-6 py-16 text-center">
            <p className="font-body text-sm text-primary">
              No projects found matching your search.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 cursor-pointer rounded-lg border border-transparent bg-primary px-8 py-3 font-heading text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-600/90"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
