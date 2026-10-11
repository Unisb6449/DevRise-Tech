import { ArrowUpRight, Code2, Server, Rocket } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Building with purpose,
            <span className="text-[var(--accent)]"> growing every day.</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">

          {/* Left Side */}
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
              
              {/* Decorative Element */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[var(--accent)]/20" />

              <div className="relative">
                <Code2
                  size={32}
                  className="mb-6 text-[var(--accent)]"
                />

                <h3 className="text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
                  Who I Am
                </h3>

                <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                  I'm{" "}
                  <span className="font-medium text-[var(--foreground)]">
                    Maoroof Yunusa Bello
                  </span>
                  , a software developer passionate about building modern,
                  responsive, and user-friendly web experiences.
                </p>

                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  I enjoy turning ideas into practical digital products,
                  solving problems with code, and continuously improving my
                  skills through real-world projects.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              I work primarily with JavaScript and React, while expanding my
              backend skills with Node.js and MongoDB. My goal is to create
              digital experiences that are not only visually appealing, but
              also functional, accessible, and easy to use.
            </p>

            {/* Focus Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              {/* Frontend */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]">
                <Code2
                  size={24}
                  className="text-[var(--accent)]"
                />

                <h3 className="mt-4 text-base font-semibold text-[var(--foreground)]">
                  Frontend
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Responsive interfaces with React and modern CSS tools.
                </p>
              </div>

              {/* Backend */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]">
                <Server
                  size={24}
                  className="text-[var(--accent)]"
                />

                <h3 className="mt-4 text-base font-semibold text-[var(--foreground)]">
                  Backend
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Learning and building APIs with Node.js and databases.
                </p>
              </div>

              {/* Growth */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]">
                <Rocket
                  size={24}
                  className="text-[var(--accent)]"
                />

                <h3 className="mt-4 text-base font-semibold text-[var(--foreground)]">
                  Growth
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Always learning, building, and improving through projects.
                </p>
              </div>

            </div>

            {/* DevRise */}
            <div className="mt-8 flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-sm font-medium text-[var(--accent)]">
                  Building with DevRise Tech
                </p>

                <p className="mt-1 text-sm text-[var(--muted)]">
                  Rise. Code. Build.
                </p>
              </div>

              <a
                href="#projects"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
              >
                Explore my work
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;