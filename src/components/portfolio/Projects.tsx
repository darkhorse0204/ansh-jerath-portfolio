
import { GradientBorderCard, RevealOnScroll, SectionHeader, TechBadge } from "./primitives";

type Project = {
  title: string;
  period: string;
  status: { label: string; accent: "electric" | "cyber" | "amber" | "mint" };
  description: string;
  highlights: string[];
  stack: string[];
  glow?: "primary" | "cyber";
  amber?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "QuakeGuard — Edge-AI Seismic Detection",
    period: "Feb 2026 – Mar 2026",
    status: { label: "Patent Pending", accent: "amber" },
    description:
      "Decentralized edge network syncing acoustic + kinematic streams over UDP. Custom DSP + 5-layer CNN with a logic-gate validator that crushes false positives.",
    highlights: ["0.91 AUC", "38.9 ms latency", "100% false-positive elimination", "App No. 202641024381"],
    stack: ["Edge AI", "CNN", "DSP", "UDP", "Python"],
    amber: true,
  },
  {
    title: "Serverless AI Data Pipeline",
    period: "Mar 2026 – Apr 2026",
    status: { label: "Shipped", accent: "mint" },
    description:
      "Gemini-powered ETL inside Google Workspace. Dynamic JSON flattener, bidirectional webhook engine, and CacheService tricks to dodge execution limits.",
    highlights: ["Bidirectional sync", "Auto JSON flattening", "Decoupled frontend"],
    stack: ["Gemini", "Apps Script", "Webhooks", "Google Sheets"],
    glow: "cyber",
  },
  {
    title: "Hybrid ML — Diabetes Risk & Retinopathy",
    period: "Sep 2025 – Oct 2025",
    status: { label: "Research", accent: "electric" },
    description:
      "Leakage-safe stacking framework with out-of-fold CV, plus a dual-backbone CNN fusion model for diabetic retinopathy classification.",
    highlights: ["98% accuracy", "96% generalization", "100K+ patient dataset", "77% DR classification"],
    stack: ["XGBoost", "Random Forest", "CNN Fusion", "PyTorch"],
  },
  {
    title: "NTPC Vocational — PPE & OCR Suite",
    period: "Jun 2025 – Jul 2025",
    status: { label: "Deployed", accent: "cyber" },
    description:
      "YOLO + OpenCV PPE monitoring across 5 CCTV feeds with a real-time Flask + React dashboard, plus a Tesseract.js OCR pipeline for Aadhaar verification.",
    highlights: ["88% PPE precision", "92% OCR accuracy", "10+ hrs/month saved", "1,200+ docs verified"],
    stack: ["YOLO", "OpenCV", "Flask", "React", "Tesseract.js"],
    glow: "cyber",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-28 sm:px-6">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-aurora opacity-30" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          overline="02 — Projects"
          title="Things I've"
          highlight="actually shipped"
          subtitle="From patent applications to production dashboards. No tutorials, no toy demos."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 0.05}>
              <GradientBorderCard amber={p.amber} glow={p.glow ?? "primary"} className="h-full">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {p.period}
                  </span>
                  <TechBadge accent={p.status.accent}>{p.status.label}</TechBadge>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>

                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 rounded-lg border border-border bg-surface-1/60 px-3 py-2 text-xs"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                      <span className="text-foreground">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <TechBadge key={s}>{s}</TechBadge>
                  ))}
                </div>

                
              </GradientBorderCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
