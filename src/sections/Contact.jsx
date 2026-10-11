import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message: "Message sent successfully",
      });

      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[var(--background)] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Let's Work Together
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
            Have a project, idea, or opportunity in mind? I'd love to hear
            from you. Let's create something meaningful together.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">

          {/* Left Side */}
          <div className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
                Contact Me
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
                Let's bring your idea to life.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                Whether you're looking for a developer, have a project in
                mind, or simply want to connect, feel free to reach out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-8 space-y-4">

              {/* Email */}
              <a
                href="mailto:yunusamaoroof2022@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all duration-300 hover:border-[var(--accent)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--accent)]">
                  <Mail size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-[var(--muted)]">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-medium text-[var(--foreground)]">
                    yunusamaoroof2022@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+2349154212124"
                className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all duration-300 hover:border-[var(--accent)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--accent)]">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs text-[var(--muted)]">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                    +234 915 421 2124
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2349154212124?text=Hello%20Maoroof%2C%20I%20came%20across%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all duration-300 hover:border-[var(--accent)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--accent)]">
                  <FaWhatsapp size={24} />
                </div>

                <div>
                  <p className="text-xs text-[var(--muted)]">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                    +234 915 421 2124
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--accent)]">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs text-[var(--muted)]">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                    Nigeria
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-auto pt-8">
              <p className="mb-4 text-sm font-medium text-[var(--muted)]">
                Connect with me
              </p>

              <div className="flex gap-3">

                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]">
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/maoroof-yunusa"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]">
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href="#"
                  aria-label="X"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]">
                  <FaXTwitter size={17} />
                </a>

              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">

            <form ref={form} onSubmit={sendEmail} className="space-y-5">

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter Your Full Name"
                    required
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email Address"
                    required
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry"
                  required
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me a little about your project..."
                  required
                  className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`rounded-lg border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-green-500/30 text-green-500"
                      : "border-red-500/30 text-red-500"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}

                {!isSending && <ArrowUpRight size={17} />}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;