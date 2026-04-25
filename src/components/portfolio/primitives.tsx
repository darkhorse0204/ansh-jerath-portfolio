import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function RevealOnScroll({
  children,
  delay = 0,
  y = 24,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const MotionTag = motion(Tag as any);
  return (
    <MotionTag
      ref={ref as any}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function SectionHeader({
  overline,
  title,
  highlight,
  subtitle,
  align = "center",
}: {
  overline: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("mb-14 max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <RevealOnScroll>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-electric">/</span> {overline}
        </span>
      </RevealOnScroll>
      <RevealOnScroll delay={0.05}>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl">
          {title}
          {highlight ? (
            <>
              {" "}
              <span className="text-gradient">{highlight}</span>
            </>
          ) : null}
        </h2>
      </RevealOnScroll>
      {subtitle ? (
        <RevealOnScroll delay={0.1}>
          <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        </RevealOnScroll>
      ) : null}
      <RevealOnScroll delay={0.15}>
        <div
          className={cn(
            "mt-6 h-px w-24 bg-gradient-primary opacity-80",
            align === "center" ? "mx-auto" : "",
          )}
        />
      </RevealOnScroll>
    </div>
  );
}

export function GradientBorderCard({
  children,
  className,
  amber = false,
  glow = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  amber?: boolean;
  glow?: "primary" | "cyber" | "none";
}) {
  return (
    <div
      className={cn(
        "gradient-border glass-strong rounded-2xl p-6 transition-all duration-300",
        amber && "gradient-border-amber",
        glow === "primary" && "hover:shadow-glow-primary",
        glow === "cyber" && "hover:shadow-glow-cyber",
        "hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function TechBadge({ children, accent = "electric" }: { children: React.ReactNode; accent?: "electric" | "cyber" | "mint" | "amber" }) {
  const colorMap: Record<string, string> = {
    electric: "border-[color:color-mix(in_oklab,var(--electric)_45%,transparent)] text-[color:var(--electric)] bg-[color:color-mix(in_oklab,var(--electric)_10%,transparent)]",
    cyber: "border-[color:color-mix(in_oklab,var(--cyber)_45%,transparent)] text-[color:var(--cyber)] bg-[color:color-mix(in_oklab,var(--cyber)_10%,transparent)]",
    mint: "border-[color:color-mix(in_oklab,var(--mint)_45%,transparent)] text-[color:var(--mint)] bg-[color:color-mix(in_oklab,var(--mint)_10%,transparent)]",
    amber: "border-[color:color-mix(in_oklab,var(--amber-glow)_55%,transparent)] text-[color:var(--amber-glow)] bg-[color:color-mix(in_oklab,var(--amber-glow)_12%,transparent)]",
  };
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium", colorMap[accent])}>
      {children}
    </span>
  );
}

export function ScrollProgressBar() {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full origin-left bg-gradient-primary transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
