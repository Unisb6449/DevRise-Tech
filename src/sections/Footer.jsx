import { ArrowUp, Mail, Phone} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-block text-2xl font-bold tracking-tight text-[var(--foreground)]">
              Maoroof <span className="text-[var(--accent)]">Bello.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">
              Full-stack developer focused on building modern, responsive,
              and user-friendly digital experiences.
            </p>

            <div className="mt-5">
              <p className="text-sm font-semibold text-[var(--foreground)]">
                DevRise Tech
              </p>

              <p className="mt-1 text-sm text-[var(--muted)]">
                Rise. Code. Build.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {[
                ["Home", "home"],
                ["About", "about"],
                ["Skills", "skills"],
                ["Projects", "projects"],
                ["Experience", "experience"],
                ["Services", "services"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="w-fit text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Connect
            </h3>

            <div className="mt-5 space-y-3">

              {/* Email */}
              <a
                href="mailto:yunusamaoroof2022@gmail.com"
                className="flex items-center gap-3 text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]"
              >
                <Mail size={17} />
                <span>yunusamaoroof2022@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+2349154212124"
                className="flex items-center gap-3 text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]"
              >
                <Phone size={17} />
                <span>+234 915 421 2124</span>
              </a>

              {/* WhatsApp */}
                <a
                  href="https://wa.me/2349154212124?text=Hello%20Maoroof%2C%20I%20came%20across%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]">
                  <FaWhatsapp size={20} />
                  <span>WhatsApp</span>
                </a>
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-3">

              <a
                href="https://github.com/Unisb6449"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]">
                <FaGithub size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/maoroof-yunusa"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaXTwitter size={16} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-5 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-[var(--muted)] sm:text-sm">
            © {currentYear} Maoroof Bello. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-xs text-[var(--muted)] sm:text-sm">
              Built with React & Tailwind CSS
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <ArrowUp size={17} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;