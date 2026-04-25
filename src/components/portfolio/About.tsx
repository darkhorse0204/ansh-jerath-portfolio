import * as React from "react";
import { useInView, useReducedMotion } from "framer-motion";
import {
  Award,
  BookOpen,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { GradientBorderCard, RevealOnScroll, SectionHeader, TechBadge } from "./primitives";

function CountUp({ to, suffix = "", duration = 1.4 }: { to: number; suffix?: string; duration?: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);
  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          overline="01 — About"
          title="Engineering at the"
          highlight="intersection of intelligence & impact"
          subtitle="Patent-pending innovation, full-stack craft, and systems thinking — built across labs, hackathons, and student-led communities."
        />

        {/* Editorial two-column layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* LEFT — identity column */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Identity / intro */}
            <RevealOnScroll>
              <GradientBorderCard className="relative overflow-hidden">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-electric/15 blur-3xl" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-electric">
                  Hello, world
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold leading-tight">
                  I build <span className="text-gradient">edge intelligence</span> that ships.
                </h3>
                <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                  Junior at VIT Vellore. Patent-pending inventor of QuakeGuard. I write
                  leakage-safe ML pipelines, lead student communities, and care more about
                  latency than leaderboards. Always shipping, always learning, always
                  curious about what lives at the edge.
                </p>
              </GradientBorderCard>
            </RevealOnScroll>

            {/* By the numbers */}
            <RevealOnScroll delay={0.05}>
              <GradientBorderCard className="flex h-full flex-col">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    By the Numbers
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between divide-y divide-border">
                  <StatRow label="CGPA" value={<>8.56<span className="text-muted-foreground">/10</span></>} />
                  <StatRow label="Members Led" value={<><CountUp to={1800} />+</>} />
                  <StatRow label="Patent Pending" value="01" />
                  <StatRow label="Years Building" value="04" />
                </div>
              </GradientBorderCard>
            </RevealOnScroll>

          </div>

          {/* RIGHT — feature column */}
          <div className="space-y-6 lg:col-span-7">
            {/* Patent feature */}
            <RevealOnScroll delay={0.05}>
              <GradientBorderCard amber className="relative overflow-hidden">
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-amber-glow/20 blur-3xl" />
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-amber-glow/15 p-2.5">
                    <Award className="text-amber-glow" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-amber-glow">
                      Patent Pending · App No. 202641024381
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                      QuakeGuard Edge-AI
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                  Decentralized seismic anomaly detection achieving{" "}
                  <span className="text-foreground">0.91 AUC</span> with{" "}
                  <span className="text-foreground">38.9 ms latency</span> and a logic-gate
                  validator that eliminates 100% of false positives.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <TechBadge accent="amber">Edge AI</TechBadge>
                  <TechBadge accent="amber">CNN + DSP</TechBadge>
                  <TechBadge accent="amber">Logic Validator</TechBadge>
                </div>
              </GradientBorderCard>
            </RevealOnScroll>

            {/* Philosophy */}
            <RevealOnScroll delay={0.1}>
              <GradientBorderCard>
                <Code2 className="text-electric" />
                <h3 className="mt-3 font-display text-lg font-semibold">Tech Philosophy</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ship leakage-safe pipelines. Optimize for latency, not vanity metrics. Build
                  for the edge so intelligence lives where decisions happen — not where the
                  cloud reaches.
                </p>
              </GradientBorderCard>
            </RevealOnScroll>

            {/* Learning + Beyond side by side */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <RevealOnScroll delay={0.15}>
                <GradientBorderCard className="h-full">
                  <BookOpen className="text-cyber" />
                  <h3 className="mt-3 font-display text-base font-semibold">Currently Learning</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["Rust", "WASM", "Triton", "RAG", "Distributed inference"].map((t) => (
                      <TechBadge key={t} accent="cyber">{t}</TechBadge>
                    ))}
                  </div>
                </GradientBorderCard>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <GradientBorderCard className="h-full">
                  <Sparkles className="text-mint" />
                  <h3 className="mt-3 font-display text-base font-semibold">Beyond the Code</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["Swimmer", "Flute", "NGO Volunteer", "Hackathons"].map((t) => (
                      <TechBadge key={t} accent="mint">{t}</TechBadge>
                    ))}
                  </div>
                </GradientBorderCard>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        {/* Bottom meta strip — balances the layout */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <RevealOnScroll delay={0.05}>
            <GradientBorderCard className="h-full">
              <GraduationCap className="text-electric" size={20} />
              <h4 className="mt-3 font-display text-sm font-semibold">Education</h4>
              <p className="mt-1 text-xs text-muted-foreground">B.Tech IT · VIT Vellore '27</p>
            </GradientBorderCard>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <GradientBorderCard className="h-full">
              <MapPin className="text-mint" size={20} />
              <h4 className="mt-3 font-display text-sm font-semibold">Based In</h4>
              <p className="mt-1 text-xs text-muted-foreground">Vellore, India · Open to relocate</p>
            </GradientBorderCard>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <GradientBorderCard className="h-full">
              <Award className="text-amber-glow" size={20} />
              <h4 className="mt-3 font-display text-sm font-semibold">Languages</h4>
              <p className="mt-1 text-xs text-muted-foreground">English · Hindi</p>
            </GradientBorderCard>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <GradientBorderCard className="h-full">
              <Code2 className="text-cyber" size={20} />
              <h4 className="mt-3 font-display text-sm font-semibold">Availability</h4>
              <p className="mt-1 text-xs text-muted-foreground">Internships · Summer '26</p>
            </GradientBorderCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function StatRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between py-3 first:pt-0 last:pb-0">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <span className="font-display text-2xl font-bold text-gradient tabular-nums sm:text-3xl">
        {value}
      </span>
    </div>
  );
}
