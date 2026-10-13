
import { ArrowUpRight } from "lucide-react";

import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa6";

import {
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const projects = [
  {
    title: "Modern E-Commerce Platform",
    description:
      "A modern e-commerce experience with responsive layouts, product browsing, and a clean user interface.",
    image: "/images/ecommerce.png",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
    ],
    category: "Full Stack",
    featured: true,
    liveDemo: "",
    github: "",
  },

  {
    title: "Grace Community Church Website",
    description:
      "A modern, responsive church website designed to share the gospel, connect the church community, showcase sermons and events, and help visitors learn more about Grace Community Church.",
    image: "/images/grace-community.PNG",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
    category: "Frontend",
    featured: false,
    liveDemo: "https://grace-community-church-beta.vercel.app",
    github: "https://github.com/Unisb6449/Grace-Community-Church",
  },

  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website designed to showcase my skills, projects, experience, and services with a clean UI and user-friendly experience.",
    image: "/images/maoroof-portfolio.PNG",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    category: "Frontend",
    featured: false,
    liveDemo: "https://maoroofyunusabello.vercel.app",
    github: "https://github.com/Unisb6449/Maoroof-Yunusa-Bello",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[var(--surface)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            My Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
            A selection of projects that showcase my approach to building
            modern and user-focused digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Project Preview */}
              <div
                className={`relative overflow-hidden bg-[var(--surface)] ${
                  project.featured
                    ? "h-64 sm:h-80 lg:h-96"
                    : "h-56 sm:h-64"
                }`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] text-[var(--accent)] shadow-lg">
                        <span className="text-2xl font-bold">
                          {"</>"}
                        </span>
                      </div>

                      <p className="mt-4 text-sm font-medium text-[var(--muted)]">
                        Project Preview
                      </p>
                    </div>
                  </div>
                )}

                {/* Category */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-[var(--border)] bg-[var(--background)]/90 px-3 py-1.5 text-xs font-medium text-[var(--foreground)] backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Information */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                  {/* Project Details */}
                  <div className="max-w-2xl">
                    <h3 className="text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Actions */}
                  <div className="flex shrink-0 gap-2">

                    {/* Live Demo */}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}

                    {/* GitHub */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => {
                    const Icon = technology.icon;

                    return (
                      <span
                        key={technology.name}
                        className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs font-medium text-[var(--muted)] sm:text-sm"
                      >
                        <Icon size={15} />
                        {technology.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/Unisb6449"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            View All Projects
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
