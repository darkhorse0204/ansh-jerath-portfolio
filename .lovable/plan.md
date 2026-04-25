
## Ansh Jerath — Portfolio (Trimmed Build)

A premium, dark "Obsidian Nexus" single-page portfolio matching the spec's content, design tokens, layout, and reveal animations — with the heaviest effects trimmed for speed and stability.

### Design system
- **Theme:** Pure dark (`#050505` base), electric blue + cyberpunk purple accents, gradient text on key words.
- **Typography:** Plus Jakarta Sans (display), Inter (body), JetBrains Mono (overlines/badges) via Google Fonts.
- **Tokens:** Full color, spacing, radius, shadow, and animation token system installed in `styles.css` over the existing oklch theme.
- **Reusable primitives:** `RevealOnScroll`, `SectionHeader` (overline + gradient title + subtitle + glow divider), `GradientBorderCard`, `TechBadge`.

### Sections (all on `/`, separate components)
1. **Navigation** — Fixed glass nav with "AJ" gradient logo, scroll-spy active state, "Let's Talk" pill CTA, full-screen mobile menu with hamburger.
2. **Hero** — Status pill ("Available for opportunities", pulsing dot), staggered word-reveal of "Ansh Jerath", typewriter-rotating subtitle (AI/ML Engineer → Patent Holder → …), bio paragraph, "View My Work" + "Download CV" CTAs (toast on CV click), social row, scroll indicator. Static `--gradient-aurora` background.
3. **About — Bento grid** — 9 glass cards (Education, Leadership, Quick Stats with count-up, Location, Tech Philosophy, Patent hero card, Beyond the Code tags, Currently Learning tags, Connect). Patent card highlighted with amber accent + animated gradient border. Hover lift only (no 3D tilt).
4. **Projects** — 2-column glass cards with gradient borders. All 4 projects: QuakeGuard, Serverless AI Pipeline, Hybrid ML Diabetes, NTPC PPE. Status badges, tech pills, GitHub/Live Demo buttons (toast: "Links coming soon").
5. **Experience** — Vertical timeline (alternating left/right desktop, left-aligned mobile) with glowing nodes, scroll-drawn line. Mozilla Firefox Club + NTPC entries.
6. **Skills** — 3 category columns (Languages, Tools, Domains) with pill tags, plus dual-row infinite marquee with edge fade mask and pause-on-hover.
7. **Certifications** — Responsive grid of 5 Oracle cert cards, each with `BadgeCheck` icon in its accent color, linked to Oracle badge URLs (open in new tab).
8. **Awards** — 2 cards: Medal of Distinction (IMO) + Citizen Scientist Certificate (IASC).
9. **Beyond the Code** — 5 small cards: Swimmer, Hackathons, Tech Fest Finance, Flute Performer, NGO Volunteer.
10. **Contact** — Two-column: contact info (email/phone/LinkedIn/location with hover glow) + form (Name, Email, Subject, Message). Form posts to `https://formspree.io/f/YOUR_FORM_ID` placeholder with shake-on-invalid + sonner success/error toasts.
11. **Footer** — Copyright with hoverable colored "passion"/"purpose" words, nav links, social icons, top gradient hairline.

### Trims applied (per your choice)
- ❌ Custom cursor — native cursor.
- ❌ Film grain overlay.
- ❌ Interactive particle grid in hero — replaced with the static aurora gradient (still animated subtly via CSS).
- ❌ 3D mouse-tilt on cards — keep clean hover lift + glow instead.
- ✅ Keep: smooth scroll, scroll progress bar, all reveal animations, count-ups, typewriter, marquee, animated patent border, mobile menu.

### Cross-cutting
- All routes/sections via the single `index.tsx` (single-page experience as specified, with hash anchors for nav).
- `useReducedMotion` respected globally; reveal/typewriter/marquee disable when set.
- SEO meta tags, OG tags, semantic landmarks, focus rings, ARIA labels, skip-to-content link.
- Mobile-first responsive: grids collapse, section padding reduces, timeline left-aligns, marquee keeps fade masks.

### Deliverable
- Replaces the placeholder index with the full portfolio.
- Adds `framer-motion` and Google Fonts.
- Updates root `<head>` meta to Ansh Jerath SEO/OG tags.
- Single-route SPA — no extra route files needed since the spec is a one-page experience with hash navigation.
