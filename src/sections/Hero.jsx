import {
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--background)] pt-20">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--accent)]/[0.04] blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[var(--accent)]/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-8 lg:py-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">

          {/* ==================================================
              LEFT — INTRODUCTION
          ================================================== */}
          <div className="max-w-2xl">

            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              </span>

              <span className="text-xs font-medium tracking-wide text-[var(--muted)]">
                Available for freelance &amp; full-time opportunities
              </span>
            </div>

            {/* Greeting */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              Maoroof{" "}
              <span className="text-[var(--accent)]">
                Yunusa
              </span>

              <br />

              Bello.
            </h1>

            {/* Professional title */}
            <h2 className="mt-7 text-xl font-semibold leading-relaxed text-[var(--foreground)] sm:text-2xl">
              Full-Stack Developer crafting{" "}
              <span className="text-[var(--accent)]">
                modern web solutions.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I build responsive and user-focused web applications that
              combine clean interfaces, reliable functionality, and modern
              development practices.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              {/* Primary CTA */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90">
                View My Work
                <ArrowUpRight size={17} />
              </a>

              {/* CV */}
              <a
                href="/Maoroof-Yunusa-Bello-CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]">
                Download CV
                <Download size={17} />
              </a>
            </div>

            {/* Social / Contact */}
            <div className="mt-9 flex items-center gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/Unisb6449"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaGithub size={17} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/maoroof-yunusa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaLinkedinIn size={17} />
              </a>

              {/* X */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaXTwitter size={16} />
              </a>

              {/* Email */}
              <a
                href="mailto:yunusamaoroof2022@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Mail size={17} />
              </a>

            </div>

            {/* Experience */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--border)] pt-6">

              <div>
                <p className="text-lg font-bold text-[var(--foreground)]">
                  2022
                </p>

                <p className="mt-1 text-xs text-[var(--muted)]">
                  Started coding
                </p>
              </div>

              <div className="h-8 w-px bg-[var(--border)]" />

              <div>
                <p className="text-lg font-bold text-[var(--foreground)]">
                  Full-Stack
                </p>

                <p className="mt-1 text-xs text-[var(--muted)]">
                  Development focus
                </p>
              </div>

              <div className="h-8 w-px bg-[var(--border)]" />

              <div>
                <p className="text-lg font-bold text-[var(--foreground)]">
                  DevRise Tech
                </p>

                <p className="mt-1 text-xs text-[var(--muted)]">
                  Rise. Code. Build.
                </p>
              </div>

            </div>
          </div>

          {/* ==================================================
              RIGHT — DEVELOPER CARD
          ================================================== */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

            {/* Soft glow */}
            <div className="absolute -inset-8 rounded-[2rem] bg-[var(--accent)]/[0.04] blur-3xl" />

            {/* Main card */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">

              {/* Browser / Editor header */}
              <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>

                <span className="font-mono text-xs text-[var(--muted)]">
                  developer.js
                </span>

              </div>

              {/* Code */}
              <div className="overflow-x-auto p-6 sm:p-8">
                <pre className="font-mono text-xs leading-7 sm:text-sm">
                  <code>

                    <span className="text-[var(--muted)]">
                      {"// "}
                    </span>

                    <span className="text-[var(--accent)]">
                      Developer profile
                    </span>

                    {"\n\n"}

                    <span className="text-purple-400">
                      const
                    </span>{" "}

                    <span className="text-[var(--foreground)]">
                      developer
                    </span>{" "}
                    = {"{"}

                    {"\n"}

                    {"  "}
                    <span className="text-[var(--accent)]">
                      name
                    </span>
                    :{" "}

                    <span className="text-green-400">
                      "Maoroof Yunusa Bello"
                    </span>
                    ,

                    {"\n"}

                    {"  "}
                    <span className="text-[var(--accent)]">
                      role
                    </span>
                    :{" "}

                    <span className="text-green-400">
                      "Full-Stack Developer"
                    </span>
                    ,

                    {"\n"}

                    {"  "}
                    <span className="text-[var(--accent)]">
                      started
                    </span>
                    :{" "}

                    <span className="text-orange-400">
                      2022
                    </span>
                    ,

                    {"\n"}

                    {"  "}
                    <span className="text-[var(--accent)]">
                      stack
                    </span>
                    : [

                    {"\n"}

                    {"    "}
                    <span className="text-green-400">
                      "HTML"
                    </span>
                    ,{" "}

                    <span className="text-green-400">
                      "CSS"
                    </span>
                    ,{" "}

                    <span className="text-green-400">
                      "Bootstrap"
                    </span>
                    ,

                    {"\n"}

                    {"    "}
                    <span className="text-green-400">
                      "Tailwind CSS"
                    </span>
                    ,{" "}

                    <span className="text-green-400">
                      "React"
                    </span>
                    ,

                    {"\n"}

                    {"    "}
                    <span className="text-green-400">
                      "Node.js"
                    </span>
                    ,{" "}

                    <span className="text-green-400">
                      "MongoDB"
                    </span>

                    {"\n"}

                    {"  "}],

                    {"\n"}

                    {"  "}
                    <span className="text-[var(--accent)]">
                      mindset
                    </span>
                    :{" "}

                    <span className="text-green-400">
                      "Build. Learn. Improve."
                    </span>

                    {"\n"}

                    {"}"}

                    {"\n\n"}

                    <span className="text-purple-400">
                      developer
                    </span>
                    .

                    <span className="text-[var(--accent)]">
                      build
                    </span>
                    (
                    <span className="text-green-400">
                      "meaningful products"
                    </span>
                    );

                  </code>
                </pre>
              </div>

              {/* Technology footer */}
              <div className="flex flex-col gap-2 border-t border-[var(--border)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

                <span className="text-xs text-[var(--muted)]">
                  HTML • CSS • React • Node.js • MongoDB
                </span>

                <span className="text-xs font-semibold text-[var(--accent)]">
                  Ready to build
                </span>

              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 shadow-xl sm:block lg:-left-8">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)]/10">
                  <span className="text-sm font-bold text-[var(--accent)]">
                    &lt;/&gt;
                  </span>
                </div>

                <div>
                  <p className="text-xs text-[var(--muted)]">
                    Focus
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-[var(--foreground)]">
                    Web Development
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
