import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";

import {
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const technologies = [
  {
    name: "HTML",
    icon: FaHtml5,
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
  },
  {
    name: "JavaScript",
    icon: FaJs,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
  {
    name: "GitHub",
    icon: FaGithub,
  },
];

function TechStack() {
  return (
    <section
      id="skills"
      className="border-y border-[var(--border)] bg-[var(--surface)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            My Stack
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
            Tools and technologies I use to build modern, responsive and
            user-friendly digital experiences.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.name}
                className="group flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg"
              >
                <Icon
                  size={30}
                  className="text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--accent)]"
                />

                <span className="text-sm font-medium text-[var(--foreground)] sm:text-base">
                  {technology.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;