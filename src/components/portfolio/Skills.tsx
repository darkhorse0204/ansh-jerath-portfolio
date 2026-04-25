import { Cpu, Layers, Wrench } from "lucide-react";
import { GradientBorderCard, RevealOnScroll, SectionHeader, TechBadge } from "./primitives";

const CATEGORIES = [
  {
    Icon: Cpu,
    title: "Languages & Frameworks",
    accent: "electric" as const,
    items: ["C / C++", "Python", "Java", "JavaScript", "React", "Node.js", "Express", "Flask", "MySQL", "MongoDB"],
  },
  {
    Icon: Wrench,
    title: "Tools & Platforms",
    accent: "cyber" as const,
    items: ["Power BI", "Figma", "Selenium", "AWS", "Cisco Packet Tracer", "Advanced Excel", "Git", "Linux"],
  },
  {
    Icon: Layers,
    title: "Core Areas",
    accent: "mint" as const,
    items: ["DSA", "Networking", "Cloud", "Data Viz", "Software Dev", "Edge AI", "ML Systems"],
  },
];

const MARQUEE_TOP = [
  "Python", "PyTorch", "TensorFlow", "XGBoost", "Random Forest", "CNN", "OpenCV", "YOLO",
  "Flask", "FastAPI", "Node.js", "Express", "React", "MongoDB", "MySQL", "AWS", "Gemini",
  "Tesseract.js", "Power BI", "Selenium",
];
const MARQUEE_BOTTOM = [
  "C++", "Java", "JavaScript", "TypeScript", "DSA", "Networking", "Edge AI", "DSP",
  "Webhooks", "Apps Script", "Socket.IO", "HighCharts", "Cisco PT", "Advanced Excel",
  "Figma", "Linux", "Git", "AWS Lambda", "MongoDB Atlas", "Gradient Boosting",
];

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask marquee-pause overflow-hidden">
      <div className={`flex w-max gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="glass rounded-full px-4 py-2 font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          overline="04 — Skills"
          title="The"
          highlight="toolkit"
          subtitle="Languages, platforms, and the disciplines that hold them together."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <RevealOnScroll key={c.title} delay={i * 0.06}>
              <GradientBorderCard className="h-full" glow={c.accent === "cyber" ? "cyber" : "primary"}>
                <c.Icon
                  className={
                    c.accent === "electric"
                      ? "text-electric"
                      : c.accent === "cyber"
                      ? "text-cyber"
                      : "text-mint"
                  }
                />
                <h3 className="mt-3 font-display text-lg font-semibold">{c.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.items.map((s) => (
                    <TechBadge key={s} accent={c.accent}>{s}</TechBadge>
                  ))}
                </div>
              </GradientBorderCard>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-14 space-y-3">
          <Marquee items={MARQUEE_TOP} />
          <Marquee items={MARQUEE_BOTTOM} reverse />
        </div>
      </div>
    </section>
  );
}
