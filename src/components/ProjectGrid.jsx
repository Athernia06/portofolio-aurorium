import { useState } from 'react';
import projects from '../data/projects';

function BrowserMockup() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6 transition-transform duration-300 ease-out group-hover:scale-105">
      <div className="flex aspect-[16/10] w-full max-w-sm flex-col overflow-hidden rounded-lg border border-accent/15 bg-white shadow-sm shadow-accent/10">
        <div className="flex items-center gap-2 border-b border-accent/10 bg-light px-3 py-2">
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
      className={`group flex flex-col rounded-2xl border border-accent/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-accent/5 ${
        project.featured ? 'md:col-span-2 md:row-span-2 md:p-8' : ''
      }`}
    >
      {hasLiveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View live demo of ${project.title}`}
          className={`relative block w-full cursor-pointer overflow-hidden rounded-xl border border-primary/15 bg-light transition-shadow duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/15 ${
            project.featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
          }`}
        >
          <div
            aria-hidden="true"
            className={`absolute inset-0 animate-pulse bg-gray-200 transition-opacity duration-500 ${
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
          className={`w-full overflow-hidden rounded-xl border border-primary/15 bg-light ${
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

export default function ProjectGrid() {
  return (
    <section id="projects" className="bg-light py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Selected Work
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-accent md:text-4xl">
          Project Grid
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
