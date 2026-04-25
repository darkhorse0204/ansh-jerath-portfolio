import { cn } from "@/lib/utils";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";
import { GradientBorderCard, RevealOnScroll, SectionHeader } from "./primitives";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgordzdb";

const INFO = [
  {
    Icon: Mail,
    label: "Email",
    value: "jerathansh@gmail.com",
    href: "mailto:jerathansh@gmail.com",
    accent: "var(--electric)",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 738-910-6377",
    href: "tel:+917389106377",
    accent: "var(--cyber)",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "ansh-jerath",
    href: "https://www.linkedin.com/in/ansh-jerath-a25412214",
    accent: "var(--mint)",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Vellore, India",
    href: "https://maps.google.com/?q=Vellore",
    accent: "var(--amber-glow)",
  },
];

export function Contact() {
  const [submitting, setSubmitting] = React.useState(false);
  const [shake, setShake] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      triggerShake();
      return;
    }

    setSubmitting(true);
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        toast.success("Message sent!", { description: "I'll get back within 24 hours." });
        form.reset();
      } else {
        throw new Error("Form endpoint not configured");
      }
    } catch {
      toast.error("Couldn't send right now", {
        description: "Email me directly at jerathansh@gmail.com — I'll see it instantly.",
      });
      triggerShake();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative px-4 py-28 sm:px-6">
      <div className="absolute inset-x-0 top-0 -z-10 h-[60%] bg-aurora opacity-40" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          overline="07 — Contact"
          title="Let's build"
          highlight="something good"
          subtitle="I'm open to internships, research collabs, and ambitious freelance work."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Info column */}
          <div className="space-y-4 lg:col-span-2">
            {INFO.map((item, i) => (
              <RevealOnScroll key={item.label} delay={i * 0.05}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="group glass flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:border-electric hover:shadow-glow-primary"
                >
                  <div
                    className="rounded-xl p-3 transition-transform group-hover:scale-110"
                    style={{ background: `color-mix(in oklab, ${item.accent} 14%, transparent)` }}
                  >
                    <item.Icon style={{ color: item.accent }} size={20} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-display text-base font-semibold">{item.value}</div>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>

          {/* Form */}
          <RevealOnScroll delay={0.1} className="lg:col-span-3">
            <GradientBorderCard className={cn("h-full", shake && "animate-shake")}>
              <form ref={formRef} onSubmit={onSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field name="name" label="Name" required />
                  <Field name="email" label="Email" type="email" required />
                </div>
                <Field name="subject" label="Subject" required />
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    placeholder="Tell me what you're building…"
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-surface-1/60 px-4 py-3 font-sans text-sm text-foreground outline-none ring-0 transition-all placeholder:text-muted-foreground/60 focus:border-electric focus:shadow-glow-primary"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-glow-primary transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
                >
                  <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                  {submitting ? "Sending…" : "Send Message"}
                </button>
                <p className="font-mono text-[10px] text-muted-foreground">
                  Or just email{" "}
                  <a className="text-electric hover:underline" href="mailto:jerathansh@gmail.com">
                    jerathansh@gmail.com
                  </a>
                </p>
              </form>
            </GradientBorderCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-surface-1/60 px-4 py-3 font-sans text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-electric focus:shadow-glow-primary"
        placeholder={label}
      />
    </div>
  );
}
