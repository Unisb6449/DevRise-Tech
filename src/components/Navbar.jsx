import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-[var(--foreground)]"
        >
          Maoroof{" "}
          <span className="text-[var(--accent)]">Bello.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } mode`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-lg bg-[var(--accent)] px-[18px] py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            Let's Work Together
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">

          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } mode`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex w-fit rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;