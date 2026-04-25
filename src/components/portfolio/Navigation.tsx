import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState("hero");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const ids = ["hero", ...NAV_ITEMS.map((n) => n.id)];
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              go("hero");
            }}
            className={cn(
              "group flex items-center gap-2 rounded-full px-3 py-1.5 transition-all",
              scrolled && "glass",
            )}
            aria-label="Ansh Jerath — home"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground shadow-glow-primary">
              AJ
            </span>
            <span className="hidden font-display text-sm font-semibold sm:inline">
              ansh<span className="text-muted-foreground">.jerath</span>
            </span>
          </a>

          <nav
            className={cn(
              "hidden items-center gap-1 rounded-full px-2 py-1.5 transition-all md:flex",
              scrolled ? "glass" : "",
            )}
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
                  active === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === item.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-gradient-primary opacity-20" />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go("contact")}
              className="hidden rounded-full bg-gradient-primary px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-glow-primary transition-transform hover:scale-105 sm:inline-flex"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="absolute inset-0 -z-10 bg-aurora opacity-50" />
        {NAV_ITEMS.map((item, i) => (
          <button
            key={item.id}
            onClick={() => go(item.id)}
            className="font-display text-3xl font-bold transition-transform hover:scale-110"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            <span className="text-muted-foreground">0{i + 1}.</span>{" "}
            <span className="text-gradient">{item.label}</span>
          </button>
        ))}
        <button
          onClick={() => go("contact")}
          className="mt-4 rounded-full bg-gradient-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-glow-primary"
        >
          Let's Talk
        </button>
      </div>
    </>
  );
}
