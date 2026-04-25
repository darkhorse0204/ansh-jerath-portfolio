import { Briefcase, Users } from "lucide-react";
import { RevealOnScroll, SectionHeader, TechBadge } from "./primitives";
import { cn } from "@/lib/utils";

type Exp = {
  role: string;
  org: string;
  period: string;
  Icon: typeof Briefcase;
  bullets: string[];
  tags: string[];
};

const EXPERIENCE: Exp[] = [
  {
    role: "Chairperson",
    org: "Mozilla Firefox Club, VIT",
    period: "Jan 2026 – Present",
    Icon: Users,
    bullets: [
      "Solely lead the club — vision, strategy, and end-to-end execution across all initiatives.",
      "Coordinate 1,800+ members across teams to ensure accountability and timely delivery.",
      "Drive governance, growth, and long-term sustainability via data-driven decisions.",
    ],
    tags: ["Leadership", "Governance", "1800+ members"],
  },
  {
    role: "Finance Head",
    org: "Mozilla Firefox Club, VIT",
    period: "Jan 2025 – Jan 2026",
    Icon: Users,
    bullets: [
      "Managed budgets exceeding ₹50,000 with accurate expense tracking, financial planning, and detailed reporting.",
      "Secured 7 sponsorships and raised ₹2,00,000+ to support events, operations, and overall club expansion.",
    ],
    tags: ["Finance", "Sponsorships", "Budgeting"],
  },
  {
    role: "Vocational Trainee",
    org: "NTPC — National Thermal Power Corporation",
    period: "Jun 2025 – Jul 2025",
    Icon: Briefcase,
    bullets: [
      "Built PPE detection across 5 CCTV feeds (YOLO + OpenCV) with 88% precision.",
      "Shipped a Flask + React + MySQL dashboard with Socket.IO and HighCharts logging 200+ events.",
      "Automated Aadhaar verification with Tesseract.js, hitting 92% extraction accuracy on 1,200+ docs.",
    ],
    tags: ["YOLO", "Flask", "React", "Tesseract.js"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          overline="03 — Experience"
          title="Where I've"
          highlight="led & shipped"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-electric via-cyber to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE.map((e, i) => {
              const right = i % 2 === 1;
              return (
                <RevealOnScroll key={e.org} delay={i * 0.05}>
                  <div
                    className={cn(
                      "relative grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-12",
                    )}
                  >
                    {/* Node */}
                    <div className="absolute left-4 top-3 z-10 -translate-x-1/2 md:left-1/2">
                      <div className="relative flex h-4 w-4 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric/40" />
                        <span className="relative h-3 w-3 rounded-full bg-gradient-primary shadow-glow-primary" />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={cn(
                        "ml-10 md:ml-0",
                        right ? "md:col-start-2" : "md:col-start-1 md:text-right",
                      )}
                    >
                      <div
                        className={cn(
                          "glass-strong gradient-border rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow-primary",
                        )}
                      >
                        <div className={cn("flex items-center gap-2", !right && "md:justify-end")}>
                          <e.Icon size={16} className="text-electric" />
                          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                            {e.period}
                          </span>
                        </div>
                        <h3 className="mt-2 font-display text-xl font-bold">{e.role}</h3>
                        <p className="mt-1 text-sm text-gradient font-semibold">{e.org}</p>
                        <ul className={cn("mt-4 space-y-2 text-sm text-muted-foreground", !right && "md:text-right")}>
                          {e.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                        <div className={cn("mt-4 flex flex-wrap gap-2", !right && "md:justify-end")}>
                          {e.tags.map((t) => (
                            <TechBadge key={t}>{t}</TechBadge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
