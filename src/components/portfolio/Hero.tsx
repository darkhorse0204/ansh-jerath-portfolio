import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

const ROLES = [
  "AI/ML Engineer",
  "Patent Holder",
  "Full-Stack Builder",
  "Edge-AI Inventor",
];

function Typewriter() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    if (reduce) {
      setText(ROLES[0]);
      return;
    }
    const current = ROLES[idx];
    const speed = deleting ? 40 : 75;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1500);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx, reduce]);

  return (
    <span className="text-gradient">
      {text}
      <span className="caret bg-electric" />
    </span>
  );
}

const NAME_WORDS = ["Ansh", "Jerath"];

export function Hero() {
  const reduce = useReducedMotion();

  const onCV = () => {
    toast("Resume coming soon", {
      description: "I'm polishing the final version. Reach out and I'll send it directly.",
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pt-28 sm:px-6"
    >
      {/* Aurora background */}
      <div className="absolute inset-0 -z-10 bg-aurora animate-aurora" aria-hidden />
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          <span className="text-muted-foreground">Available for opportunities</span>
        </motion.div>

        <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-extrabold leading-[0.95] tracking-tighter">
          {NAME_WORDS.map((word, i) => (
            <motion.span
              key={word}
              initial={reduce ? false : { y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mr-4 inline-block overflow-hidden align-bottom"
            >
              <span className={i === 1 ? "text-gradient" : ""}>{word}</span>
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 font-display text-2xl font-semibold sm:text-3xl md:text-4xl"
        >
          I'm a <Typewriter />
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
        >
          Building intelligent systems at the edge — from patent-pending seismic detection to
          serverless AI pipelines. B.Tech IT @ VIT Vellore, shipping ML that ships.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-glow-primary transition-transform hover:scale-[1.03]"
          >
            <Sparkles size={16} />
            View My Work
          </button>
          <button
            onClick={onCV}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface-1 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-electric hover:text-electric"
          >
            <Download size={16} />
            Download CV
          </button>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-10 flex items-center gap-3"
        >
          {[
            { Icon: Github, href: "https://github.com/darkhorse0204", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/ansh-jerath-a25412214", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:jerathansh@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="glass group flex h-11 w-11 items-center justify-center rounded-full transition-all hover:scale-110 hover:text-electric hover:shadow-glow-primary"
            >
              <Icon size={18} />
            </a>
          ))}
          <div className="ml-2 hidden h-px w-12 bg-border sm:block" />
          <a
            href="mailto:jerathansh@gmail.com"
            className="hidden font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            jerathansh@gmail.com
          </a>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
