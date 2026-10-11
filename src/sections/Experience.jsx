import { Code2, GraduationCap, Laptop, Rocket } from "lucide-react";

const journey = [
  {
    year: "2022",
    title: "Started Coding",
    organization: "Beginning of My Journey",
    description:
      "Started my coding journey with HTML and CSS, building a strong foundation in web development and learning how websites are structured and styled.",
    icon: Code2,
  },
  {
    year: "2023",
    title: "Frontend Development",
    organization: "CWW Tech Africa",
    description:
      "Joined CWW Tech Africa and continued developing my frontend development skills through practical learning and hands-on experience.",
    icon: Laptop,
  },
  {
    year: "2023",
    title: "Frontend Development",
    organization: "Tech Crush",
    description:
      "Joined Tech Crush and continued growing my frontend development knowledge while gaining more practical experience building for the web.",
    icon: Rocket,
  },
  {
    year: "2026",
    title: "Full-Stack Development",
    organization: "Plural Code Academy",
    description:
      "Joined Plural Code Academy to expand beyond frontend development and pursue full-stack development, including backend technologies and databases.",
    icon: GraduationCap,
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            My Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            From Learning to Building
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
            A journey of continuous learning, practical experience, and
            growth in software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-14 max-w-4xl">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-[var(--border)] sm:left-1/2 sm:block" />

          <div className="space-y-10 sm:space-y-0">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={`${item.year}-${item.organization}`}
                  className="relative sm:min-h-56"
                >

                  {/* Desktop Year */}
                  <div
                    className={`absolute top-0 hidden w-1/2 sm:block ${
                      isEven
                        ? "right-0 pl-12 text-left"
                        : "left-0 pr-12 text-right"
                    }`}
                  >
                    <span className="text-sm font-bold tracking-wider text-[var(--accent)]">
                      {item.year}
                    </span>
                  </div>

                  {/* Timeline Icon */}
                  <div className="relative z-10 mb-5 flex sm:absolute sm:left-1/2 sm:top-0 sm:mb-0 sm:-translate-x-1/2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] shadow-sm">
                      <Icon size={19} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`sm:w-1/2 ${
                      isEven
                        ? "sm:ml-0 sm:pr-12"
                        : "sm:ml-auto sm:pl-12"
                    }`}
                  >
                    {/* Mobile Year */}
                    <span className="text-sm font-bold tracking-wider text-[var(--accent)] sm:hidden">
                      {item.year}
                    </span>

                    <div className="mt-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg sm:mt-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                        {item.organization}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-14 max-w-3xl text-center sm:mt-20">
          <p className="text-lg font-medium leading-8 text-[var(--foreground)] sm:text-xl">
            Every step has brought me closer to becoming the developer I
            aspire to be.
          </p>

          <p className="mt-2 text-sm text-[var(--muted)] sm:text-base">
            Still learning. Still building. Still growing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;