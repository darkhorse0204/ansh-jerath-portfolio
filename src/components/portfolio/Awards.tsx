import { Medal, Star, Music, Waves, Code2, HeartHandshake, Calculator } from "lucide-react";
import { GradientBorderCard, RevealOnScroll, SectionHeader } from "./primitives";

const AWARDS = [
  {
    Icon: Medal,
    title: "Medal of Distinction",
    org: "International Mathematics Olympiad",
    note: "Excelled in the SOF-conducted competitive examination.",
    accent: "var(--amber-glow)",
  },
  {
    Icon: Star,
    title: "Citizen Scientist — Certificate of Merit",
    org: "International Astronomical Search Collaboration",
    note: "Contributed to asteroid data analysis with IASC.",
    accent: "var(--electric)",
  },
];

const EXTRA = [
  { Icon: Waves, title: "State-Trial Swimmer", note: "Advanced beyond district level." },
  { Icon: Code2, title: "Hackathon Regular", note: "Reached advanced stages multiple times." },
  { Icon: Calculator, title: "Tech Fest Finance", note: "5 events · 65K+ revenue managed." },
  { Icon: Music, title: "Flute Performer", note: "1,400+ audience across cultural events." },
  { Icon: HeartHandshake, title: "NGO Volunteer", note: "2 years teaching & blood donation in Vellore." },
];

export function Awards() {
  return (
    <section id="awards" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          overline="06 — Recognition"
          title="Awards &"
          highlight="beyond the code"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {AWARDS.map((a, i) => (
            <RevealOnScroll key={a.title} delay={i * 0.06}>
              <GradientBorderCard className="h-full">
                <div className="flex items-start gap-4">
                  <div
                    className="rounded-xl p-3"
                    style={{ background: `color-mix(in oklab, ${a.accent} 14%, transparent)` }}
                  >
                    <a.Icon style={{ color: a.accent }} size={26} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{a.title}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {a.org}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">{a.note}</p>
                  </div>
                </div>
              </GradientBorderCard>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-12">
          <RevealOnScroll>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="text-electric">/</span> Beyond the code
            </h3>
          </RevealOnScroll>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {EXTRA.map((e, i) => (
              <RevealOnScroll key={e.title} delay={i * 0.04}>
                <div className="glass h-full rounded-2xl p-4 transition-all hover:-translate-y-1 hover:border-electric hover:shadow-glow-primary">
                  <e.Icon className="text-electric" size={20} />
                  <h4 className="mt-3 font-display text-sm font-semibold">{e.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{e.note}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
