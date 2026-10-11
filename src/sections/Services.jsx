import {
  Code2,
  LayoutDashboard,
  Smartphone,
  Server,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building modern and responsive web interfaces with React, JavaScript, and modern CSS frameworks.",
    icon: Code2,
  },
  {
    title: "Responsive Web Design",
    description:
      "Creating websites that provide a smooth and consistent experience across mobile, tablet, and desktop devices.",
    icon: Smartphone,
  },
  {
    title: "Website Development",
    description:
      "Developing clean and professional websites for businesses, personal brands, portfolios, and landing pages.",
    icon: LayoutDashboard,
  },
  {
    title: "Full-Stack Development",
    description:
      "Building complete web applications by connecting React frontends with Node.js backends, APIs, and MongoDB.",
    icon: Server,
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[var(--surface)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            What I Do
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Services I Provide
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
            I build practical digital solutions focused on clean design,
            responsive experiences, and reliable functionality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl sm:p-7"
              >
                {/* Decorative Circle */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full border border-[var(--accent)]/10 transition-transform duration-500 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] transition-colors duration-300 group-hover:border-[var(--accent)]">
                  <Icon size={23} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mt-6 text-lg font-semibold text-[var(--foreground)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="relative mt-6 flex items-center text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                  <ArrowUpRight size={18} />
                </div>
              </article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 text-center sm:mt-14 sm:p-8">
          <h3 className="text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
            Have a project in mind?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Let's turn your idea into a clean, responsive, and functional
            digital experience.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            Let's Work Together
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;