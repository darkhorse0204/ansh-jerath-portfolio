import { BadgeCheck, ExternalLink } from "lucide-react";
import { GradientBorderCard, RevealOnScroll, SectionHeader } from "./primitives";

const CERTS = [
  {
    name: "Analytics Cloud",
    accent: "var(--electric)",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7DDF37BFF7A018ED5D6786E9FE4709812C31E975F123DAC27FF0991A3D3B2845",
  },
  {
    name: "Database@AWS Architect",
    accent: "var(--cyber)",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E5BA146038BE201F746E56854B5AC1D0CA3332936A33F2AA09907B7BE169084A",
  },
  {
    name: "DevOps",
    accent: "var(--mint)",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=688F313429980ACAF0B4D1BE635B405F95A1C6D08D9635187A31BD5329057DA1",
  },
  {
    name: "Data Science",
    accent: "var(--amber-glow)",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DF6F30D9E115349249479FC28F4C39913EF7D44D8FE46AB4A834AF473BD05DA1",
  },
  {
    name: "Generative AI",
    accent: "var(--rose)",
    href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A5498A581D47574886895FEBD738AFCAB7927B1E879143A57D6BBDD4D1E04333",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          overline="05 — Certifications"
          title="Verified by"
          highlight="Oracle"
          subtitle="Five Oracle certifications spanning analytics, cloud, devops, data science, and gen AI."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c, i) => (
            <RevealOnScroll key={c.name} delay={i * 0.05}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group block h-full"
              >
                <GradientBorderCard className="h-full">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="rounded-xl p-2.5"
                      style={{ background: `color-mix(in oklab, ${c.accent} 14%, transparent)` }}
                    >
                      <BadgeCheck style={{ color: c.accent }} />
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground transition-colors group-hover:text-foreground"
                    />
                  </div>
                  <span className="mt-4 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Oracle Certified
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold">{c.name}</h3>
                </GradientBorderCard>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
