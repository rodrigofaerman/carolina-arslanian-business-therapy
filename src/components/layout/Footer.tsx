import { SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-serif font-bold text-[var(--color-accent)] tracking-wide mb-1">
              BUSINESS THERAPY - MENTORIA MENTAL FITNESS
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">
              {SITE.author} | Mental Fitness Specialist
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)]">
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Email
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Instagram
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="section-divider mt-8 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
          <p>&copy; {year} {SITE.name}. Todos os direitos reservados.</p>
          <p>{SITE.location}</p>
        </div>
      </div>
    </footer>
  );
}
