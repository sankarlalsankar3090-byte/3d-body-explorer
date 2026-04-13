# Design Brief — 3D Human Body Explorer

**Purpose:** Interactive 3D organ exploration tool for bilingual educational learning (Hindi + English). Users rotate, zoom, and discover human anatomy through touch and mouse gestures.

**Tone:** Medical-clean, authoritative yet approachable. Museum-quality interactive exhibits meets refined SaaS polish. Scientific credibility without sterility.

**Differentiation:** Bilingual two-column layout (Hindi left, English right) maintains synchronized descriptions. 3D model as hero element anchoring the page. Gesture-driven interactions (mobile + desktop). Dark mode support for evening study sessions.

## Palette

| Token             | Light OKLCH          | Dark OKLCH           | Usage                                |
| :---------------- | :------------------- | :------------------- | :----------------------------------- |
| `primary`         | `0.55 0.125 175`     | `0.70 0.15 175`      | Primary actions, active states       |
| `secondary`       | `0.75 0.08 80`       | `0.75 0.08 80`       | Warm accents, human warmth highlight |
| `accent`          | `0.65 0.22 180`      | `0.75 0.20 180`      | Highlights, interactive elements     |
| `foreground`      | `0.15 0.02 240`      | `0.94 0.01 240`      | Text, primary contrast               |
| `background`      | `0.96 0.01 235`      | `0.12 0.01 240`      | Page background                      |
| `card`            | `0.98 0.01 240`      | `0.16 0.01 235`      | Info panels, bilingual sections      |
| `muted`           | `0.92 0.01 240`      | `0.24 0.01 240`      | Secondary backgrounds, disabled      |
| `border`          | `0.88 0.01 240`      | `0.28 0.01 240`      | Dividers, subtle boundaries          |

**Color Logic:** Cool cyan/teal palette (trust, science, depth) paired with warm sand secondary (human warmth, approachability). Light mode defaults to near-white with teal accents; dark mode shifts to near-black with brighter teal for readability.

## Typography

| Layer    | Font            | Weight   | Usage                    |
| :------- | :-------------- | :------- | :----------------------- |
| Display  | General Sans    | 600–700  | Page title, section heads |
| Body     | Lora            | 400–500  | Description text, labels |
| Mono     | Geist Mono      | 400–500  | Code blocks (future)     |

**Hierarchy:** Display font creates distinction; Lora body provides warm, readable presence for bilingual descriptions. Mix of geometric (display) + serif warmth (body) avoids clinical feel.

## Structural Zones

| Zone          | Background    | Treatment                       | Purpose                     |
| :------------ | :------------ | :------------------------------ | :-------------------------- |
| Header        | Card          | Subtle border-bottom, padding   | App title, body part tabs   |
| 3D Viewport   | Background    | Elevated shadow, rounded corners | Hero 3D model display       |
| Info Panel    | Card          | Bilingual split grid, no border | Hindi + English descriptions |
| Footer        | Muted/40      | Subtle border-top, text-center  | Credits, metadata (optional) |

## Shape Language

- **Radius:** 0.75rem (12px) — softer than 8px, softer than native iOS (maintains approachability without feeling oversized).
- **Shadows:** Subtle elevation (`0 2px 8px`) for depth; no harsh shadows or glows.
- **Spacing:** 1.5rem gaps between bilingual sections. Dense type scale for body text.

## Component Patterns

- **Body Part Selector:** Tab or dropdown UI; active state highlights with `accent` color. Smooth transitions.
- **Bilingual Description Card:** Two-column grid. Hindi title in bold display font, English title matched below. Body copy in Lora (serif warmth for readability).
- **3D Canvas:** Full-viewport interactive element. Gesture hints subtle overlays on first load (rotate icon, pinch-to-zoom).
- **Glass Effect (optional):** `backdrop-filter: blur(12px)` for floating UI overlays on top of 3D model.

## Motion & Interaction

- **Transitions:** 0.3s smooth cubic-bezier for all state changes (hover, focus, active).
- **3D Rotation:** Frame-rate independent, smooth continuous rotation on drag.
- **Zoom:** Constrained min/max; smooth easing.
- **Gesture Feedback:** Subtle pulse animation on interactive elements; slide-up entrance for description panels.
- **Loading State:** Pulse animation on 3D model while loading.

## Responsive

- **Desktop:** Full bilingual split (2 columns), 3D viewport 100% width.
- **Tablet (≤768px):** Bilingual split stacks to 1 column; tabs remain horizontal.
- **Mobile (≤480px):** Full stack, font sizes reduced, touch targets 44px minimum.

## Signature Detail

**Bilingual Sync:** Description sections mirror each other in layout and rhythm. When user scrolls Hindi text, English scrolls in parallel (if needed), creating visual harmony across languages. Reinforces educational parity.

## Constraints

- No gradients on text or backgrounds (avoid generic AI look).
- All colors defined in OKLCH; no hex or named colors in components.
- Dark mode pairs cool teal (primary) with softer type contrast; no harsh whites.
- 3D canvas accessibility: keyboard navigation to select body parts; description text always readable below model.

## Accessibility & Alt Text

- 3D model: aria-label describing the organ, alt text for descriptive images.
- Bilingual text: `lang="hi"` / `lang="en"` attributes for screen readers.
- Color not only differentiator; active body part uses text/icon + teal highlight.
- Touch targets: minimum 44×44px.

---

**Design System Owner:** Design Director  
**Last Updated:** Apr 2026  
**Framework:** React + TypeScript + Tailwind CSS (OKLCH)  
**Theme Support:** Light + Dark
