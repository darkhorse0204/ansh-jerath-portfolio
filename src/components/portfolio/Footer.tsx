import { Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export function Footer() {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative mt-12 border-t border-border px-4 pb-10 pt-12 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-primary opacity-60" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground">
              AJ
            </span>
            <span className="font-display text-base font-semibold">Ansh Jerath</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Crafted with{" "}
            <span className="text-electric transition-colors hover:text-cyber">passion</span> and{" "}
            <span className="text-cyber transition-colors hover:text-electric">purpose</span>. ©{" "}
            {new Date().getFullYear()} Ansh Jerath.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {[
            { Icon: Github, href: "https://github.com/anshjerath", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/ansh-jerath-a25412214", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:jerathansh@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="glass flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:text-electric hover:shadow-glow-primary"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
